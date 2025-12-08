import React from "react";
import DateInterval from "../dateInterval/dateInterval";
import Style from "./datedImage.module.css";

export default function DatedImage({image, imageAlt, title, startDate, endDate}: {image: string, imageAlt: string, title: string, startDate: Date, endDate: Date | null}) {
    return (
        <div className={Style.datedImageContainer}>
            <img src={image} alt={imageAlt}/>
            <div className={Style.datedImageTextContainer}>
                <h2>{title}</h2>
                <DateInterval startDate={startDate} endDate={endDate}/>
            </div>
        </div>
    );
}
