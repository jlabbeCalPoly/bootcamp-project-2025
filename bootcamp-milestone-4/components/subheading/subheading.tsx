import React from "react";
import Style from "./subheading.module.css";

export default function Subheading({category, date}: { category: string, date: string }) {
    return (
        <div className={Style.subheadingContainer}>
            <p>{category}</p>
            <p>{date}</p>
        </div>
    );
}