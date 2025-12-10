import React from "react";
import CommentPageLayout from "../iCommentPageLayout/iCommentPageLayout";
import { BlogType } from "@/src/database/blogSchema";
import Style from "./blogPageLayout.module.css";

export default function BlogPageLayout({ blogData }: { blogData: BlogType }) {
  return (
    <div className={Style.blogPageLayoutContainer}>
      <CommentPageLayout data={blogData.comments} slug={blogData.slug} />
    </div>
  );
}
