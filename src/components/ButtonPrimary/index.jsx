import { defaultIcon } from "../../js/placeholder";
import style from "./index.module.css";

const ButtonPrimary = (props) => {
    const { text } = props;
    return (
        <div className={style["button"]}>
            <div className={style["text"]}>{text}</div>
        </div>
    );
};
export default ButtonPrimary;
