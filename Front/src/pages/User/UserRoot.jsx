import React from 'react'
import UserNavbar from '../../components/User/UserNavbar/UserNavbar'
import UserFooter from '../../components/User/UserFooter/UserFooter'
import { Outlet } from 'react-router'
function UserRoot() {
  return (
    <>
    <UserNavbar/>
    <Outlet/>
    <UserFooter/>
    </>
  )
}
export default UserRoot