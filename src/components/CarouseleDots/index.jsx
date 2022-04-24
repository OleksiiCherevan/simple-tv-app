import { defaultIcon } from "../../js/placeholder";
import style from "./index.module.css";

const CarouseleDots = (props) => {
    const { count = 4, selectedIndex, onClick } = props;
    console.log(props);
    return (
        <div className={style["dots"]}>
            {[...Array(count)].map((_, index) => (
                <div 
                onClick={() => onClick(index)}
                key={index + "" + selectedIndex}
                    className={`${style["dot"]} ${
                        selectedIndex === index ? `${style["selected-dot"]}` : ""
                    }`}
                ></div>
            ))}
        </div>
    );
};
export default CarouseleDots;
