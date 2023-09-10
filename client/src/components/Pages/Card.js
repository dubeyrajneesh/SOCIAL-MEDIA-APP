import React, { useState } from 'react';
import './Card.css'
import { useSelector } from 'react-redux';
import axios from 'axios';
import { API_BASE_URL } from '../Config';

const Card = (props) => {

  const user = useSelector(state => state.UserReducer);
  const [commentBox, setCommentBox] = useState(false)
  const [comment, setComment] = useState("")
  // console.log(props.post.author._id);
  // console.log(user.user._id)

  const CONFIG_OBJ = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + localStorage.getItem("token")
    }
  }

  const likeDislikePost = async (postId, type) => {
    const request = { "postId": postId };
    const response = await axios.put(`${API_BASE_URL}/${type}`, request, CONFIG_OBJ);
    if (response.status === 200) {
      props.getAllPosts();
    }
  }

  const submitComment = async (postId) => {
    setCommentBox(false);
    const request = { "postId": postId, "commentText": comment };
    const response = await axios.put(`${API_BASE_URL}/comment`, request, CONFIG_OBJ);
    if (response.status === 200) {
      props.getAllPosts();
    }
    setComment('');
  }



  return (
    <div className="card-ctrl shadow p-3 mb-4">

      <div className="row row-ctrl" >
        <div className=" col-lg-8 col-md-8 col-sm-8 left-ctrl1">
          <div >
            <img className="img-ctrl3" src="https://images.unsplash.com/photo-1594817143013-fd94f0428c90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdpcmwlMjBjaGlsZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="img" />
          </div>

          <div className="head-ctrl">
            <h5>{props.post.description}</h5>
            <h6>{props.post.location} </h6>
          </div>

        </div>


        {
          props.post.author._id == user.user._id ?
            <div className=" col-lg-4 col-md-4 col-sm-4   ">

              <div className="drop-ctrl float-end ver-elip-ctrl ">
                <button data-bs-toggle="dropdown" >
                  <i className="fa-solid fa-ellipsis-vertical fs-1 py-1 px-2 float-end "></i>
                </button>
                <ul class="dropdown-menu" >
                  <li onClick={() => props.deletePost(props.post._id)} ><a class="dropdown-item" href="#">Delete Post</a></li>

                </ul>
              </div>



            </div>
            : ''}
      </div>

      <div className="row mt-4">
        <div className=" col-lg-12 col-md-12 col-sm-12 d-flex">
          <img src={props.post.image} alt="img" className="img-ctrl4" />
        </div>
      </div>

      <div className="row">

        <div className="col-lg-6 col-md-6 col-sm-6 mt-3">
          <i onClick={() => likeDislikePost(props.post._id, 'like')} className="fa-regular fa-heart icon-ctrl5"></i>
          <i onClick={() => likeDislikePost(props.post._id, 'unlike')} className="fa-regular fa-thumbs-down icon-ctrl5"></i>
          <i onClick={() => setCommentBox(true)} className="fa-regular fa-comment icon-ctrl5"></i>

        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 mt-3 ">
          <div className="float-end like-ctrl6">{props.post.likes.length} likes</div>
        </div>

      </div>

      {commentBox ? <div className='row mb-2'>
        <div className='col-8'>
          <textarea onChange={(e) => setComment(e.target.value)} className='form-control'></textarea>
        </div>
        <div className='col-4'>
          <button className='btn btn-primary' onClick={() => submitComment(props.post._id)}>Submit</button>
        </div>
      </div> : ""}
      {props.post.comments.map((comment) => {
        return (<div className='row'>
          <div className='col-12'>
            <p>{comment.commentText} - {comment.commentedBy.email}</p>
          </div>
        </div>)
      })}

    </div>
  )
}

export default Card
