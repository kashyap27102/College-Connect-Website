import React from 'react'
import './topbar.css'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LogoutIcon from '@mui/icons-material/Logout';
import { Component } from 'react';
import { Link } from 'react-router-dom';

class Topbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            open: false
        }
    }

    dropdownClick = (e) => {
        console.log('clicked')
        this.setState((state) => {
            return { open: !state.open }
        })
    }
    render() {
        return (
            <div>
                <div className=' topbarContainer'>
                    <div className='topbarLeft'>
                        <Link to={'/home'} className='logo'>
                            <div >COLLEGE CONNECT</div>
                        </Link>
                    </div>
                    <div className='topbarCenter'>
                        <div className='searchbar'>
                            <SearchIcon className='searchIcon' />
                            <input placeholder='Search for friends, post or video' className='searchInput' />
                        </div>
                    </div>
                    <div className='topbarRight'>
                        <div className='topbarLinks'>
                            <span className='topbarLink'>Homepage</span>
                            <span className='topbarLink'>Timeline</span>
                        </div>
                        <div className='topbarIcons'>
                            <div className='topbarIconItem'>
                                <PersonIcon />
                                <span className='topbarIconBadge'>1</span>
                            </div>
                            <div className='topbarIconItem'>
                                <ChatIcon />
                                <span className='topbarIconBadge'>2</span>
                            </div>
                            <div className='topbarIconItem'>
                                <NotificationsActiveIcon />
                                <span className='topbarIconBadge'>1</span>
                            </div>
                            <img src="/assests/person/2.jpg" alt="" className="topbarImg" onClick={this.dropdownClick} />
                            {
                                this.state.open && (
                                    <div className="dropdown">
                                        <ul className='dropdownItems'>
                                            <Link to={'/profile'} style={{ textDecoration: 'none', color: 'black' }}>
                                                <li className='dropdownItem'>
                                                    <PersonIcon className='dropdownicon' />
                                                    <span className='dropdowntext'>Profile</span>
                                                </li>
                                            </Link>

                                            <hr />
                                            <Link to={'/login'} style={{ textDecoration: 'none', color: 'black' }}>
                                                <li className='dropdownItem'>
                                                    <LogoutIcon className='dropdownicon' />
                                                    <span className='dropdowntext'>Logout</span>
                                                </li>
                                            </Link>
                                        </ul>
                                    </div>
                                )
                            }

                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default Topbar;
