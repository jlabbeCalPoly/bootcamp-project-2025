import React from "react";
import BlogPageLayout from "@/components/blogPageLayout/blogPageLayout";
import CenteredContainer from "@/components/centeredContainer/centeredContainer";
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
        // TODO: add an actual error loading page component
        return (
            <BlogPageLayout blogData={blogData}/>
        );
    } else {
        return (
            <CenteredContainer>
                <h2>There seemed to be an error loading this page :(</h2>
            </CenteredContainer>
        );
    }
}