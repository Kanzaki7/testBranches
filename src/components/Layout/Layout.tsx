import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import '../../App.css'

export default function Layout({isChecked, setIsChecked} : {isChecked: boolean, setIsChecked: React.Dispatch<React.SetStateAction<boolean>>}) {
  return (
    <div className={isChecked ? "AppDark" : "App"}>
      <Navbar isChecked={isChecked} setIsChecked={setIsChecked} />
      <Outlet context={{ isChecked, setIsChecked }} />
    </div>
  );
}

