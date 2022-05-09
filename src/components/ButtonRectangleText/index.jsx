import { defaultIcon } from '../../js/placeholder'
import style from './index.module.css'


const ButtonRectangleText = (props) => {
    const {text} = props
  return (
    <div className={style["button"]}>
      {text}
    </div>  
  )
}
export default ButtonRectangleText