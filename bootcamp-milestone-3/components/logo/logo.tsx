import React from "react";
import Link from "next/link";
import Style from "./logo.module.css";

export default function Logo() {
    return (
        <Link className={Style.logo} href="/">
            <img src="/jlabbe.jpg"/>
            <h1>
                Julian Labbe
            </h1>
        </Link>
    );
}