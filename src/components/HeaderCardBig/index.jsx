import style from "./index.module.css";

const HeaderCardBig = (props) => {
    const { children } = props;
    return (
        <div className={style["header"]}>
            <div className={style["text"]}>{text}</div>
        </div>
    );
};
export default HeaderCardBig;
