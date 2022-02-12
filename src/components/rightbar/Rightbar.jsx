import React from 'react';
import './rightbar.css'

function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="rightbarAdSection">
          <img src="./assests/DBMS.png" alt="" className="rightbarAD" />
        </div>
        <hr className='rightbarHr' />
        <span className="rightbarTitle">Online Friends</span>
        <ul className="rightbarFriendList">
          <li className='rightbarFriend'>
            <div className="rightbarProfileImgContainer">
              <img src="/assests/person/8.jpg" alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarFriendName">Viraj Makwana</span>
          </li>
          <li className='rightbarFriend'>
            <div className="rightbarProfileImgContainer">
              <img src="/assests/person/9.jpg" alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className='rightbarFriendName'>Niraj Hirapara</span>
          </li>
          <li className='rightbarFriend'>
            <div className="rightbarProfileImgContainer">
              <img src="/assests/person/6.jpg" alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className='rightbarFriendName'>Parth Makwana</span>
          </li>
        </ul>
      </>
    )
  }

  const ProfileRightbar = () => {
    return (
      <>

        <div className="rightbarInfo">
          <h3 className="rightbarTitle">Info</h3>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">EnrollmentNo</span>
            <span className="rightbarinfoValue">190170107138</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Current Year</span>
            <span className="rightbarinfoValue">3</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Department</span>
            <span className="rightbarinfoValue">Computer Enginerring</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Mobile No</span>
            <span className="rightbarinfoValue">9428551650</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Email id</span>
            <span className="rightbarinfoValue">yash234@gmail.com</span>
          </div>
          <button className="editProfileButton">Edit Profile</button>
        </div>
        <div className="rightbarProjects">
          <h3 className="rightbarTitle">Projects</h3>
          <div className="Projects">
            <li className="Project">
              <span className="projectTitle">Wether App</span>
              <p className="prjectdesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ex natus corrupti placeat laborum perferendis.</p>
            </li>
            <li className="Project">
              <span className="projectTitle">Social Media App</span>
              <p className="prjectdesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ex natus corrupti placeat laborum perferendis.</p>
            </li>
            <li className="Project">
              <span className="projectTitle">Book online buy/sell App</span>
              <p className="prjectdesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ex natus corrupti placeat laborum perferendis.</p>
            </li>
          </div>
          <button className="addProjectbutton">Add Project</button>
        </div>
      </>
    )
  }
  return (
    <div className="rightBar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}

export default Rightbar;
