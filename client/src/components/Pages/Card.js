import React from 'react';
import './Card.css'
import { useSelector } from 'react-redux';

const Card = ({post , deletePost }) => {

  const user = useSelector(state => state.UserReducer);
  console.log(post.author._id);
  console.log(user.user._id)
  return (
    <div className="card-ctrl shadow p-3 mb-4">

      <div className="row row-ctrl">
        <div className=" col-lg-8 col-md-8 col-sm-8 left-ctrl1">
          <div >
            <img className="img-ctrl3" src="https://images.unsplash.com/photo-1594817143013-fd94f0428c90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdpcmwlMjBjaGlsZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="img" />
          </div>

          <div className="head-ctrl">
            <h5>{post.description}</h5>
            <h6>{post.location} </h6>
          </div>

        </div>

          <div className=" col-lg-4 col-md-4 col-sm-4  ">

         <i onClick={() => deletePost(post._id)}  className="fa-solid fa-ellipsis-vertical fs-1 py-1 px-2 float-end "></i> 


        </div>
      </div>

      <div className="row mt-4">
        <div className=" col-lg-12 col-md-12 col-sm-12 d-flex">
          <img src={post.image} alt="img" className="img-ctrl4" />
        </div>
      </div>

      <div className="row">

        <div className="col-lg-6 col-md-6 col-sm-6 mt-3">
          <i className="fa-regular fa-heart icon-ctrl5"></i>
          <i className="fa-regular fa-comment icon-ctrl5"></i>
          <i className="fa-solid fa-location-arrow icon-ctrl5"></i>

        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 mt-3 ">
          <div className="float-end like-ctrl6">200 likes</div>
        </div>

      </div>

    </div>
  )
}

export default Card
