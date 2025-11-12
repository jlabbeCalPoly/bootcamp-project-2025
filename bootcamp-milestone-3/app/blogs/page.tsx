import React from "react";
import BlogList from "@/components/blogList/blogList";
import BlogPreview from "@/components/blogPreview/blogPreview";
import connectDB from "@/src/database/db";
import Blog from "@/src/database/blogSchema";

export default async function BlogPage() {
    async function getBlogs() {
	    await connectDB() // function from db.ts before
        console.log("Connected")

	    try {
			// query for all blogs and sort by date
	        const blogs = await Blog.find().sort({ date: -1 }).orFail()
            return blogs;
	    } catch (err) {
            console.log(err);
	        return null;
	    }
    }

    const blogs = await getBlogs();
    if (blogs) {
        return (
            <BlogList>
                {blogs.map(blog =>
                    <BlogPreview key={blog._id.toString()} {...blog.toObject()}/>
                )}
            </BlogList>
        );
    } else {
        return (
            <></>
        );
    }
}
