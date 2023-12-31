import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import {BsGithub, BsLinkedin, BsTwitter} from "react-icons/bs";
import { NavLink } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {

    const form = useRef();

    const sendEmail = (event) => {
        event.preventDefault();

        emailjs.sendForm("service_44bulbp", "template_mwze35r", form.current, "VqP9biWIYm5nKbvxI").then((result) => {
            toast.success("Message Sent");
            event.target.reset();
        }, (error) => {
            toast.error("Message Sent Failed Try Again");
            console.log(error);
        });
    }

    useEffect(() => {
        window.addEventListener('load', AOS.refresh);
        window.addEventListener('scroll', AOS.refresh);
        AOS.init();
    }, []);


    return(
        <div className=" overflow-x-hidden">
            <div className="w-[75%] md:w-[85%] mx-auto my-44">
                <h2 className="text-white font-bold text-4xl pb-14">
                    Contact / <span className="underline">Hire Me</span>
                </h2>
                
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="flex flex-col w-full lg:w-[40%]">
                        <form  data-aos="fade-left" data-aos-easing="ease" data-aos-duration="800" ref={form} onSubmit={sendEmail}
                        className="flex flex-col justify-between items-center gap-6 w-full"
                        >
                            <input type="text" name="user_name" placeholder="Name"
                            className="w-full px-4 py-2 rounded-md focus:outline-none focus:border-clrAccent 
                            focus:ring-clrAccent focus:ring-1"
                            />

                            <input type="email" name="user_email" placeholder="Email"
                            className="w-full px-4 py-2 rounded-md focus:outline-none focus:border-clrAccent 
                            focus:ring-clrAccent focus:ring-1"
                            />

                            <textarea name="message" placeholder="Message"
                            className="w-full px-4 py-2 rounded-md focus:outline-none focus:border-clrAccent 
                            focus:ring-clrAccent focus:ring-1 h-[140px]"
                            />

                            <button type="submit" value="Send"
                            className="w-full border-clrAccent border py-2 rounded-md text-clrAccent font-semibold
                             hover:bg-clrAccent hover:text-white cursor-pointer transition-all ease-in-out duration-200"
                            >
                                SEND
                            </button>
                        </form>
                    </div>

                    <div  data-aos="fade-right" data-aos-easing="ease" data-aos-duration="800" className="text-white flex flex-col justify-center items-center gap-10 lg:w-[50%]">
                        <p className="text-white">
                            Or you can follow me on
                        </p>

                        <div className="text-white text-4xl flex flex-row gap-20">
                            <NavLink to={"https://github.com/pandeyjii11"}>
                                <BsGithub  className=" hover:text-clrAccent transition-all duration-200"/>
                            </NavLink>
                            
                            <NavLink to={"https://www.linkedin.com/in/nitish-pandey-474442201/"}>
                                <BsLinkedin  className=" hover:text-clrAccent transition-all duration-200"/>
                            </NavLink>
                            
                            <NavLink to={"https://twitter.com/pandeynitish341"}>
                                <BsTwitter  className=" hover:text-clrAccent transition-all duration-200"/>
                            </NavLink>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;