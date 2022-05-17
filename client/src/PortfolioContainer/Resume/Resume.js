import React, { useState } from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './Resume.css';

export default function Resume(props){
    const [selectedBulletIndex, setSellectedBulletIndex] = useState(0);
    const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});
    
    let fadeInScreenHandler = (screen)=> {
        if (screen.fadeInScreen !== props.id)return;
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription = 
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);


    const ResumeHeading = (props) =>{
        return <div className='resume-heading'>
            <div className='resume-main-heading'>
                <div className='heading-bullet'></div>
                    <span>{props.heading ? props.heading : ''}</span>
                    {props.fromDate && props.toDate ? (
                        <div className='heading-date'>
                            {props.fromDate + "-" + props.toDate}
                        </div>
                    ) : (
                    <div></div>
                    )}
            </div>
            <div className='resume-sub-heading'>
                <span>{props.subHeading ? props.subHeading :  ""}</span>
            </div>
            <div className='resume-heading-description'>
                <span>{props.description ? props.description :  ""}</span>
            </div>
        </div>  
    };

    const resumeBullets =[
        {label: "Education", logoSrc: "education.svg"},
        {label: "Work History", logoSrc: "work-history.svg"},
        {label: "Programming Skills", logoSrc: "programming-skills.svg"},  
        {label: "Tools", logoSrc: "tools.svg"},
        {label: "Interests", logoSrc: "interests.svg"},    
    ];
    const programmingSkillDetails = [
        {skill: "HTML", ratingPercentage:80},
        {skill: "CSS", ratingPercentage: 70},
        {skill: "JavaScript", ratingPercentage: 50},
        {skill: "PHP", ratingPercentage: 35},
        {skill: "MySQL", ratingPercentage:50},
        {skill: "Java", ratingPercentage: 25},
        {skill: "C#", ratingPercentage: 20},
        {skill: "C++", ratingPercentage: 30},
    ];

    const projectDetails = [
        {
            title: "Design Tool",
            duration: {fromDate: "2017", toDate: "-"},
            description: "I started to learn photoshop and editing by designing magazines for school requirements in shs. Soon learned canva because of its ready-made templates for easier process and then figma in creating product layout or design.",
            subHeading: "SVP, Photoshop, Canva, Figma",
        },
        {
            title: "IDE/Software Dev Frameworks",
            duration: {fromDate: "2018", toDate: "-"},
            description: "I've been using vs code since 2018 and started learning laravel on November of 2021 fortunately I was able to hone it on my internship program because we were using laravel with bootstrap.",
            subHeading: "Visual Studio Code, Laravel, ReactJS",
        },
        {
            title: "Source Control Tool",
            duration: {fromDate: "2022", toDate: "-"},
            description: "One of the major things I learned on my on the job training was version control. Using bitbucket and jira board we were able to make organized flow of creating the website.",
            subHeading: "Github, Bitbucket - Jira Software",
        },
    ];
    const resumeDetails = [
        <div className='resume-screen-container' key="education">                   
            <ResumeHeading
            heading={"Divine Child Jesus School Taytay"}
            subHeading={"Elementary"}
            fromDate={"2011"}
            toDate={"2012"}
            /> 
            <ResumeHeading
            heading={"National College of Business and Arts Taytay"}
            subHeading={"Junior High school"}
            fromDate={"2012"}
            toDate={"2016"}
            /> 
            <ResumeHeading
            heading={"STI College, Ortigas Cainta"}
            subHeading={"Senior High School - ICT"}
            fromDate={"2016"}
            toDate={"2018"}
            />
            <ResumeHeading
            heading={"University of Rizal System Binangonan Campus"}
            subHeading={"College - BSIT"}
            fromDate={"2018"}
            toDate={"2022"}
            />
        </div>,

        <div className='resume-screen-container' key="work-experience">
            <ResumeHeading
            heading={"Neksjob, Angono"}
            subHeading={"Frontend Web Developer"}
            fromDate={"February 07, 2022"}
            toDate={"April 01, 2022"}
            />
            <div className='experience-description'>
                <span className='resume-description-text'>
                    Neksjob is an outsourcing company where they develop website and fortunately I was able to get an intership there as a developer. This is my first time working as a programmer.
                </span>
                <br/><br/>                
                <span className='resume-description-text'>
                   I was able to understand a lot about the actual development process of the website from planning to deployment. We were taught a lot especially using github which was super convinient to learn and the different software or plugins we can use to make web development easier. 
                </span>
            </div>
        </div>,

        <div className='resume-screen-container programming-skills-container' key="programming-skills">
            {programmingSkillDetails.map((skill, index)=>(
            <div className='skill-parent' key={index}>
                <div className='heading-bullet'></div>
                <span>{skill.skill}</span>
                <div className='skill-percentage'>
                    <div style={{width: skill.ratingPercentage + "%"}} className='active-percentage-bar'>
                    </div>
                </div>
            </div>
            ))}
        </div>,

        <div className='resume-screen-container' key="tools">
            {projectDetails.map((projectDetails, index)=>(
                <ResumeHeading 
                key={index}
                heading={projectDetails.title}
                subHeading={projectDetails.subHeading}
                description={projectDetails.description}
                fromDate={projectDetails.duration.fromDate}
                toDate={projectDetails.duration.toDate}
                />
            ))}
        </div>,

        <div className='resume-screen-container' key="interests">
            <ResumeHeading 
            heading="Baking"  
            description="I was able to learn baking because of the pandemic since I had much more time I was able to spend it trying out new things. That when i started baking and I also sold them for a while but I stopped because online class started. "
            />
            <ResumeHeading 
            heading="Traveling"  
            description="It helps me clear my mind and appreciate my surroundings instead of staring at the screen for months. Its a good way to help you thing of your bugs and errors also."
            />
            <ResumeHeading 
            heading="Planting"  
            description="Planting helps me organize my thoughts and clear my mind. It gives me ideas and is really therapeutic."
            />
        </div>,
    ];

    const handleCarousal = (index) => {
        let offsetHeight = 360;
        let newCarousalOffset = {
            style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" }
        };
        setCarousalOffSetStyle(newCarousalOffset);
        setSellectedBulletIndex(index);
    };

    const getBullets = () => {
        return resumeBullets.map((bullet, index)=>(
            <div 
            onClick={() => handleCarousal(index)}
            className={index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"}
            key={index}
            >

                <img className='bullet-logo'
                src={require(`../../assets/Resume/${bullet.logoSrc}`)}
                alt='Not Available'
                />
                <span className='bullet-label'>{bullet.label}</span>  
                
            </div>
        ))
    };

    const getResumeScreen = () => {
        return <div style = {carousalOffSetStyle.style}
            className='resume-details-carousal'>
                {resumeDetails.map((ResumeDetail) => ResumeDetail)}
            </div>
    };

    return (
        <div className='resume-container screen-container fade-in' id={props.id || ""}>
            <div className='resume-content'>
                <ScreenHeading title={'Resume'} subHeading={'My Formal Bio Details'}/>
                <div className='resume-card'>
                    <div className='resume-bullets'>
                        <div className='bullet-container'>
                            <div className='bullet-icons'></div>
                            <div className='bullets'> {getBullets()} </div>
                        </div>
                    </div>
                    <div className='resume-bullet-details'>
                        {getResumeScreen()}
                    </div>
                </div>
            </div>
        </div>
    );
}
