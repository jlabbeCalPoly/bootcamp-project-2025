import React from "react";
import Style from "./subheading.module.css";

export default function Subheading({category, date}: { category: string, date: string }) {
    return (
        <div className={Style.subheadingContainer}>
            <h2>{category}</h2>
            <h2>{date}</h2>
        </div>
    );
}