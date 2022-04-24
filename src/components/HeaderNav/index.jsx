import HeaderNavItem from '../HeaderNavItem'
import style from './index.module.css'


const HeaderNav = (props) => {
    const {headerNavs = []} = props
  return (
    <div className={style["nav"]}>
        {headerNavs.map(headerNavItem => <HeaderNavItem {...headerNavItem}></HeaderNavItem>)}
    </div>
  )
}
export default HeaderNav