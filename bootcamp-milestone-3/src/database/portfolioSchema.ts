import mongoose, { Schema } from "mongoose";

export interface Portfolio {
    title: string,
    startDate: Date,
    endDate: Date,
    category: string,
    image: string,
    imageAlt: string,
    bullets: string[]
};

const portfolioSchema = new Schema<Portfolio>({
    title: { type: String, required: true},
    startDate: { type: Date, required: true, default: new Date()},
    endDate: { type: Date, required: false },
    category: { type: String, required: true },
    image: { type: String, required: true },
    imageAlt: { type: String, required: true },
    bullets: { type: [String], required: true }
})

const Portfolio = mongoose.models['portfolio'] ||
    mongoose.model('portfolio', portfolioSchema);

export default Portfolio;