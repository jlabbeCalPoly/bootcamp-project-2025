import React from "react";
import Link from "next/link";
import Style from "./logo.module.css";

export default function Logo() {
    return (
        <h1 className={Style.logo}>
            <Link href="/">Julian Labbe</Link>
        </h1>
    );
}