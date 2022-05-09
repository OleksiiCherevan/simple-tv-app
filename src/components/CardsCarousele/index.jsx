import style from "./index.module.css";

import left from "./../../assets/icons/arrow-small-left.svg";
import right from "./../../assets/icons/arrow-small-right.svg";

import { useState } from "react";

const CardsCarousele = (props) => {
    const { text = "Genres" } = props;

    const [index, setIndex] = useState();

    return (
        <div className={style["carousele"]}>
            <div className={style["top"]}>
                <div className={style["text"]}>{text}</div>
                <div className={style["buttons"]}>
                    <img className={style["button-left"]} src={left}></img>
                    <img className={style["button-right"]} src={right}></img>
                </div>
                <div className={style["more"]}>
                    See more{" "}
                    <img className={style["button-right-small"]} src={right}></img>
                </div>
            </div>
            <div className={style["body"]}>
                
            </div>
        </div>
    );
};
export default CardsCarousele;
