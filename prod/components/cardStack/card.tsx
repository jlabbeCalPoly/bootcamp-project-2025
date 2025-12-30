import { forwardRef } from "react";
import Style from "./card.module.css"

export type CardProps = { text: string };

const Card = forwardRef<HTMLDivElement, CardProps>(({ text }, ref) => (
  <div ref={ref} className={Style.cardContainer}>
    {text}
  </div>
));

export default Card;