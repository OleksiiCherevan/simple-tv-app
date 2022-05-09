import CardFilmSeeLater from "../CardFilmSeeLater";
import style from "./index.module.css";

const BarCardFilmBig = (props) => {
    const { cards = [...Array(3).keys()] } = props;
    
    return (
        <div className={style["bar"]}>
            {cards.map(card => <CardFilmSeeLater key={card} {...card}></CardFilmSeeLater>)}
        </div>
    );
};
export default BarCardFilmBig;
