import { defaultIcon } from '../../js/placeholder'
import style from './index.module.css'


const ButtonSquareIcon = (props) => {
    const {icon = defaultIcon} = props
  return (
    <div className={style["button"]}>
      <img src={icon} alt="" />
    </div>  
  )
}
export default ButtonSquareIcon