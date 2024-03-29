import Home from '../PortfolioContainer/Home/Home'
import AboutMe from '../PortfolioContainer/AboutMe/AboutMe'
import Resume from '../PortfolioContainer/Resume/Resume';
import Testimonial from '../PortfolioContainer/Testimonial/Testimonial'
import ContactMe from '../PortfolioContainer/ContactMe/ContactMe';

export const TOTAL_SCREENS =[
    {
        screen_name: "Home",
        component: Home,
    },
    {
        screen_name: "About Me",
        component: AboutMe,
    },
    {
        screen_name: "Resume",
        component: Resume,
    },
    {
        screen_name: "Projects",
        component: Testimonial,
    },
    {
        screen_name: "Contact Me",
        component: ContactMe,
    }
];

export const GET_SCREEN_INDEX = (screen_name)=>{
    /* check if the screen name doesnt exist */
    if(!screen_name) return -1;
    /* look through the array of screens and get the available array of screens */
    for (let i = 0; i < TOTAL_SCREENS.length; i++){
        if(TOTAL_SCREENS[i].screen_name === screen_name)
        return i;
    }
    return -1;
}