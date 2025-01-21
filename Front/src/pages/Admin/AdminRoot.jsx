import React from 'react'
import { Outlet } from 'react-router'
import Adminnavbar from '../../components/Admin/AdminNavbar/Adminnavbar'
import AdminFooter from '../../components/Admin/AdminFooter/AdminFooter'
function AdminRoot() {
    return (
        <>
            <Adminnavbar />
            <Outlet />
            <AdminFooter />
        </>

    )
}

export default AdminRoot
