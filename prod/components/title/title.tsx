import React from "react";
import Style from "./title.module.css";

export default function Title({text}: {text: string}) {
    return(
        <h1 className={Style.titleContainer}>{text}</h1>
    );
}