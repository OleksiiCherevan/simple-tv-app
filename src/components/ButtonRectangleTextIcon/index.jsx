import { defaultIcon } from "../../js/placeholder";
import style from "./index.module.css";

const ButtonRectangleTextIcon = (props) => {
    const { text, icon } = props;
    return (
        <div className={style["button"]}>
            <img src={icon} alt="" />

            <div className={style["text"]}>{text}</div>
        </div>
    );
};
export default ButtonRectangleTextIcon;
