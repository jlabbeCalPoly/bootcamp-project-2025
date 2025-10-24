import React from "react";
import Blogs from "@/static/blogData"
import BlogList from "@/components/blogList/blogList";
import BlogPreview from "@/components/blogPreview/blogPreview";

export default function Blog() {
    return (
        <BlogList>
            {Blogs.map(blog => 
                <BlogPreview {...blog}/>
            )}
        </BlogList>
    );
}
