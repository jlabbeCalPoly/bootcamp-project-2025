import React from "react";
import Link from "next/link";
import Style from "./button.module.css";

export default function Button({text, slug}: {text : string, slug : string}) {
    return (
        <Link href={slug}>
            <div className={Style.buttonContainer}>
                <h2>{text}</h2>
                <img src={"/arrowIcon.svg"}/>
            </div>
        </Link>
    )
}