import ButtonSquareIcon from '../ButtonSquareIcon'
import style from './index.module.css'
import ring from './../../assets/icons/ring.svg'


const Notification = (props) => {
    const { countMessages } = props
  return (
    <div className={style["notification"]}>
        <ButtonSquareIcon icon={ring}></ButtonSquareIcon>
        
    </div>  
  )
}
export default Notification