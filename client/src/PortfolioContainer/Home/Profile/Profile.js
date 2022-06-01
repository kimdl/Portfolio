import React from 'react'
import Typical from 'react-typical'
import ScrollService from '../../../utilities/ScrollService'
import "./Profile.css";

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href='https://www.facebook.com/kimberly.p.deleon/'>
                                <i className='fa fa-facebook-square'></i>
                            </a>
                            <a href='https://twitter.com/kimdleon'>
                                <i className='fa fa-google-plus-square'></i>
                            </a>
                            <a href='https://www.instagram.com/wackimn/'>
                                <i className='fa fa-instagram'></i>
                            </a>
                            <a href='https://www.youtube.com/channel/UCLw-bwdUH7v8BjArjzlqouQ'>
                                <i className='fa fa-youtube-square'></i>
                            </a>
                            <a href='https://twitter.com/kimdleon'>
                                <i className='fa fa-twitter'></i>
                            </a>
                        </div>
                    </div>
                
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hi there, I'm <span className='highlighted-text'>Kim De Leon</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <Typical 
                                loop={Infinity}
                                steps={[
                                    "Frontend Developer",
                                    1000,
                                    "Photoshop",
                                    1000,
                                    "UI/UX Enthusiast",
                                    1000,
                                    "Video Editor",
                                    1000,
                                ]}
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                I work meticulously and seek to improve myself. 
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn' 
                        onClick = {()=>ScrollService.scrollHandler.scrollToHireMe()}>
                            Hire Me
                        </button>
                        <a href='kimdeleon.pdf' download='KimResume kimdeleon.pdf'>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>
            </div>
        </div>
    );
}
