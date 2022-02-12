import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import './profile.css'

function profile() {
    const profileClickHandler = ()=>
    {
        console.log('clicked')
        return(
            <>
            HelloWorld
            </>
        )
    }
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img
                                className="profileCoverImg"
                                src="assests/profilecover.png"
                                alt=""
                            />
                            <img
                                className="profileUserImg"
                                src="assests/person/2.jpg"
                                alt="" 
                                onClick={profileClickHandler()}
                            />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Yash Shah</h4>
                            <span className="profileInfoDesc">Android Developer at @TST Technology</span>
                        </div>
                    </div>
                    <hr className='profileHr'/>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default profile;
