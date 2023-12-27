import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import {AiOutlineGithub, AiFillLinkedin, AiOutlineTwitter} from "react-icons/ai";
import About from "./About";
import Project from "./Projects";
import Contact from "./Contact";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return(
        <div data-aos="fade-right" data-aos-easing="ease" data-aos-duration="400" className=" overflow-x-hidden">
            <div className=" min-h-screen flex flex-col justify-center items-center gap-20 px-8">
                <h1 className="text-white text-6xl flex flex-col lg:flex-row justify-center items-center gap-4 text-center">
                    Nitish Pandey <span className=" text-clrAccent">Full Stack Developer</span>
                </h1>
                <NavLink target="_blank" to={"https://drive.google.com/file/d/1-W042oxMnAuC4XyEscKPkpdBKaNAixFy/view?usp=drive_link"}>
                    <button className="px-6 py-2 rounded-lg border border-clrAccent text-white font-bold text-normal 
                    hover:bg-clrAccent transition-all duration-200">
                        Read the CV
                    </button>
                </NavLink>
                <div className="md:flex justify-center gap-20 text-white text-5xl hidden">
                    <NavLink to={"https://github.com/pandeyjii11"}>
                        <AiOutlineGithub className=" hover:text-clrAccent transition-all duration-200"/>
                    </NavLink>

                    <NavLink to={"https://www.linkedin.com/in/nitish-pandey-474442201/"}>
                        <AiFillLinkedin className=" hover:text-clrAccent transition-all duration-200"/>
                    </NavLink>

                    <NavLink to={"https://twitter.com/pandeynitish341"}>
                        <AiOutlineTwitter className=" hover:text-clrAccent transition-all duration-200"/>
                    </NavLink>
                </div>
            </div>

            <About />

            <Project />

            <Contact />
        </div>
    );
}

export default Home;