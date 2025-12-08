import mongoose, { Schema } from "mongoose";

type Portfolio = {
    title: string,
    startDate: Date,
    endDate: Date,
    category: string,
    description: string,
    tags: string[],
    image: string,
    imageAlt: string,
};

const portfolioSchema = new Schema<Portfolio>({
    title: { type: String, required: true},
    startDate: { type: Date, required: true, default: new Date()},
    endDate: { type: Date, required: false },
    category: { type: String, required: true },
    description: { type: String, required: true }, 
    tags: { type: [String], required: true },
    image: { type: String, required: true },
    imageAlt: { type: String, required: true }
})

const Portfolio = mongoose.models['portfolios'] ||
    mongoose.model('portfolios', portfolioSchema);

export default Portfolio;