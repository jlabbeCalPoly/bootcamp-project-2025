"use client"

import { useState } from "react";
import IComment from "@/static/iComment";
import Title from "../title/title";
import CommentList from "../iCommentList/iCommentList";
import Input from "../input/input";
import LoadingButton from "../loadingButton/loadingButton";
import Notification, { NotificationProps } from "../notification/notification";
import Style from "./iCommentPageLayout.module.css";

type ErrorDict = {
  [key: string]: string;
};

interface CommentProps {
    data: IComment[],
    slug: string
}

export default function CommentPageLayout({data, slug}: CommentProps) {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    
    const [nameErrorMsg, setNameErrorMsg] = useState<string | undefined>(
        undefined
    );
    const [messageErrorMsg, setMessageErrorMsg] = useState<string | undefined>(
        undefined
    );

    const [notificationProps, setNotificationProps] = useState<NotificationProps>({
        message: undefined,
        status: undefined
    });

    const [loading, setLoading] = useState(false);

    async function submit() {
        if (loading) {
            return;
        }
        setLoading(true);

        const res = await fetch(`http://localhost:3000/api/blogs/${slug}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                Name: name,
                Message: message
            }),
        });

        try {
            const body = await res.json();

            // Success, comment was successfully recieved/added
            if (res.status === 200) {
                const emptyStr = "";

                // Reset the Name input field
                const nameInput = document.getElementById("Name") as HTMLInputElement;
                if (nameInput !== null) {
                    nameInput.value = emptyStr;
                    setName(emptyStr);
                    setNameErrorMsg(undefined);
                }

                // Reset the Message input field
                const messageInput = document.getElementById("Message") as HTMLInputElement;
                if (messageInput !== null) {
                    messageInput.value = emptyStr;
                    setMessage(emptyStr);
                    setMessageErrorMsg(undefined);
                }

                // Form data wasn't valid
            } else if (res.status === 400) {
                const errors: ErrorDict = body.errors;

                const inputs = ["Name", "Message"];
                for (const id of inputs) {
                    const msg = errors[id];

                    if (id === "Name") {
                        setNameErrorMsg(msg);
                    } else if (id === "Message") {
                        setMessageErrorMsg(msg);
                    }
                }
            }

            // Notification (takes the status and a message)
            setNotificationProps({
                message: body.message,
                status: res.status
            });
        } catch (err) {
            // Notification (takes the status and a message)
            setNotificationProps({
                message: `There was an error handling your request: ${err}`,
                status: 400
            });
        }

        // No longer waiting for a response from the server, so reset the loading flag
        setLoading(false);
    }

    return (
        <>
            <div className={Style.commentPageLayoutContainer}>
                <Title text="Liked this blog? Join the conversation!"/>
                <CommentList data={data}/>
                <Input
                    id="Name"
                    required={true}
                    errorMsg={nameErrorMsg}
                    callback={setName}
                />
                <Input
                    id="Message"
                    required={true}
                    errorMsg={messageErrorMsg}
                    callback={setMessage}
                />
                <LoadingButton
                    callback={submit}
                    loading={loading}
                    text="Submit"
                    img={"/PaperAirplane.svg"}
                />
            </div>
            <div className={Style.commentNotificationContainer}>
                <Notification props={notificationProps}/>
            </div>
        </>
    );
}
