import React from "react";
import connectDB from "@/src/database/db"
import Portfolio from "@/src/database/portfolioSchema"
import PortfolioPageLayout from "@/components/portfolioPageLayout/portfolioPageLayout";

export default async function PortfolioPage() {
    async function getPortfolio() {
        await connectDB() // function from db.ts before
        console.log("Connected")
    
        try {
            // query for all blogs and sort by date
            const portfolios = await Portfolio.find().sort({ startDate: -1 }).orFail()
            return portfolios;
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    const portfolios = await getPortfolio() 
    if (portfolios) {
        return (
            <PortfolioPageLayout {...portfolios}/>
        );
    }
}