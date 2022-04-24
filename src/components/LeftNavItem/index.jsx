import { defaultIcon, defaultText } from "../../js/placeholder";
import style from "./index.module.css";



const LeftNavItem = (props) => {
    console.log(props);
    const { icon = defaultIcon, text = defaultText} = props;

    return (
        <div className={style["item"]}>
            <img className={style["icon"]} src={icon}></img>
            <div className={style["text"]}>{text}</div>
        </div>
    );
};
export default LeftNavItem;
