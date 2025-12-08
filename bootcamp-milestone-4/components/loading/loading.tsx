import React from "react";
import Style from "./loading.module.css";

interface LoadingProps {
    size: string,
}

export default function Loading({size} : LoadingProps) {
    return (
        <div className={Style.loading}>
            <div className={`${Style.loadingDot} ${Style[size]} ${Style.one}`}></div>
            <div className={`${Style.loadingDot} ${Style[size]} ${Style.two}`}></div>
            <div className={`${Style.loadingDot} ${Style[size]} ${Style.three}`}></div>
        </div>
    );
}
