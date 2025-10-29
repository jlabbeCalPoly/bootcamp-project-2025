import React from "react";
import BlockContainer from "../blockContainer/blockContainer";
import BlogType from "../blogType/blogType";
import BlogLinker from "../blogLinker/blogLinker";
import { Blog } from "@/static/blogData"; // importing the type/interface we defined earlier
import Style from "./blogPreview.module.css"

export default function blogPreview(props: Blog) {
    return (
    <BlockContainer>
      <div className={Style.blogPreviewContainer}>
        <div className={Style.blogPreviewImage}>
          <img src={props.image} alt={props.imageAlt}/>
        </div>
        <BlogType category={props.category} date={props.date}/>
        <h1>
          {props.title}
        </h1>
        <BlogLinker slug={props.slug}/>
      </div>
    </BlockContainer>
  );
}

