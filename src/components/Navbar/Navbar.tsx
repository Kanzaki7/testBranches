import './navbar.css'
import tweetz from '/assets/images/tweetz.png'
import { useState } from 'react'
import { Link } from "react-router-dom";

export default function Navbar({isChecked, setIsChecked} : {isChecked: boolean, setIsChecked: React.Dispatch<React.SetStateAction<boolean>>}) {

  const [showMore, setShowMore] = useState<string>("moreWindow");
  const [showMoreDark, setShowMoreDark] = useState<string>("moreWindowShowDark");
  

  const handleClick = () => {
    if (isChecked) {
      if (showMoreDark === "moreWindowDark") {
        setShowMoreDark("moreWindowShowDark")
      }
      else {
        setShowMoreDark("moreWindowDark")
      }
    } else {
      if (showMore === "moreWindow") {
        setShowMore("moreWindowShow")
      }
      else {
        setShowMore("moreWindow")
      }
    }
  }

  return (
    <div className={isChecked ? "navbarDark" : "navbar"}>
      <img src={tweetz} alt="logo" className='divLogo' />
      <div className='divLinks'>
        <div className='divLink'>
          {isChecked ? <img src="/assets/images/homeWhite.png" alt="home" className='imgLink' />
            : <img src="/assets/images/home.png" alt="home" className='imgLink' />}
          <img src="/assets/images/homeRose.png" alt="home" className='imgLinkHover' />
          <Link to={"/"} className={isChecked ? "linkTextWhite" : "linkTextBlack"}>
            <p className='textLink'>Home</p>
          </Link>
        </div>
        <div className='divLink'>
          {isChecked ? <img src="/assets/images/loupeWhite.png" alt="loupe" className='imgLink' />
            : <img src="/assets/images/loupe.png" alt="loupe" className='imgLink' />}
          <img src="/assets/images/loupeRose.png" alt="loupe" className='imgLinkHover' />
          <Link to={"/search"} className={isChecked ? "linkTextWhite" : "linkTextBlack"}>
            <p className='textLink'>Search</p>
          </Link>
        </div>
        <div className='divLink'>
          {isChecked ? <img src="/assets/images/compassWhite.png" alt="compass" className='imgLink' />
            : <img src="/assets/images/compass.png" alt="compass" className='imgLink' />}
          <img src="/assets/images/compassRose.png" alt="compass" className='imgLinkHover' />
          <Link to={"/explore"} className={isChecked ? "linkTextWhite" : "linkTextBlack"}>
            <p className='textLink'>Explore</p>
          </Link>
        </div>
        <div className='divLink'>
          {isChecked ? <img src="assets/images/notificationWhite.png" alt="notification" className='imgLink' />
            : <img src="assets/images/notification.png" alt="notification" className='imgLink' />}
          <img src="assets/images/notificationRose.png" alt="notification" className='imgLinkHover' />
          <Link to={"/notifications"} className={isChecked ? "linkTextWhite" : "linkTextBlack"}>
            <p className='textLink'>Notifications</p>
          </Link>
        </div>
        <div className='divLink'>
          {isChecked ? <img src="/assets/images/emailWhite.png" alt="email" className='imgLink' />
            : <img src="/assets/images/email.png" alt="email" className='imgLink' />}
          <img src="/assets/images/emailRose.png" alt="email" className='imgLinkHover' />
          <Link to={"/messages"} className={isChecked ? "linkTextWhite" : "linkTextBlack"}>
            <p className='textLink'>Messages</p>
          </Link>
        </div>
        <div className='divLink'>
          {isChecked ? <img src="/assets/images/userWhite.png" alt="user" className='imgLink' />
            : <img src="/assets/images/user.png" alt="user" className='imgLink' />}
          <img src="/assets/images/userRose.png" alt="user" className='imgLinkHover' />
          <Link to={"/profile"} className={isChecked ? "linkTextWhite" : "linkTextBlack"}>
            <p className='textLink'>Profile</p>
          </Link>
        </div>
        <div className='divLinkCreateBis'>
          <img src="/assets/images/add.png" alt="user" className='imgLinkCreate' />
        </div>
        <div className='divLinkCreate'>
          <p className='textLinkCreate'>Create</p>
        </div>
      </div>
      <div className='divBurgerMenu'>
        <div className="divLink" onClick={handleClick}>
          {isChecked ? <img src="/assets/images/moreWhite.png" alt="more" className='imgLink' />
            : <img src="/assets/images/more.png" alt="more" className='imgLink' />}
          <img src="/assets/images/moreRose.png" alt="more" className='imgLinkHover' />
          <p className='textLink'>More</p>
        </div>
      </div>
      <div className={isChecked ? showMoreDark : showMore}>
        <div className='divLinksMore'>
          <div className='divLinkMore'>
              {isChecked ? <img src="/assets/images/sunnyWhite.png" alt="sunny" className='imgLinkMore' />
                :<img src="/assets/images/sunny.png" alt="sunny" className='imgLinkMore' />}
              <img src="/assets/images/sunnyRose.png" alt="sunny" className='imgLinkHoverMore' />
              <p className='textLinkMode'>Dark mode</p>
              <input type="checkbox" className="switch" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)}/>
          </div>
          <div className='divLinkSunny'>
            {isChecked ? <img src="/assets/images/logoutWhite.png" alt="logout" className='imgLink' />
              : <img src="/assets/images/logout.png" alt="logout" className='imgLink' />}
            <img src="/assets/images/logoutRose.png" alt="logout" className='imgLinkHover' />
            <p className='textLink'>Logout</p>
          </div>
        </div>
        <div className='divBurgerMenuMore'>
          <div className="divLink" onClick={handleClick}>
            {isChecked ? <img src="/assets/images/closeWhite.png" alt="close" className='imgLink' />
              : <img src="/assets/images/close.png" alt="close" className='imgLink' />}
            <img src="/assets/images/closeRose.png" alt="close" className='imgLinkHover' />
            <p className='textLink'>Close</p>
          </div>
        </div>
      </div>
    </div>
  )
}