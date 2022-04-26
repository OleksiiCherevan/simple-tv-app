import { defaultIcon } from "../../js/placeholder";
import style from "./index.module.css";

import magnifying from "./../../assets/icons/magnifying-glass.svg"
import filter from "./../../assets/icons/filter.svg"

const Search = (props) => {
    const { onChange = () => {} } = props;
    return (
        <div className={style["search"]}>
            <img className={style["icon"]} src={magnifying}>
                
            </img>
            <input className={style["input"]} type="text" placeholder="Search"></input>
            <img className={`${style["filter"]} ${style["icon"]}`} src={filter}></img>
        </div>
    );
};
export default Search;
