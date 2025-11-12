import React from "react";
import Style from "./heading.module.css";

export default function Heading({title, date}: { title: string, date: string }) {
    return (
        <div className={Style.headingContainer}>
            <h2>{title}</h2>
            <h2>{date}</h2>
        </div>
    );
}