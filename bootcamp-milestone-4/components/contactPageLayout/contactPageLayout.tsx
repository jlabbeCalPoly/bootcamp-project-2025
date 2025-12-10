"use client";
import { useState } from "react";
import ColorBends from "../backgrounds/colorBends/colorBends";
import Title from "../title/title";
import Input from "../input/input";
import LoadingButton from "../loadingButton/loadingButton";
import Notification, { NotificationProps } from "../notification/notification";
import Style from "./contactPageLayout.module.css";

type ErrorDict = {
  [key: string]: string;
};

export default function ContactPageLayout() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [nameErrorMsg, setNameErrorMsg] = useState<string | undefined>(
    undefined
  );
  const [emailErrorMsg, setEmailErrorMsg] = useState<string | undefined>(
    undefined
  );
  const [subjectErrorMsg, setSubjectErrorMsg] = useState<string | undefined>(
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

    const res = await fetch("http://localhost:3000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name: name,
        Email: email,
        Subject: subject,
        Message: message,
      }),
    });

    try {
      const body = await res.json();

      // Success, email was sent and form data was validated
      if (res.status === 200) {
        const emptyStr = "";

        // Reset the Name input field
        const nameInput = document.getElementById("Name") as HTMLInputElement;
        if (nameInput !== null) {
          nameInput.value = emptyStr;
          setName(emptyStr);
          setNameErrorMsg(undefined);
        }

        // Reset the Email input field
        const emailInput = document.getElementById("Email") as HTMLInputElement;
        if (emailInput !== null) {
          emailInput.value = emptyStr;
          setEmail(emptyStr);
          setEmailErrorMsg(undefined);
        }

        // Reset the Subject input field
        const subjectInput = document.getElementById(
          "Subject"
        ) as HTMLInputElement;
        if (subjectInput !== null) {
          subjectInput.value = emptyStr;
          setSubject(emptyStr);
          setSubjectErrorMsg(undefined);
        }

        // Reset the Message input field
        const messageInput = document.getElementById(
          "Message"
        ) as HTMLInputElement;
        if (messageInput !== null) {
          messageInput.value = emptyStr;
          setMessage(emptyStr);
          setMessageErrorMsg(undefined);
        }

        // Form data wasn't valid
      } else if (res.status === 400) {
        // Need to explicity declare the types so TypeScript doesn't yell at me
        const errors: ErrorDict = body.errors;

        const inputs = ["Name", "Email", "Subject", "Message"];
        for (const id of inputs) {
          const msg = errors[id];

          if (id === "Name") {
            setNameErrorMsg(msg);
          } else if (id === "Email") {
            setEmailErrorMsg(msg);
          } else if (id === "Subject") {
            setSubjectErrorMsg(msg);
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
      <div className={Style.contactBackgroundContainer}>
        <ColorBends
          colors={["#ff5c7a", "#8a5cff"]}
          rotation={0}
          speed={0.2}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={0}
          parallax={0.5}
          noise={0.1}
          transparent
        />
      </div>
      <div className={Style.contactContentContainer}>
        <Title text="Let's get in contact!" />
        <Input
          id="Name"
          required={true}
          errorMsg={nameErrorMsg}
          callback={setName}
        />
        <Input
          id="Email"
          required={true}
          errorMsg={emailErrorMsg}
          callback={setEmail}
        />
        <Input
          id="Subject"
          required={false}
          errorMsg={subjectErrorMsg}
          callback={setSubject}
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
      <div className={Style.contactNotificationContainer}>
        <Notification props={notificationProps}/>
      </div>
    </>
  );
}
