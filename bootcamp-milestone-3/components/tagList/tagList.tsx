import React from "react";
import Tag from "@/components/tag/tag";
import Style from "./tagList.module.css";

export default function tagList({tags}: {tags: string[]}) {
    return (
        <div className={Style.tagList}>
            {tags.map((text, idx) =>
                <Tag key={idx} text={text}/>
            )}
        </div>
    );
}
