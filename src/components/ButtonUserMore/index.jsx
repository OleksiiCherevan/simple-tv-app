import style from "./index.module.css";
import arrowBottom from "./../../assets/icons/arrow-down.svg";
import defaultUserImg from "./../../assets/images/defaultUser.png";

const ButtonUserMore = (props) => {
    const {
        user = "User",
        icon = arrowBottom,
        userImg = defaultUserImg,
    } = props;

    return (
        <div className={style["button"]}>
            <div className={style["user"]}>{user}</div>
            <img className={style["btn-icon"]} src={icon}></img>
            <img className={style["user-img"]} src={userImg}></img>
        </div>
    );
};
export default ButtonUserMore;
