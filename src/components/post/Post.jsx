import React, { useState } from 'react';
import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Users} from '../../dummyData'

const Post = ({post}) => {
    console.log(post)
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img
                            className="postProfileImg"
                            src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
                            alt=""
                        />
                        <span className="postUsername"> {Users.filter((u) => u.id === post.userId)[0].username}</span>
                        <span className="postDate">{post?.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVertIcon />
                    </div>
                </div>
                <div className="postCenter">
                    <div className="postText">{post?.desc}</div>
                    <img src={post?.photo} alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="./assests/like.jpg" alt="" className="likeIcon" />
                        <img src="./assests/hearts.png" alt="" className="heartIcon" />
                        <span className="postLikeCounter">{post?.like} People liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className='postCommentText'>{post?.comment} Comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Post;