import React from 'react'
import './Profile.css'

const Profile = () => {

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
                                        <button type="button" className="btn btn-outline-secondary upload-ctrl">Upload Post</button>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="mobile">

                            <div className="right-section-ctrl">

                                <div className="right-down-ctrl">
                                    <div className="btn-ctrl10">
                                        <button type="button" className="btn btn-outline-secondary edit-ctrl">Edit Profile</button>
                                        <button type="button" className="btn btn-outline-secondary upload-ctrl">Upload Post</button>
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
                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <img src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Rmxvd2Vyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="img" className="gall-img-ctrl" />

                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <img src="https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Rmxvd2Vyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="img" className="gall-img-ctrl" />

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

            </div>

           

        </div>


    )
}

export default Profile
