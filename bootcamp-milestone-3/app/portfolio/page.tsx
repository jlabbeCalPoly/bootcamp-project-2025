import React from "react";
import connectDB from "@/src/database/db"
import PortfolioSchema from "@/src/database/portfolioSchema"
import { Portfolio } from "@/static/portfolioInterface"
import PortfolioPageLayout from "@/components/portfolioPageLayout/portfolioPageLayout";
import { Mongoose } from "mongoose";

export default async function PortfolioPage() {
    async function getPortfolio() {
        await connectDB() // function from db.ts before
    
        let portfolios: Portfolio[] = [];
        try {
            // query for all blogs and sort by date
            portfolios = JSON.parse(
                JSON.stringify(await PortfolioSchema.find().sort({ startDate: -1 }).orFail())
            );
        } catch (err) {
            console.log(err);
        }

        return portfolios;
    }

    const portfolios = await getPortfolio()
    console.log(portfolios);
    return (
        <PortfolioPageLayout data={portfolios}/>
    );
}