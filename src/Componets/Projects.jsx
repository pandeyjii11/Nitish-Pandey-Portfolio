import React, { useState, useEffect } from "react";
import { projectData } from "../Data/project-data";
import { NavLink } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import weather from "../Assets/weatherAppThumbnail.png";
import password from "../Assets/passwordGeneratorThumbnail.png";
import samplePortfolio from "../Assets/samplePortfolioThumbnail.png";
import ticTacToe from "../Assets/ticTacToeThumbnail.png";
import imageGallery from "../Assets/imageGalleryThumbnail.png";
import parallex from "../Assets/parallexEffectThumbnail.png";
import blogWeb from "../Assets/blogWebsiteThumbnail.png";
import shopApp from "../Assets/shopappThumbnail.png";
import topCourses from "../Assets/topCoursesThumbnail.png";
import tourism from "../Assets/tourismPlanThumbail.png";
import testimonial from "../Assets/testimonialSliderThumbnail.png";
import gifs from "../Assets/randomGIFsThumbnail.png";
import reporter from "../Assets/reportersApiDocs.png";
import chatApp from  "../Assets/chatAppThumbnail.png";
import studyNotion from "../Assets/studyNotionThumbnail.png";
import razorpay from "../Assets/razorpayThumbnail.png";
import discord from "../Assets/discordThumbnail.png";

const icons = {
    "weather": weather,
    "password": password,
    "samplePortfolio": samplePortfolio,
    "ticTacToe": ticTacToe,
    "imageGallery": imageGallery,
    "parallex": parallex,
    "blogWeb": blogWeb,
    "shopApp": shopApp,
    "topCourses": topCourses,
    "tourism": tourism,
    "testimonial": testimonial,
    "gifs": gifs,
    "reporter": reporter,
    "chatApp": chatApp,
    "studyNotion": studyNotion,
    "razorpay": razorpay,
    "discord": discord,
};

const Project = () => {

    // console.log(projectData);

    const tabs = [
        "JavaScript",  
        "React", 
        "Node", 
        "FullStack", 
        "Tailwind CSS"
    ];

    const [currentTab, setCurrentTab] = useState(tabs[0]);
    const [project, setProject] = useState(projectData[0].projects);

    const setTab = (value) => {
        setCurrentTab(value);
        const res = projectData.filter((data) => data.tag === value);
        setProject(res[0].projects);
    }

    useEffect(() => {
        AOS.init();
        window.addEventListener('scroll', AOS.refresh);
        window.addEventListener('load', AOS.refresh);
    }, [currentTab, project]);

    return(
        <div className="w-[75%] md:w-[85%] mx-auto my-28 overflow-x-hidden">
            <h2 className="text-white font-bold text-4xl pb-14">
                Projects
            </h2>

            <div className="flex lg:flex-nowrap flex-col lg:flex-row lg:gap-32">
                <div data-aos="fade-right" data-aos-easing="ease" data-aos-duration="800" className="flex flex-wrap justify-between lg:flex-col lg:justify-normal gap-x-6 gap-y-2 lg:gap-6">
                    {
                        tabs.map((tab, index) => (
                            <div 
                                key={index}
                                onClick={() => setTab(tab)}
                                className={`${currentTab === tab ? " bg-clrAccent" : " bg-opacity-0" }
                                text-white text-xl px-2 py-2 lg:px-4 lg:py-2 rounded-lg cursor-pointer hover:bg-clrAccent transition-all duration-200
                                `}
                            >
                                {tab}
                            </div>
                        ))
                    }
                </div>

                <div data-aos="fade-left" data-aos-easing="ease" data-aos-duration="800" className="grid lg:grid-cols-2 mt-10 lg:mt-0 gap-8 lg:gap-14">
                    {
                        project.map((project, index) => (
                            <NavLink to={project.to} key={index}>
                                <div
                                    className=" flex flex-col gap-3"
                                >
                                    <div className="relative">
                                        <img src={icons[project.imageUrl]} alt="thumbnail" 
                                        className="w-full h-full object-cover rounded-xl hover:opacity-60 transition-all duration-200"
                                        />
                                    </div>
                                    <h3 className=" text-clrAccent text-2xl">
                                        {project.heading}
                                    </h3>
                                    <p className="text-white opacity-75 text-base">
                                        {project.subHeadng}
                                    </p>
                                </div>
                            </NavLink>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Project;