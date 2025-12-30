import mongoose, { Schema } from "mongoose";

// typescript type (can also be an interface)
export type BlogPreviewType = {
	title: string,
    date: Date,
    category: string,
    image: string,
    imageAlt: string,
    slug: string
};

// mongoose schema 
const blogPreviewSchema = new Schema<BlogPreviewType>({
	title: { type: String, required: true },
	date: { type: Date, required: false, default: new Date()},
    category: { type: String, required: true },
	image: { type: String, required: true },
	imageAlt: { type: String, required: true },
    slug: { type: String, required: true }
})

// defining the collection and model
const BlogPreviewModel = mongoose.models['blogpreviews'] ||
    mongoose.model('blogpreviews', blogPreviewSchema);

export default BlogPreviewModel;