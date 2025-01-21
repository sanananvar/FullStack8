import React from 'react'
import style from "./style.module.css"
import { useNavigate} from "react-router-dom"
function Adminnavbar() {
  const navigate = useNavigate()
  function goAdd() {
    navigate("/add")
    
  }
  function goHome() {
    navigate("/")
    
  }
  return (
    <>
    <div className={style.navbar}>
      <div className={style.nav_wrapper}>
      <div className={style.navbar__logo}>
        Logo
      </div>
      <div className={style.navbar__links}>
        <ul>
          <li onClick={goAdd}>Add</li>
          <li onClick={goHome}>Home</li>
        </ul>
      </div>
      </div>
    </div>

    </>
  )
}

export default Adminnavbar
