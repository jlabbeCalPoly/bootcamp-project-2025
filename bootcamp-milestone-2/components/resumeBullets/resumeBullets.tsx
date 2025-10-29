import React from "react";
import Style from "./resumeBullets.module.css";

type bulletProps = {
    bullets: string[]
}

export default function ResumeBullets(props : bulletProps) {
    return (
        /* Use dangerouslySetInnerHTML to apply markup tags inside bullet points */
        <ul className={Style.resumeBulletsContainer}>
            {props.bullets.map(bullet => 
                <li dangerouslySetInnerHTML={{ __html: bullet }}></li>
            )}
        </ul>
    )
}