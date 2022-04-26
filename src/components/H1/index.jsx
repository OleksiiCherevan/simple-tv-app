import HeaderNav from '../HeaderNav'
import style from './index.module.css'


const H1 = (props) => {
    const {children=''} = props
  return (
    <div className={style["h"]}>
      {children}
    </div>  
  )
}
export default H1