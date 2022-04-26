import { defaultIcon } from "../../js/placeholder";
import style from "./index.module.css";

import loki from "./../../assets/images/loki-card.jpg";
import ButtonSquareIcon from "../ButtonSquareIcon";

import plus from "./../../assets/icons/plus.svg";
import ButtonPrimary from "../ButtonPrimary";
import RateStars from "../RateStars";

const CardFilmBig = (props) => {
    const {
        name = "Loki",
        img = loki,
        rate = 4.5,
        episodes = 8,
        ganre = "Superhero",
        url,
    } = props;
    return (
        <div
            className={style["card"]}
            style={{
                background: `linear-gradient(180deg, rgba(22, 24, 30, 0) 0%, rgba(22, 24, 30, 0.7) 61.28%), linear-gradient(0deg, rgba(22, 24, 30, 0.4), rgba(22, 24, 30, 0.4)), url(${img})`,
            }}
        >
            <div className={style["top"]}>
                <div className={style["name"]}>{name}</div>
                <RateStars rate={rate}></RateStars>
            </div>

            <div className={style["bottom"]}>
                <div className={style["description"]}>
                    <div className={style["episoded"]}>{episodes} Ep</div>
                    <div className={style["ganre"]}>{ganre}</div>
                </div>

                <div className={style["buttons"]}>
                    <ButtonSquareIcon icon={plus}></ButtonSquareIcon>
                    <ButtonPrimary text={"Watch"}></ButtonPrimary>
                    {/* <div className={style["add-to-playlist"]}></div>
                    <div className={style["watch"]}></div> */}
                </div>
            </div>
        </div>
    );
};
export default CardFilmBig;
