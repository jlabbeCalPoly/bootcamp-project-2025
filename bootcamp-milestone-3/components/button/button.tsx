import React from "react";
import Link from "next/link";
import Style from "./button.module.css";

export default function Button({text, slug, type}: {text : string, slug : string, type: string}) {
    switch (type) {
        /* TODO: Change the icon for the link case to a download arrow instead */
        case ("download"):
            return (
                <a className={Style.buttonContainer} href={slug} download>
                    <h2>{text}</h2>
                    <img src={"/download.svg"}/> 
                </a>
            )
        case("link"): 
            return (
                <Link className={Style.buttonContainer} href={slug}>
                    <h2>{text}</h2>
                    <img src={"/link.svg"}/>
                </Link>
            )
        default:
            return(
                <></>
            );
    }
}