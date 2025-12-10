import React from "react";
import IComment from "@/static/iComment";
import Style from "./iComment.module.css";

/* 
    Modularizing code into seperate functions is useful.	
    Makes your code look nicer and allows for better readability.
*/
function parseCommenterDetails(name: string, time: string){
    const dateObj = new Date(time);
    const dateStr = dateObj.toLocaleDateString("en-US");
    return `${name} (${dateStr})`;
}

export default function Comment({data}: {data: IComment}) {
    return (
        <div className={Style.commentContainer}>
            <h2>{data.message}</h2>
            <h2 className={Style.commentFrom}>{parseCommenterDetails(data.name, data.date)}</h2>
        </div>
    );
};