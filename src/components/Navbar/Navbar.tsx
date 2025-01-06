import './navbar.css'
import tweetz from '/assets/images/tweetz.png'
import { useState } from 'react'
// import { Link } from "react-router-dom";
import SingleLink from '../SingleLink/SingleLink'
import tableauDesLiens from './tableauDesLiens.json'

enum EDarkModeClass {
  MOREWINDOW = "moreWindow",
  MOREWINDOWSHOWDARK = "moreWindowShowDark",
  MOREWINDOWDARK = "moreWindowDark",
  MOREWINDOWSHOW = "moreWindowShow",
}

interface INavBarProps {
  isChecked:boolean 
  setIsChecked:React.Dispatch<React.SetStateAction<boolean>>
}


const Navbar:React.FC<INavBarProps> = (props) => {

  const [showMore, setShowMore] = useState<EDarkModeClass>(EDarkModeClass.MOREWINDOW);
  const [showMoreDark, setShowMoreDark] = useState<EDarkModeClass>(EDarkModeClass.MOREWINDOWSHOWDARK);


  const handleClick = () => {
      switch(props.isChecked)
      {
        case true:
          switch(showMoreDark)
          {
            case EDarkModeClass.MOREWINDOWDARK:
              setShowMoreDark(EDarkModeClass.MOREWINDOWSHOWDARK);
              break;
            default:
              setShowMoreDark(EDarkModeClass.MOREWINDOWDARK);
              break;
          }
          break;
        case false:
          switch(showMore)
          {
            case EDarkModeClass.MOREWINDOW:
              setShowMore(EDarkModeClass.MOREWINDOWSHOW);
              break;
            default:
              setShowMore(EDarkModeClass.MOREWINDOW);
              break;
          }
      }
  }

  // const handleClick = () => {
  //   if (props.isChecked) {
  //     if (showMoreDark === "moreWindowDark") {
  //       setShowMoreDark("moreWindowShowDark")
  //     }
  //     else {
  //       setShowMoreDark("moreWindowDark")
  //     }
  //   } else {
  //     if (showMore === "moreWindow") {
  //       setShowMore("moreWindowShow")
  //     }
  //     else {
  //       setShowMore("moreWindow")
  //     }
  //   }
  // }

  return (
    <div className={props.isChecked ? "navbarDark" : "navbar"}>
      <img src={tweetz} alt="logo" className='divLogo' />
      <div className='divLinks'>
        
        {tableauDesLiens.map((item, index:number) => (
          <SingleLink key={index}
          {...item}
          isChecked={props.isChecked} />
        ))}

        <div className='divLinkCreateBis'>
          <img src="/assets/images/add.png" alt="user" className='imgLinkCreate' />
        </div>
        <div className='divLinkCreate'>
          <p className='textLinkCreate'>Create</p>
        </div>
      </div>
      <div className='divBurgerMenu'>
        <div className="divLink" onClick={handleClick}>
          {props.isChecked ? <img src="/assets/images/moreWhite.png" alt="more" className='imgLink' />
            : <img src="/assets/images/more.png" alt="more" className='imgLink' />}
          <img src="/assets/images/moreRose.png" alt="more" className='imgLinkHover' />
          <p className='textLink'>More</p>
        </div>
      </div>
      <div className={props.isChecked ? showMoreDark : showMore}>
        <div className='divLinksMore'>
          <div className='divLinkMore'>
              {props.isChecked ? <img src="/assets/images/sunnyWhite.png" alt="sunny" className='imgLinkMore' />
                :<img src="/assets/images/sunny.png" alt="sunny" className='imgLinkMore' />}
              <img src="/assets/images/sunnyRose.png" alt="sunny" className='imgLinkHoverMore' />
              <p className='textLinkMode'>Dark mode</p>
              <input type="checkbox" className="switch" checked={props.isChecked} onChange={(e) => props.setIsChecked(e.target.checked)}/>
          </div>
          <div className='divLinkSunny'>
            {props.isChecked ? <img src="/assets/images/logoutWhite.png" alt="logout" className='imgLink' />
              : <img src="/assets/images/logout.png" alt="logout" className='imgLink' />}
            <img src="/assets/images/logoutRose.png" alt="logout" className='imgLinkHover' />
            <p className='textLink'>Logout</p>
          </div>
        </div>
        <div className='divBurgerMenuMore'>
          <div className="divLink" onClick={handleClick}>
            {props.isChecked ? <img src="/assets/images/closeWhite.png" alt="close" className='imgLink' />
              : <img src="/assets/images/close.png" alt="close" className='imgLink' />}
            <img src="/assets/images/closeRose.png" alt="close" className='imgLinkHover' />
            <p className='textLink'>Close</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar