import React, { ReactNode } from "react";
import Style from "./centeredContainer.module.css";

// Allows additional React components to be nested within BlockContainer 
type Props = {
    children: ReactNode
}

export default function CenteredContainer({ children }: Props) {
    return (
        <div className={Style.centeredContainer}>{children}</div>
    );
}