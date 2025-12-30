import React from "react";
import Link from "next/link"
import Style from "./linker.module.css";

interface LinkerProps {
    text: string
    slug: string
}

export default function linker({text, slug}: LinkerProps) {
    return (
        <Link className={Style.linkerContainer} href={slug}>
            <p>{text}</p>
            <img className={Style.linkerArrow} src="/link.svg"/>
        </Link>
    );
}