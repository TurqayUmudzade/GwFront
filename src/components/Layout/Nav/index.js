import { useEffect, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { ReactComponent as Gear } from "assets/gear.svg"
import { ReactComponent as Moon } from "assets/moon.svg"
import { ReactComponent as Key } from "assets/key.svg"
import { ReactComponent as Logout } from "assets/logout.svg"
import OutsideClickHandler from "react-outside-click-handler"
import "./style.scss"
import classNames from "classnames"

const Nav = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hasLoggedIn, setHasLoggedIn] = useState(false)
  let navigate = useNavigate()
  useEffect(() => {
    let item = localStorage.getItem("theme")
    if (item && item === "dark") {
      setIsDarkMode(true)
      setDarkTheme(true)
    }
    console.log(window.location.href)
    if (window.location.href.includes("login")) {
      setHasLoggedIn(false)
    } else setHasLoggedIn(true)
  }, [])

  const handleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)
  const logout = () => {
    navigate("/login")
  }

  const setDarkTheme = (isDark) => {
    if (isDark) {
      localStorage.setItem("theme", "dark")
      document.documentElement.classList.add("dark")
      setIsDarkMode(true)
    } else {
      localStorage.setItem("theme", "light")
      document.documentElement.classList.remove("dark")
      setIsDarkMode(false)
    }
  }
  return (
    <nav className="mb-8 px-10 py-4 flex items-center border-gray bg-blue-500 text-white dark:bg-slate-800 dark:border-slate-100">
      <i className="fas fa-burger-soda text-3xl text-blue-500 "></i>
      <p className="ml-4 text-xl">GWU-Meals</p>
      {hasLoggedIn && (
        <div className="ml-10 flex gap-5">
          <NavLink to="/workflow" className="left hover:text-white">
            Workflow
          </NavLink>
          <NavLink to="/order-history" className="left hover:text-white">
            Orders
          </NavLink>
        </div>
      )}

      <div className="ml-auto flex items-center relative">
        {hasLoggedIn && (
          <>
            <div className="text-lg text-white mr-4 dark:text-white">
              Turqay Umuzade
            </div>
            <OutsideClickHandler onOutsideClick={closeMenu}>
              <Gear className="hvr-svg" onClick={handleMenu} />
              <div
                className={classNames(
                  "dropdown text-black dark:text-white",
                  { "fade-out": !isMenuOpen },
                  { "fade-in": isMenuOpen }
                )}
              >
                <div onClick={() => setDarkTheme(!isDarkMode)}>
                  Dark mode
                  {!isDarkMode ? <Moon /> : <Moon />}
                </div>
                <div className="opacity-50">
                  Change Password <Key />
                </div>
                <div onClick={logout}>
                  Log out <Logout />
                </div>
              </div>
            </OutsideClickHandler>
          </>
        )}
      </div>
    </nav>
  )
}

export default Nav
