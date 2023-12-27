import React, { useState, useEffect } from "react";
import profile from "../Assets/Profile.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

    const [readMore, setReadMore] = useState(false);

    useEffect(() => {
        AOS.init();
    }, []);


    return(
        <div className="w-[75%] md:w-[85%] mx-auto my-20 overflow-x-hidden">
            <h2 className="text-white font-bold text-4xl pb-14">
                About
            </h2>
            <div className="flex flex-col-reverse md:flex-row gap-20 justify-between items-center md:items-start max-h-fit">
                <div data-aos="fade-right" data-aos-easing="ease" data-aos-duration="800" className="md:w-[45%] h-[100%]">
                    <p className="text-white text-center md:text-left leading-10">
                        Hello there, I'm Nitish Kumar Pandey, an enthusiastic undergraduate student pursuing a 
                        degree in Computer Science and Engineering. As a budding technologist, I'm deeply 
                        intrigued by the possibilities that technology offers and the impact it can make 
                        on our world.
                    </p>
                    {
                        readMore && (
                            <p className="text-white text-center md:text-left leading-10">
                                I'm currently in the process of building a strong foundation in computer science, 
                                honing my skills in coding, algorithms, and software development. My academic 
                                journey has introduced me to a myriad of languages, from Python to Java, and 
                                allowed me to delve into fascinating topics like data structures, machine learning, 
                                and computer architecture.

                                <br />

                                My passion for this field extends beyond the classroom. I've eagerly embarked on 
                                personal projects and hackathons, where I've applied my knowledge to create practical 
                                solutions and gain real-world experience. I'm particularly excited about the potential
                                of emerging technologies like AI and blockchain to transform industries and enhance 
                                our daily lives.

                                <br />

                                While I'm still on my learning path, I'm eager to explore internships and collaborative 
                                opportunities that allow me to apply my skills and continue to grow. I'm excited 
                                about the prospect of contributing to innovative projects that bridge the gap between 
                                theory and practice.

                                If you're interested in connecting with a motivated computer science and engineering
                                student who's eager to take on challenges and learn from every experience, please 
                                feel free to reach out. I'm always open to new ideas and opportunities to expand my 
                                horizons in this ever-evolving field. Let's explore the possibilities together
                            </p>
                        )
                    }
                    <div
                    className=" text-clrAccent underline text-center md:text-left pt-6 cursor-pointer"
                    onClick={() => setReadMore(prev => !prev)}>
                        {
                            readMore? "Read Less" : "Read More"
                        }
                    </div>
                </div>

                <div data-aos="fade-left" data-aos-easing="ease" data-aos-duration="800" className="md:w-[45%]">
                    <div className="md:h-[600px]">
                        <img src={profile} alt="Profile" className=" w-full h-full object-cover grayscale hover:grayscale-0 
                        transition-all duration-200 aspect-square rounded-xl"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;