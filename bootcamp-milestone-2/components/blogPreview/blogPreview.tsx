import React from "react";
import { Blog } from "@/static/blogData"; // importing the type/interface we defined earlier
import style from "./blogPreview.module.css"

export default function blogPreview(props: Blog) {
    return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
    <div className={style.div}>
      <h3>{props.title}</h3>
      <div>
        <img/>
        <p>Blog description</p>
		    <p>Posted on...</p>
      </div>
	  </div>
  );
}

