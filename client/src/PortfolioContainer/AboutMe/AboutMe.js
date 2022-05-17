import React, {useEffect} from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations'
import "./AboutMe.css"

export default function AboutMe(props){
    
    let fadeInScreenHandler = (screen)=> {
        if (screen.fadeInScreen !== props.id)
        return;
        Animations.animations.fadeInScreen(props.id);
    };
    const fadeInSubscription = 
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const SCREEN_CONSTSANTS = {
        description: "Hi there! I'm Kim De Leon an aspiring full stack developer. A graduate at University of Rizal System Binangonan Rizal on June of 2022 with the course of Bachelor of Science in Information Technology. I started programming in Senior Highschool when I was in STI Ortigas Cainta. I choose IT because I was inspired by the way technology helps and impact the lives of the people. I like all parts of creative process and learning new skills. I have a good sense of team work and camaraderie as I have done so in school and in my intership. I enjoy meeting new people and learning with or from them as well as taking on new challenges.",
        highlights:{
            bullets:[
                "Photoshop",
                "Video Editing",
                "Blender",
                "Web Development",
                "Designing",
            ],
            heading: "Here are a Few Highlights:"
        }
    }

    const renderHighlight = ()=>{
        return(
            SCREEN_CONSTSANTS.highlights.bullets.map((value, i)=>(
                <div className='highlight' key={i}>
                    <div className='highlight-blob'></div>
                    <span>
                        {value}
                    </span>
                </div>
            ))
        );
    };


    return (
        <div className='about-me-container screen-container fade-in' id={props.id || ''}>
            <div className='about-me-parent'>
                <ScreenHeading title={'About Me'} subHeading={'Why choose me?'}/>
                <div className='about-me-card'>
                    <div className='about-me-profile'></div>
                    <div className='about-me-details'>
                        <span className='about-me-description'>{SCREEN_CONSTSANTS.description}</span>
                        <div className='about-me-highlights'>
                            <div className='highlight-heading'>
                                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
                            </div>
                            {renderHighlight()}
                        </div>
                        <div className='about-me-options'>
                            <button className='btn primary-btn'
                            onClick = { () => ScrollService.scrollHandler.scrollToHireMe()}>
                                Hire Me
                            </button>
                            <a href='kimdeleon.pdf' download='KimResume kimdeleon.pdf'>
                                <button className='btn highlighted-btn'>Get Resume</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
