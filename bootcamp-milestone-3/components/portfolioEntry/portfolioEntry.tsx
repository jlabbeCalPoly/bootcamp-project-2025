import React from "react";
import { Portfolio } from "@/static/portfolioInterface";
import Style from "./portfolioEntry.module.css";

export default function PortfolioEntry({portfolio}: {portfolio: Portfolio}) {
    return (
        <div className={Style.portfolioEntryContainer}>
            <p>{portfolio.description}</p>
        </div>
    )
}