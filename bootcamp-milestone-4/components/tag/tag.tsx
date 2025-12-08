import React from "react";
import Style from "./tag.module.css";

export default function Tag({text}: {text: string}) {
    return (
        <p className={Style.tag}>{text}</p>
    );
}
