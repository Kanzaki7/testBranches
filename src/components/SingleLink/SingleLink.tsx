import '../Navbar/navbar.css'
import { Link } from "react-router-dom";

interface ISingleLink {
    link:string
    href:string
    iconName:string
    iconLink:string
    iconWhiteLink:string
    iconRoseLink:string
    isChecked:boolean
}


const SingleLink:React.FC<ISingleLink> = (props) => {
    return(
          <div className='divLink'>
            {props.isChecked ? <img src={props.iconWhiteLink} alt={props.iconName} className='imgLink' />
              : <img src={props.iconLink} alt={props.iconName} className='imgLink' />}
            <img src={props.iconRoseLink} alt={props.iconName} className='imgLinkHover' />
            <Link to={props.href} className={props.isChecked ? "linkTextWhite" : "linkTextBlack"}>
              <p className='textLink'>{props.link}</p>
            </Link>
          </div>
  )}

export default SingleLink