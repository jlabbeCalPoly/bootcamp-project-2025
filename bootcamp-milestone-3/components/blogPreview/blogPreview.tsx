import React from "react";
import BlockContainer from "../blockContainer/blockContainer";
import Subheading from "../subheading/subheading";
import BlogLinker from "../blogLinker/blogLinker";
import { Blog } from "@/static/blogData"; // importing the type/interface we defined earlier
import Style from "./blogPreview.module.css"

export default function blogPreview(props: Blog) {
    return (
    <BlockContainer>
      <div className={Style.blogPreviewContainer}>
        <div className={Style.blogPreviewBody}>
          <div className={Style.blogPreviewImage}>
            <img src={props.image} alt={props.imageAlt}/>
          </div>
          <Subheading category={props.category} date={props.date.toLocaleDateString("en-US")}/>
          <h1>
            {props.title}
          </h1>
        </div>
        <BlogLinker slug={props.slug}/>
      </div>
    </BlockContainer>
  );
}

// <Subheading category={props.category} date={props.date.}/>
// <BlogLinker slug={props.slug}/>