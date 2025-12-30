import React from "react";
import Style from "./dateInterval.module.css";

export default function dateInterval({startDate, endDate}: {startDate: Date, endDate: Date | null}) {
    const startMonth = startDate.toLocaleString("en-US", { month: "short" });
    const startYear = startDate.getFullYear();

    let toStr = "Present";
    if (endDate) {
        const endMonth = endDate.toLocaleString("en-US", { month: "short" });
        const endYear = endDate.getFullYear();
        toStr = `${endMonth} ${endYear}`;
    }
    
    return (
        <p className={Style.dateIntervalP}>
            {`${startMonth} ${startYear} - ${toStr}`}
        </p>
    )
}