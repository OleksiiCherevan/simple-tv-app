import LeftNavItem from "../LeftNavItem";
import style from "./index.module.css";



const LeftNav = (props) => {
    const {navItems} = props;
    return (
        <div className={style["bar"]}>
           {navItems.map(navItem => <LeftNavItem key={navItem.text} {...navItem}></LeftNavItem>)}
        </div>
    );
};
export default LeftNav;
