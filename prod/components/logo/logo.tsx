import React from "react";
import Link from "next/link";
import Style from "./logo.module.css";

export default function Logo() {
    return (
        <Link className={Style.logo} href="/">
            <img src="/LogoImg.jpg"/>
            <h2>
                Julian Labbe
            </h2>
        </Link>
    );
}