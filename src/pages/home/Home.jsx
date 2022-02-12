import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Group from '../../components/Group'
import './home.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from '../login/Login'


function home() {
    return (
        <>
            <div className="homeContainer">
                <Topbar />
                <Sidebar />
                <Routes>
                        <Route path='/' exact element={<Feed />} />
                </Routes>
                <Rightbar />
            </div>
        </>
    )
}

export default home;
