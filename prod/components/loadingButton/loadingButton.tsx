import React from "react";
import Loading from "@/components/loading/loading";
import Style from "./loadingButton.module.css";

interface ButtonProps {
    callback: () => void,
    loading: boolean,
    text: string,
    img: string
}

export default function LoadingButton({callback, loading, text, img}: ButtonProps) {
    return (
        <div className={Style.buttonContainer} onClick={callback}>
            <div className={`${loading ? Style.loadingVisible : Style.loadingHidden } ${Style.buttonLoadingContainer}`}>
                <Loading size="small"/>
            </div>
            <h2 className={ loading ? Style.contentHidden : Style.contentVisible }>{text}</h2>
            <img className={`${loading ? Style.contentHidden : Style.contentVisible} ${img === undefined ? Style.buttonImgHidden : Style.buttonImg}`} src={img}/> 
        </div>
    );
}