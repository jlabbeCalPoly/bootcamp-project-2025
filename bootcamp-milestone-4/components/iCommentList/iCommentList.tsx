import React from "react";
import IComment from "@/static/iComment";
import Comment from "@/components/iComment/iComment";
import Style from "./iCommentList.module.css";

export default function CommentList({data}: {data: IComment[]}) {
    return (
        <div className={Style.CommentListContainer}>
            {data.map((d, idx) => 
                <Comment key={idx} data={d}/>
            )}
        </div>
    );
}