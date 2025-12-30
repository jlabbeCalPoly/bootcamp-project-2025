import React from "react";
import Style from "./input.module.css";

type Props = {
    id: string,
    required: boolean,
    errorMsg: string | undefined,
    callback: (value: string) => void
}

/*
    @property title - The title shown for the input box.
    @property status - Determines the color of the input box and if the input message is visible
    @property onInput - Callback fired when the user types in the input.
*/
export default function Input({ id, required, errorMsg, callback } : Props) {
    return (
        <div className={Style.inputContainer}>
            <input id={id} className={`${Style.inputBoxShared} ${errorMsg === undefined ? Style.inputBoxNormal : Style.inputBoxError}`} type="text" placeholder={`${id}${required ? '*' : ''}`} onChange={(c) => callback(c.target.value)}/>
            <p className={Style.inputMessage}>
                {errorMsg === undefined ? "" : `*${errorMsg}`}
            </p>
        </div>
    );
}