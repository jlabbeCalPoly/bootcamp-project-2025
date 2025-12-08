import mongoose, { Schema } from "mongoose";
import BlogComponent from "@/static/blogComponent";
import IComment from "@/static/iComment";

export type BlogType = {
    title: string,
    date: Date,
    category: string,
    content: BlogComponent[],
    comments: IComment[],
    slug: string,
}

const blogSchema = new mongoose.Schema<BlogType>({
    title: { type: String, required: true },
    date: { type: Date, required: true },
    category: { type: String, required: true },
    content: { type: [Object], required: true },
    comments:{ type: [Object], required: true },
    slug: { type: String, required: true },

})

const BlogModel = mongoose.models['blogs'] ||
    mongoose.model('blogs', blogSchema);

export default BlogModel;