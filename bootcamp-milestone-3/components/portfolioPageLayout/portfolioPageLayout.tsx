import React from "react";
import Button from "../button/button";
import { Portfolio } from "@/static/portfolioInterface"
import Style from "./portfolioPageLayout.module.css";

export default function PortfolioPageLayout(data: Portfolio[]) {
    
    console.log(data);

    return (
        <div className={Style.resumeListContainer}>
            <Button text="Download Resume" slug={"/julianlabbe_resume_10-23-25.pdf"} type="download"/>
            
        </div>
    )
}