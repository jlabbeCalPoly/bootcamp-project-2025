"use client"
import React from "react";
import ColorBends from "../backgrounds/colorBends/colorBends";
import CommentPageLayout from "../iCommentPageLayout/iCommentPageLayout";
import { BlogType } from "@/src/database/blogSchema";
import Style from "./blogPageLayout.module.css";

export default function BlogPageLayout({ blogData }: { blogData: BlogType }) {
  return (
    <>
    <div className={Style.blogPageBackgroundContainer}>
        <ColorBends
          colors={["#fffa5cff", "#ff985cff"]}
          rotation={45}
          speed={0.2}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={0}
          parallax={0.5}
          noise={0.1}
          transparent
        />
    </div>
    <div className={Style.blogPageContentContainer}>
      <CommentPageLayout data={blogData.comments} slug={blogData.slug} />
    </div>
    </>
  );
}
