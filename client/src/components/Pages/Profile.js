import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Profile.css'
import axios from 'axios';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../Config';
import { useSelector } from 'react-redux';

const Profile = () => {

    const user = useSelector(state => state.UserReducer);
    const [myAllPosts, setMyAllPosts] = useState([]);
    const[postDetails , setPostDetails] = useState({}) ;

    const [show, setShow] = useState(false);
    const [image, setImage] = useState({ preview: '', data: '' })
    const [caption, setCaption] = useState("");
    const [location, setLocation] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [showPost, setShowPost] = useState(false);

    const handlePostClose = () => setShowPost(false);
    const handlePostShow = () => setShowPost(true);

    const CONFIG_OBJ = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        }
    }

    const handleFileSelect = (e) => {
        const img = {
            preview: URL.createObjectURL(e.target.files[0]),
            data: e.target.files[0]
        }
        setImage(img);

    }

    const handleImgUpload = async () => {
        let formData = new FormData();
        formData.append('file', image.data);

        const response = axios.post(`${API_BASE_URL}/uploadFile`, formData)
        return response;
    }

    const AddPost = async () => {

        if (image.preview === '') {
            Swal.fire({
                icon: 'error',
                title: 'Post image is mandatory!'
            })
        } else if (caption === '') {
            Swal.fire({
                icon: 'error',
                title: 'Post caption is mandatory!'
            })
        } else if (location === '') {
            Swal.fire({
                icon: 'error',
                title: 'Location is mandatory!'
            })
        } else {
            setLoading(true);
            const imgRes = await handleImgUpload();
            const request = { description: caption, location: location, image: `${API_BASE_URL}/files/${imgRes.data.fileName}` }

            const postResponse = await axios.post(`${API_BASE_URL}/createpost`, request, CONFIG_OBJ)
            setLoading(false);
            navigate('/posts')
            if (postResponse.status == 201) {
                navigate("/posts")
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Some error occurred while creating post'
                })
            }
        }
    }

    const Profileimage = "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG93ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"


    const getMyAllPosts = async () => {
        const response = await axios.get(`${API_BASE_URL}/myallposts`, CONFIG_OBJ);

        if (response.status === 200) {
            setMyAllPosts(response.data.posts);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Some error occurred while getting my all posts'
            })
        }
    }

    const deletePost = async (postId) => {
        const res = await axios.delete(`${API_BASE_URL}/deletepost/${postId}`, CONFIG_OBJ)
        if (res.status === 200) {
          getMyAllPosts();
          setShow(false);
        }
    
      }
    

    const showDetail = (post) => {
        setPostDetails(post);
      }

    useEffect(() => {

        getMyAllPosts();


    }, [])





    return (
        <div>
            <div className="container8 shadow-lg">
                <div className="row">

                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="res-ctrl2">
                            <div>
                                <img src={Profileimage} alt="img" className="img-ctrl9"></img>
                            </div>
                            <div className="res-ctrl1">
                                <div className="username-ctrl">
                                    {user.user.email}
                                </div>

                                <div className="name-ctrl">
                                    {user.user.fullname}
                                </div>

                            </div>
                        </div>
                        <div className="about-ctrl">
                            <span> UI/UX Designer</span>&nbsp;
                            <span className="text-color-ctrl">{user.user.email}</span>&nbsp;
                            <span>| Follow</span>&nbsp;
                            <span className="text-color-ctrl">{user.user.fullname}</span>
                        </div>

                        <div className="portfolio-ctrl">
                            <span>My portfolio on</span>&nbsp;
                            <span className="text-color-ctrl">bubble.com/{user.user.email}</span>
                        </div>


                    </div>

                    {/* <div className="dektop"> */}

                    <div className="col-lg-6 col-md-6 col-sm-12 right-part">
                        <div className="desktop">
                            <div className="right-section-ctrl">
                                <div className="right-upper-ctrl">
                                    <div className="post-ctrl">
                                        <div className="font-ctrl">{myAllPosts.length}</div>
                                        <div className="test-ctrl">Posts</div>

                                    </div>

                                    <div className="follower-ctrl">
                                        <div className="font-ctrl">20</div>
                                        <div className="test-ctrl">Followers</div>
                                    </div>

                                    <div className="following-ctrl">
                                        <div className="font-ctrl">20</div>
                                        <div className="test-ctrl">Following</div>
                                    </div>
                                </div>

                                <div className="right-down-ctrl">
                                    <div className="btn-ctrl10">
                                        <button type="button" className="btn btn-outline-secondary edit-ctrl">Edit Profile</button>
                                        <button onClick={handlePostShow} type="button" className="btn btn-outline-secondary upload-ctrl">Upload Post</button>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="mobile">

                            <div className="right-section-ctrl">

                                <div className="right-down-ctrl">
                                    <div className="btn-ctrl10">
                                        <button type="button" className="btn btn-outline-secondary edit-ctrl">Edit Profile</button>
                                        <button onClick={handlePostShow} type="button" className="btn btn-outline-secondary upload-ctrl">Upload Post</button>
                                    </div>
                                </div>

                                <div className="right-upper-ctrl">
                                    <div className="post-ctrl">
                                        <div className="font-ctrl">{myAllPosts.length}</div>
                                        <div className="test-ctrl">Posts</div>

                                    </div>

                                    <div className="follower-ctrl">
                                        <div className="font-ctrl">20</div>
                                        <div className="test-ctrl">Followers</div>
                                    </div>

                                    <div className="following-ctrl">
                                        <div className="font-ctrl">20</div>
                                        <div className="test-ctrl">Following</div>
                                    </div>
                                </div>

                            </div>


                        </div>


                    </div>

                    {/* </div> */}
                </div>

                <div className="row mt-4 gall-ctrl">
                   
                        {
                        myAllPosts.map((post) => {
                            return (
                                <div  className="col-lg-4 col-md-4 col-sm-4"  key={post._id}>
                                    <div className="card" onClick={handleShow}>
                                        <img
                                        
                                        onClick={() => showDetail(post)}
                                        
                                        src={post.image} className=" gall-img-ctrl" alt={post.description} />
                                    </div>
                                </div>
                            )
                        })
                        }
                   

                </div>




                <Modal show={show} onHide={handleClose} size="lg">
                    <Modal.Header closeButton>
                        {/* <Modal.Title>Modal heading</Modal.Title> */}
                    </Modal.Header>
                    <Modal.Body>
                        <div className="container11">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">

                                    <div id="carouselExampleIndicators" className="carousel slide car-ctrl" >
                                        <div className="carousel-indicators">
                                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                        </div>
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img src={postDetails.image} className="d-block w-100 img-ctrl12" alt="img" />
                                            </div>
                                            <div className="carousel-item">
                                                <img src="https://images.unsplash.com/photo-1492950103599-127d2be251b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" className="d-block w-100 img-ctrl12" alt="img" />
                                            </div>
                                            <div className="carousel-item">
                                                <img src="https://images.unsplash.com/photo-1440749395129-76b2ae3df520?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" className="d-block w-100 img-ctrl12" alt="img" />
                                            </div>
                                        </div>
                                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>

                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-12">

                                    <div className="small-container">
                                        <div >
                                            <img src={Profileimage} alt="img" className="img-ctrl13"></img>
                                        </div>
                                        <div className="right-modal">
                                            <div className="right-modal-name">{postDetails.description}</div>
                                            <div className="right-modal-location"> {postDetails.location}</div>
                                        </div>
                                        <div className="ellipsis-ctrl ">

                                            <div className="dropdown">
                                                <div data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="fa-solid fa-ellipsis"></i>
                                                </div>

                                                <ul className="dropdown-menu">
                                                    <li><button className="dropdown-item" type="button">
                                                        <i className="fa-solid fa-pen-to-square"></i>&nbsp; Edit Post </button></li>
                                                    <li><button onClick={()=>{deletePost(postDetails._id)}} className="dropdown-item" type="button"><i className="fa-solid fa-trash"></i>&nbsp; Delete Post</button></li>

                                                </ul>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="time-ctrl">
                                        <h6>2 Hours Ago</h6>

                                    </div>

                                    <div className="about-post-ctrl">
                                        <div> Lorem ipsum dummy text lorem Lorem ipsum dummy text lorem Lorem ipsum dummy text lorem Lorem ipsum dummy text lorem Lorem ipsum dummy text.

                                        </div>
                                    </div>

                                    <div className="icon-ctrl14">
                                        <div className="like-ctrl15">
                                            <i className="fa-regular fa-heart"></i>
                                        </div>

                                        <div className="comment-ctrl15">
                                            <i className="fa-regular fa-comment"></i>

                                        </div>

                                        <div className="send-ctrl15">
                                            <i className="fa-solid fa-location-arrow"></i>

                                        </div>

                                    </div>

                                    <div className="like-ctrl16">
                                        200 likes
                                    </div>

                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>



                <Modal show={showPost} onHide={handlePostClose} size="lg">
                    <Modal.Header closeButton className="modal-header-ctrl">
                        <Modal.Title  >Upload Post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <div className="container17">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 container20">

                                    <div className='upload-box'>
                                        <div className="dropZoneContainer">
                                            <input name="file" type="file" id="drop_zone" className="FileUpload" accept=".jpg,.png,.gif" onChange={handleFileSelect} />
                                            <div className="dropZoneOverlay">
                                                {image.preview && <img src={image.preview} width='150' height='150' />}
                                                <i class="fa-solid fa-cloud-arrow-up fs-1"></i><br />Upload Photo From Computer</div>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="container18">
                                        <form>
                                            <div className="form-floating mb-3">
                                                <textarea onChange={(e) => setCaption(e.target.value)} className="form-control" placeholder="Add Caption" id="floatingTextarea"></textarea>
                                                <label for="floatingTextarea">Add Caption</label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input onChange={(e) => setLocation(e.target.value)} type="text" className="form-control" id="floatingInput" placeholder="Add Location" />
                                                <label for="floatingInput"><i className="fa-solid fa-location-pin pe-2"></i>Add Location</label>
                                            </div>

                                            {loading ? <div className='col-md-12 mt-3 text-center'>
                                                <div className="spinner-border text-primary" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div>
                                            </div> : ''}

                                            <button onClick={() => AddPost()} className="custom-btn custom-btn-pink float-end">
                                                <span className='fs-6 fw-600'>Upload Post</span>
                                            </button>
                                        </form>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handlePostClose}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>

            </div>

        </div>

    )
}

export default Profile
