import React, { ReactNode } from "react";
import Style from "./blockContainer.module.css";

// Allows additional React components to be nested within BlockContainer 
type Props = {
    children: ReactNode
}

export default function BlockContainer({ children }: Props) {
    return (
        <div className={Style.blockContainer}>{children}</div>
    );
}