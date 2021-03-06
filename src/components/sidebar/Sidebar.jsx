import React from 'react';
import './sidebar.css'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';

function Sidebar() {
    return (
        <div className='sideBar'>
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeedIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <ChatIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <PlayCircleOutlineIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <GroupIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <BookmarkIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <HelpOutlineIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkOutlineIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <EventIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <SchoolIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className='hr' />
                <ul className="sidebarFriendlist">
                    <li className='sidebarFriend'>
                        <img src="/assests/person/9.jpg" alt="" className="sidebarFriendImg" />
                        <span className='sidebarFriendName'>Niraj Hirapara</span>
                    </li>
                    <li className='sidebarFriend'>
                        <img src="/assests/person/8.jpg" alt="" className="sidebarFriendImg"/>
                        <span className='sidebarFriendName'>Viraj Makwana</span>
                    </li>
                    <li className='sidebarFriend'>
                        <img src="/assests/person/5.jpg" alt="" className="sidebarFriendImg"/>
                        <span className='sidebarFriendName'>Vivek Vadodariya</span>
                    </li>
                    <li className='sidebarFriend'>
                        <img src="/assests/person/3.jpg" alt="" className="sidebarFriendImg"/>
                        <span className='sidebarFriendName'>Mahisha Patel</span>
                    </li>
                    <li className='sidebarFriend'>
                        <img src="/assests/person/6.jpg" alt="" className="sidebarFriendImg"/>
                        <span className='sidebarFriendName'>Parth Makwana</span>
                    </li>
                    <li className='sidebarFriend'>
                        <img src="/assests/person/1.jpg" alt="" className="sidebarFriendImg"/>
                        <span className='sidebarFriendName'>Daxesh Italiya</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;
