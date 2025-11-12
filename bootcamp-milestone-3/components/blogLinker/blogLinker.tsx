import React from "react";
import Button from "../button/button";
import Style from "./blogLinker.module.css";

export default function BlogLinker({slug}: {slug : string}) {
    return (
        <div className={Style.blogLinkerContainer}>
            <h2>Julian Labbe</h2>
            <Button text="Learn more" slug={slug} type="link"/>
        </div>
    );
}