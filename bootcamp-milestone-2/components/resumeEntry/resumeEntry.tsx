import React from "react";
import { ResumeEntry } from "@/static/resumeData";
import Heading from "../heading/heading";
import Subheading from "../subheading/subheading";
import ResumeBullets from "../resumeBullets/resumeBullets";
import Style from "./resumeEntry.module.css";

export default function ResumeEntryContainer(props: ResumeEntry) {
    return (
        <div className={Style.resumeEntryContainer}>
            <Heading title={props.title} date={props.date}/>
            <Subheading category={props.description} date={props.location}/>
            <ResumeBullets bullets={props.bullets}/>
        </div>
    )
}