import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Profile.css'

const Profile = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showPost, setShowPost] = useState(false);

    const handlePostClose = () => setShowPost(false);
    const handlePostShow = () => setShowPost(true);

    const Profileimage = "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG93ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
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
                                    rashu_pdv
                                </div>

                                <div className="name-ctrl">
                                    Rashika Padave
                                </div>

                            </div>
                        </div>
                        <div className="about-ctrl">
                            <span> UI/UX Designer</span>&nbsp;
                            <span className="text-color-ctrl">@eduonix </span>&nbsp;
                            <span>| Follow</span>&nbsp;
                            <span className="text-color-ctrl">@rashui</span>
                        </div>

                        <div className="portfolio-ctrl">
                            <span>My portfolio on</span>&nbsp;
                            <span className="text-color-ctrl">bubble.com/rashik_padave</span>
                        </div>


                    </div>

                    {/* <div className="dektop"> */}

                    <div className="col-lg-6 col-md-6 col-sm-12 right-part">
                        <div className="desktop">
                            <div className="right-section-ctrl">
                                <div className="right-upper-ctrl">
                                    <div className="post-ctrl">
                                        <div className="font-ctrl">10</div>
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
                                        <div className="font-ctrl">10</div>
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
                    <div onClick={handleShow} className="col-lg-4 col-md-4 col-sm-4">
                        <img src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Rmxvd2Vyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="img" className="gall-img-ctrl" />

                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <img onClick={handleShow} src="https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Rmxvd2Vyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="img" className="gall-img-ctrl" />

                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <img src="https://images.unsplash.com/photo-1457089328109-e5d9bd499191?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEZsb3dlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="img" className="gall-img-ctrl" />

                    </div>
                </div>
                <div className="row mt-4 gall-ctrl">
                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <img src="https://images.unsplash.com/photo-1572454591674-2739f30d8c40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2VyJTIwYm91cXVldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="img" className="gall-img-ctrl" />

                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <img src="https://images.unsplash.com/photo-1596438459194-f275f413d6ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zmxvd2VyJTIwYm91cXVldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="img" className="gall-img-ctrl" />

                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <img src="https://images.unsplash.com/photo-1533616688419-b7a585564566?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZsb3dlciUyMGJvdXF1ZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="img" className="gall-img-ctrl" />

                    </div>
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
                                                <img src="https://images.unsplash.com/photo-1457089328109-e5d9bd499191?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" className="d-block w-100 img-ctrl12" alt="img" />
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
                                            <div className="right-modal-name">rashu_pdv</div>
                                            <div className="right-modal-location"> Mumbai , India</div>
                                        </div>
                                        <div className="ellipsis-ctrl ">

                                            <div className="dropdown">
                                                <div data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="fa-solid fa-ellipsis"></i>
                                                </div>

                                                <ul className="dropdown-menu">
                                                    <li><button className="dropdown-item" type="button">
                                                        <i className="fa-solid fa-pen-to-square"></i>&nbsp; Edit Post </button></li>
                                                    <li><button className="dropdown-item" type="button"><i className="fa-solid fa-trash"></i>&nbsp; Delete Post</button></li>

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
                    <Modal.Header closeButton>
                        <Modal.Title>Upload Post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <div className="container17">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 container20">

                                    <div className='upload-box'>
                                        <div className="dropZoneContainer">
                                            <input name="file" type="file" id="drop_zone" className="FileUpload" accept=".jpg,.png,.gif" />
                                            <div className="dropZoneOverlay">
                                                {/* {image.preview && <img src={image.preview} width='150' height='150' />} */}
                                                <i class="fa-solid fa-cloud-arrow-up fs-1"></i><br />Upload Photo From Computer</div>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="container18">
                                        <form>
                                            <div className="form-floating mb-3">
                                                <textarea className="form-control" placeholder="Add Caption" id="floatingTextarea"></textarea>
                                                <label for="floatingTextarea">Add Caption</label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input type="text" className="form-control" id="floatingInput" placeholder="Add Location" />
                                                <label for="floatingInput"><i className="fa-solid fa-location-pin pe-2"></i>Add Location</label>
                                            </div>

                                            <button  className="custom-btn custom-btn-pink float-end">
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
