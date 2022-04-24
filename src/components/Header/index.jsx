import HeaderNav from '../HeaderNav'
import style from './index.module.css'


const Header = (props) => {
    const {headerNavs = []} = props
  return (
    <div className={style["header"]}>
        <HeaderNav headerNavs={headerNavs}></HeaderNav>
    </div>  
  )
}
export default Header