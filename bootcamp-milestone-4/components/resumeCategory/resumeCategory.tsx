import React from "react";
import { ResumeCategory } from "@/static/resumeData";
import ResumeEntry from "../resumeEntry/resumeEntry";
import Style from "./resumeCategory.module.css";

export default function ResumeCategoryContainer(props: ResumeCategory) {
    return (
        <div className={Style.resumeCategoryContainer}>
            <h1>{props.title}</h1>
            <div className={Style.resumeCategoryBar}></div>
            {props.entries.map(entry => 
                ResumeEntry(entry)
            )}
        </div>
    );
}