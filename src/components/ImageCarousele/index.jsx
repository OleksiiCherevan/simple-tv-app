import { useEffect, useState } from "react";
import ButtonSquareIcon from "../ButtonSquareIcon";
import style from "./index.module.css";

import leftArrow from './../../assets/icons/arrow-left.svg'
import rightArrow from './../../assets/icons/arrow-right.svg'
import plus from './../../assets/icons/plus.svg'
import ButtonRectangleTextIcon from "../ButtonRectangleTextIcon";
import ButtonPrimary from "../ButtonPrimary";
import CarouseleDots from "../CarouseleDots";

const ImageCarousele = (props) => {
    const { shows } = props;

    const [index, setIndex] = useState(0);

    useEffect(() => {
        setShow(shows[index]);
    }, [index]);

    const [show, setShow] = useState({});

    const onUpdateIndex = (index) => {
        setIndex(index)
    }
    return (
            <div
                className={style["carousele"]}
                style={{ background: `linear-gradient(0deg, rgba(22, 24, 30, 0.5), rgba(22, 24, 30, 0.5)), url(${show.img}` }}
            >
                <div className={style["text"]}>{show.text}</div>

                <div className={style["control"]}>
                    <div className={style["change-show-arrows"]}>
                        <div className={style["left"]} onClick={() => onUpdateIndex(index > 0 ? index - 1: shows.length -1)}><ButtonSquareIcon icon={leftArrow}></ButtonSquareIcon></div>

                        <div className={style["rigth"]} onClick={() => onUpdateIndex(index < shows.length - 1 ? index + 1: 0)} ><ButtonSquareIcon icon={rightArrow}></ButtonSquareIcon></div>
                    </div>

                    <div className={style["user-menu"]}>
                        <div className={style["btn-watch-list"]}><ButtonRectangleTextIcon text={"Watchlists"} icon={plus}></ButtonRectangleTextIcon></div>
                        <CarouseleDots count={shows.length} selectedIndex={index} onClick={onUpdateIndex}></CarouseleDots>
                        <div className={style["btn-watch-now"]}><ButtonPrimary text={"Watch now"}></ButtonPrimary></div>
                    </div>
                </div>
            </div>
        // </div>
    );
};
export default ImageCarousele;
