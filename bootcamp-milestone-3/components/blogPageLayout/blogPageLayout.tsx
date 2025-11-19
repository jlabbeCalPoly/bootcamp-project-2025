import React from "react";
import CommentList from "../iCommentList/iCommentList";
import { BlogType } from "@/src/database/blogSchema";
import Style from "./blogPageLayout.module.css";

export default function BlogPageLayout({blogData}: {blogData: BlogType}) {
    return (
        <div className={Style.blogPageLayoutContainer}>
            <CommentList data={blogData.comments}/>
        </div>
    );
}