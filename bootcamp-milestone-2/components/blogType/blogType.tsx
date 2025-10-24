import React from "react";
import Style from "./blogType.module.css";
import { log } from "console";

export default function BlogType({category, date}: { category: string, date: string }) {
    return (
        <div className={Style.blogTypeContainer}>
            <h2>{category}</h2>
            <h2>{date}</h2>
        </div>
    );
}