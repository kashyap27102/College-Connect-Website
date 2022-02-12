import React, { useState } from 'react';
import './share.css';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Login from '../../pages/login/Login';
import Post from '../post/Post';
import CreatePost from '../createPost/CreatePost';

function Share() {
    var [isClick,setClick] = useState(false);
    function clickHandler(){
        return (
            setClick(isClick = !isClick)
        )
    }
  return(
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="./assests/person/2.jpg" alt="" className="shareProfileImg" />
                <input placeholder="Share your stuff with your Friends" className="shareInput" onClick={()=>clickHandler()}/>
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PhotoLibraryIcon htmlColor='tomato' className='shareOptionPhoto'/>
                        <span className="shareOptionText">Photo or video</span>
                    </div>
                    <div className="shareOption">
                        <MenuBookIcon htmlColor='green' className='shareOptionPhoto'/>
                        <span className="shareOptionText">Study Material</span>
                    </div>
                    <div className="shareOption">
                        <QuestionMarkIcon htmlColor='blue' className='shareOptionPhoto'/>
                        <span className="shareOptionText">Ask Doubts</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotionsIcon htmlColor='goldenrod' className='shareOptionPhoto'/>
                        <span className="shareOptionText">Feelings</span>
                    </div>
                </div>
            </div>
        </div>
        {
            isClick && (<CreatePost clickHandler={clickHandler}/>)
        }
        
    </div>
  )
}

export default Share;
