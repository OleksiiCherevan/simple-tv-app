import style from "./index.module.css";
import star from "./../../assets/icons/filled-star.svg";

const RateStars = (props) => {
    const { rate = 5 } = props;
    
    return (
        <div className={style["rate"]}>
            {[...Array(~~rate).keys()].map((item) => (
                <img key={item} className={style["star"]} src={star}></img>
            ))}
        </div>
    );
};
export default RateStars;
