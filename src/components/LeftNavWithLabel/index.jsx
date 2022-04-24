
import LeftNav from "../LeftNav";
import style from "./index.module.css";



const LeftNavBarWithLabel = (props) => {
    const {text, navItems} = props;
    
    console.log(props);
    return (
        <div className={style["bar-with-label"]}>
           <div className={style["text"]}>{text}</div>
           <div className={style["bar"]}>
                <LeftNav navItems={navItems}></LeftNav>
           </div>
        </div>
    );
};
export default LeftNavBarWithLabel;
