"use client"
import { useState, useEffect } from "react";
import Button from "../button/button";
import PortfolioGroup from "../portfolioGroup/portfolioGroup";
import { Portfolio } from "@/static/portfolioInterface"
import Style from "./portfolioPageLayout.module.css";

export default function PortfolioPageLayout({data}: {data: Portfolio[]}) {
    const [grouped, setGrouped] = useState(() => new Map());

    function groupPortfolios() {
        const map = new Map();
        data.forEach((entry) => {
            const category = entry.category;
            if (map.has(category)) {
                map.get(category).push(entry);
            } else {
                const portfolios: Portfolio[] = [entry]
                map.set(category, portfolios);
            }
        })
        setGrouped(map)
    };
    
    useEffect(() => {
        groupPortfolios();
    }, [data]);

    return (
        <div className={Style.portfolioListContainer}>
            <Button text="Download Resume" slug={"/julianlabbe_resume_10-23-25.pdf"} type="download"/>
            {[...grouped].map(([category, portfolios]) => (
                <PortfolioGroup category={category} portfolios={portfolios}/>
            ))}
        </div>
    )
}