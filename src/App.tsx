import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
// import Navbar from './components/Navbar/Navbar'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Search from './components/Search/Search'
import Explore from './components/Explore/Explore'
import Notifications from './components/Notifications/Notifications'
import Messages from './components/Messages/Messages'
import Profile from './components/Profile/Profile'

function App() {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const router = createBrowserRouter([
    {
      path: "/", 
      element: <Layout isChecked={isChecked} setIsChecked={setIsChecked} />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/search",
          element: <Search />,
        },
        {
          path: "/explore",
          element: <Explore />,
        },
        {
          path: "/notifications",
          element: <Notifications />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
  ]);

  return (
    <>
      <div className={isChecked ? "AppDark" : "App"}>
        {/* <Navbar isChecked={isChecked} setIsChecked={setIsChecked} /> */}
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
