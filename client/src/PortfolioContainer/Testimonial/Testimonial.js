import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import'./Testimonial.css';

import html from "../../../src/img/Testimonial/html-5.png";
import css from "../../../src/img/Testimonial/css.png";
import js from "../../../src/img/Testimonial/js.png";
import bootstrap from "../../../src/img/Testimonial/bootstrap_icon.png";
import mysql from "../../../src/img/Testimonial/mysql.png";
import sass from "../../../src/img/Testimonial/sass.png";
import php from "../../../src/img/Testimonial/php.png";
import react from "../../../src/img/Testimonial/react.png";

import hpw from "../../../src/img/Testimonial/hpw.PNG";
import intbooking from "../../../src/img/Testimonial/InterviewBooking.PNG";
import portfolio from "../../../src/img/Testimonial/portfolio.PNG";
import oaa from "../../../src/img/Testimonial/oaaForURSB.png";



export default function Testimonial(props) {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) 
        return;
        Animations.animations.fadeInScreen(props.id);
    };
    const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const options ={
        loop: true,
        margin: 0,
        nav: true,
        animateIn: "bounceInRight",
        animateOut: "bounceOutRight",
        dots: true,
        autoplay: true,
        smartSpeed: 2000,
        
        responsive:{
            0:{
                items:1,
            },
            768:{
                items:1,
            },
            1000:{
                items:3,
            }
        }
    }

    return (
        <div className="fade-in">
            <ScreenHeading
                title={"Projects"}
                subHeading={"Sample websites."}
            />
            
            <section className="testimonial-section" id={props.id || ""}>
                <div className="container">
                    <div className="row">
                        <OwlCarousel className="owl-carousel" id="testimonial-carousel" {...options}>
                     
                        <div className="col-lg-12">
                            <div className="testi-item">
                                <div className="testi-comment">
                                    <h5>Harry Potter Guide</h5>
                                    <p>
                                        IT Elective Prelim Project
                                        <img src={hpw} alt="no internet connection" />
                                    </p>
                                    <ul className="icons list-unstyled">
                                        <li>
                                            <img src={html} alt="no internet connection" />
                                        </li>
                                        <li>
                                            <img src={css} alt="no internet connection" />
                                        </li>
                                        <li>
                                            <img src={js} alt="no internet connection" />
                                        </li>
                                    </ul>
                                </div>
                                <div className="project-info">
                                    <p>
                                        This is a simple website I made when I was in third year which shows information like casts, author, books and summary about Harry Potter.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="testi-item">
                                <div className="testi-comment">
                                    <h5>Online Admission Application (URSB) </h5>
                                    <p>
                                        Capstone Project
                                        <img src={oaa} alt="no internet connection" />
                                    </p>
                                    
                                    <ul className="icons list-unstyled">
                                        <li>
                                            <img src={html} alt="no internet connection" />
                                        </li>
                                        <li>
                                            <img src={css} alt="no internet connection" />
                                        </li>
                                        <li>
                                            <img src={js} alt="no internet connection" />
                                        </li>
                                        <li>
                                            <img src={sass} alt="no internet connection" />
                                        </li>
                                        <li>
                                            <img src={php} alt="no internet connection" />
                                        </li>
                                        <li>
                                            <img src={mysql} alt="no internet connection" />
                                        </li>
                                    </ul>
                                </div>
                                <div className="project-info">
                                    <p>
                                        This is where I was able to grow as a developer, it is where I learned a lot about css and php because I did not use bootstrap or laravel at that time.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="testi-item">
                                <div className="testi-comment">
                                    <h5>Interview Booking</h5>
                                    <p>
                                        Internship Project
                                        <img src={intbooking} alt="no internet connection" />
                                    </p>
                                    <ul className="icons list-unstyled">
                                        <li>
                                            <img src={html} alt="no internet connection" />
                                        </li>
                                        <li>
                                            <img src={css} alt="no internet connection" />
                                        </li>
                                        <li>
                                            <img src={js} alt="no internet connection" />
                                        </li>
                                        <li>
                                            <img src={php} alt="no internet connection" />
                                        </li>
                                    </ul>
                                </div>
                                <div className="project-info">
                                    <p>
                                        My first collaborative project where I was introduced to bitbucket and jira. This website focuses on schedulling Neksjob applicants for an interview.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="testi-item">
                                <div className="testi-comment">
                                    <h5>KIMDL Wesite</h5>
                                    <p>
                                        My Portfolio
                                        <img src={portfolio} alt="no internet connection" />
                                    </p>
                                    
                                    <ul className="icons list-unstyled">
                                        <li>
                                            <img src={html} alt="no internet connection" />
                                        </li>
                                        <li>
                                            <img src={css} alt="no internet connection" />
                                        </li>
                                        <li>
                                            <img src={js} alt="no internet connection" />
                                        </li>
                                        <li>
                                            <img src={react} alt="no internet connection" />
                                        </li>
                                    </ul>
                                </div>
                                <div className="project-info">
                                    <p>
                                        I decided to make a portfolio in order to hone my programming skills and showcase what I learned from my short experience as a developer. 
                                    </p>
                                </div>
                            </div>
                        </div>

                        </OwlCarousel>
                    </div>
                </div>
            </section>
            <div className='footer-image'>
                <img src={require ('../../assets/Home/shape-bg.png')} alt='no internet connection'/>
            </div>
        </div>
    );
}
