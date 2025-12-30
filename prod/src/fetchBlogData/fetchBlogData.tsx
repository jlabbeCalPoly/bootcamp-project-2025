import React from "react";
import BlogPageLayout from "@/components/blogPageLayout/blogPageLayout";
import CenteredContainer from "@/components/centeredContainer/centeredContainer";
import { BlogType } from "@/src/database/blogSchema";
const domain = process.env.NEXT_PUBLIC_DOMAIN_URL;

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

async function getBlog(slug: string) {
    try {
        const res = await fetch(`${domain}/api/blogs/${slug}`, {
            cache: "no-store"
        });
        const data = await res.json();

        if (res.status !== 200) {
            throw new Error(data);
        } else {
            return data;
        }
    } catch(err: unknown) {
        console.log(`An error occurred while fetching: ${err}`);
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
        return (
            <CenteredContainer>
                <h2>There seemed to be an error loading this page :(</h2>
            </CenteredContainer>
        );
    }
}