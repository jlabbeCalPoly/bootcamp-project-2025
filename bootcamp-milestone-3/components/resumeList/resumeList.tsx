import React from "react";
import Button from "../button/button";
import ResumeData from "@/static/resumeData";
import ResumeCategory from "../resumeCategory/resumeCategory";
import Style from "./resumeList.module.css";

export default function ResumeList() {
    return (
        <div className={Style.resumeListContainer}>
            <Button text="Download Resume" slug={"/julianlabbe_resume_10-23-25.pdf"} type="download"/>
            {ResumeData.map(data =>
                ResumeCategory(data)
            )}
        </div>
    )
}