import React from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import './createpost.css'
import { useState } from 'react';
function CreatePost(props) {
    var [click, setclick] = useState(false);
    var [file,setfile] = useState();
    function onclickHandler() {
        props.clickHandler()
    }
    function chooseFileHandler() {
        console.log('clicked');
        setclick(click = true);
    }
    return (
        <div className='createPostBox'>
            {/* create Post title & Cancle buttom */}
            <div className="cretepostHeader">
                <h2 className='title'>Create Post</h2>
                <CancelIcon className='cancleIcon' onClick={() => onclickHandler()} />
            </div>
            <hr />
            {/* Input area */}
            <input className='textArea' placeholder='Share your thought with your connections' />
            {/* Preview Area */}
            {/* Multiple Option for post */}
            <div className="options">
                <label htmlFor='myfile' className="option" onClick={() => chooseFileHandler()}>
                    <PhotoLibraryIcon htmlColor='tomato' className='shareOptionPhoto' />
                    <input style={{display:'none'}} type="file" id="myfile" name="myfile" accept='.png,.jpg,.jpeg'  onChange={(e)=>{setfile(file=e.target.files[0])}}></input>
                </label>

                <div className="option">
                    <MenuBookIcon htmlColor='green' className='shareOptionPhoto' />
                </div>
                <div className="option">
                    <QuestionMarkIcon htmlColor='blue' className='shareOptionPhoto' />
                </div>
                <div className="option">
                    <EmojiEmotionsIcon htmlColor='goldenrod' className='shareOptionPhoto' />
                </div>
            </div>
            <button className='postbutton'>Post</button>
        </div>
    );
}

export default CreatePost;
