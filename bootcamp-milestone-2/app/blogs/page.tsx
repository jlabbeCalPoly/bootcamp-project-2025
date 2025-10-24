import React from "react";
import BlogPreview from "@/components/blogPreview/blogPreview";

export default function Blog() {
    type Blog = {
        title: string,
        date: string,
        description: string,
        image: string,
        imageAlt: string,
        slug: string
    }

    const blogs: Blog[] = [
        {
            title: "Blog no. 1",
            date: "10/13/2025",
            description: "Blog no. 1 is focused on... and discusses...",
            image: "../Assets/tempIcon.png",
            imageAlt: "ImageAlt",
            slug: "./blog1.html"
        },
        {
            title: "Blog no. 2",
            date: "10/13/2025",
            description: "Blog no. 2 is focused on... and discusses...",
            image: "../Assets/tempIcon.png",
            imageAlt: "ImageAlt",
            slug: "./blog2.html"
        }
    ]

    return (
        <>
        {blogs.map(blog => 
            <BlogPreview {...blog}/>
        )}
        </>
    );
}
