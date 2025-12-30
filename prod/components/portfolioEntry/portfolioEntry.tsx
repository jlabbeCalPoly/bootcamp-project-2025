import React from "react";
import DatedImage from "../datedImage/datedImage";
import TagList from "@/components/tagList/tagList";
import { Portfolio } from "@/static/portfolioInterface";
import Style from "./portfolioEntry.module.css";

export default function PortfolioEntry({portfolio}: {portfolio: Portfolio}) {
    // Since JSON.stringify converts Date objects to their string representation, convert them back
    const startDateObj = new Date(portfolio.startDate);
    let endDateObj = null;
    if (portfolio.endDate) {
        endDateObj = new Date(portfolio.endDate);
    }

    return (
        <div className={Style.portfolioEntryContainer}>
            <DatedImage image={portfolio.image} imageAlt={portfolio.imageAlt} title={portfolio.title} startDate={startDateObj} endDate={endDateObj}/>
            <TagList tags={portfolio.tags}/>
            <p className={Style.portfolioEntryDescription}>{portfolio.description}</p>
        </div>
    )
}