import React from "react";
import BlogPageLayout from "@/components/blogPageLayout/blogPageLayout";
import { BlogType } from "@/src/database/blogSchema";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

async function getBlog(slug: string) {
    try {
        const res = await fetch(`http://localhost:3000/api/blogs/${slug}`, {
            cache: "no-store"
        });

        if (!res.ok) {
            throw new Error("Failed to fetch blog :(");
        }

        return await res.json();
    } catch(err: unknown) {
        console.log(`An error occurred: ${err}`);
        return null;
    }
}

export default async function FetchBlogData({params}: Props) {
    const { slug } = await params;
    const blogData: BlogType | null = await getBlog(slug);

    if (blogData) {
        return (
            <BlogPageLayout blogData={blogData}/>
        );
    } else {
        // TODO: add an actual error loading page component
        return (
            <div>Issue loading page</div>
        );
    }
}