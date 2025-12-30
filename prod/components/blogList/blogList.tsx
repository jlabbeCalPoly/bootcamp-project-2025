import React, { ReactNode } from "react";
import Style from "./blogList.module.css";

// Allows additional React components to be nested within BlogList 
type Props = {
    children: ReactNode
}

export default function BlogList({ children }: Props) {
    return (
        <div className={Style.blogListContainer}>{children}</div>
    );
}