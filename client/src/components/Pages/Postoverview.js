import React, { useState, useEffect } from 'react'
import './Postoverview.css'
import Card from './Card'
import axios from 'axios';
import Swal from 'sweetalert2'
import { API_BASE_URL } from '../Config';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Postoverview = () => {

  const [allpost, setAllpost] = useState([]);

  const CONFIG_OBJ = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + localStorage.getItem("token")
    }
  }

  const getAllPosts = async () => {
    const response = await axios.get(`${API_BASE_URL}/allposts`);

    if (response.status === 200) {
      setAllpost(response.data.posts);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Some error occurred while getting all posts'
      })
    }
  }






  const deletePost = async (postId) => {
    const res = await axios.delete(`${API_BASE_URL}/deletepost/${postId}`, CONFIG_OBJ)
    if (res.status === 200) {
      getAllPosts();
    }

  }

  useEffect(() => {

    getAllPosts();


  }, [])




  return (
    <div className="container">
      <div className="row">



        {allpost.map((post) => {
          return (
            <div className='col-md-4 mb-2' key={post._id}>
              <Card post={post} deletePost={deletePost} getAllPosts={getAllPosts} />
            </div>
          )
        })
        }





      </div>


    </div>
  )
}

export default Postoverview
