import React from "react";
import BlockContainer from "../blockContainer/blockContainer";
import PortfolioEntry from "../portfolioEntry/portfolioEntry";
import { Portfolio } from "@/static/portfolioInterface";
import Style from "./portfolioGroup.module.css";

export default function PortfolioGroup({category, portfolios}: {category: string, portfolios: Portfolio[]}) {
    console.log(category);
    console.log(portfolios);
    return (
        <BlockContainer >
            <div className={Style.portfolioGroupContainer}>
                <h2 className={Style.portfolioGroupCategory}>{category}</h2>
                {portfolios.map(portfolio => 
                    <PortfolioEntry portfolio={portfolio}/>
                )}
            </div>
        </BlockContainer>
    );
}