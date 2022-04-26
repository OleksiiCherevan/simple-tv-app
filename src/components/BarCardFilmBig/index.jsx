import style from "./index.module.css";
import CardFilmBig from "../CardFilmBig";

const BarCardFilmBig = (props) => {
    const { cards = [...Array(3).keys()] } = props;
    
    return (
        <div className={style["bar"]}>
            {cards.map(card => <CardFilmBig key={card} {...card}></CardFilmBig>)}
        </div>
    );
};
export default BarCardFilmBig;
