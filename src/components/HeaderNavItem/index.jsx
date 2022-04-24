import style from "./index.module.css";

const HeaderNavItem = (props) => {
    const { text = "Test" } = props;
    return (
        <div className={style["item"]}>
            <div className={style["text"]}>{text}</div>
            <div className={style["border"]}></div>
        </div>
    );
};
export default HeaderNavItem;
