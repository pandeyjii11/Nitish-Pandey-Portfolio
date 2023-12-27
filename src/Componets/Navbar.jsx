import React, { useState, useEffect } from "react";
import logo from "../Assets/logo.svg"
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import {AiOutlineGithub, AiFillLinkedin, AiOutlineTwitter} from "react-icons/ai";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        AOS.init();
    }, []);

    return(
        <div>
            <div className="bg-[#08131F] opacity-70 hidden md:block">
                <div className=" flex w-[80%] md:w-[85%] mx-auto justify-between items-center pb-6 pt-8">
                    <NavLink to="/">
                        <img src={logo} alt="logo" width={50}/>
                    </NavLink>
                    <div>
                        <div className="text-white flex gap-16">
                            <NavLink to="/">
                                <p className="text-white hover:text-clrAccent transition-all duration-200 font-bold">
                                    Home
                                </p>
                            </NavLink>
                            <NavLink to="/about">
                                <p className="text-white hover:text-clrAccent transition-all duration-200 font-bold">
                                    About
                                </p>
                            </NavLink>
                            <NavLink to="/projects">
                                <p className="text-white hover:text-clrAccent transition-all duration-200 font-bold">
                                    Project
                                </p>
                            </NavLink>
                            <NavLink to="/contact">
                                <p className="text-white hover:text-clrAccent transition-all duration-200 font-bold">
                                    Contact
                                </p>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="fade-left" data-aos-easing="ease" data-aos-duration="800" className="md:hidden">
                <div className="w-[95%] mx-auto pb-6 pt-8 flex justify-between items-center relative">
                    <NavLink to="/">
                        <img src={logo} alt="logo" width={40} />
                    </NavLink>
                    <RxHamburgerMenu className="text-white" fontSize={35} onClick={() => setIsOpen(true)} />
                     
                     {
                        isOpen && (
                            <div className="bg-[#08131F] absolute top-0 left-0 right-0 mt-6 p-4 w-full rounded-md 
                            shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all duration-200 ease-in items-center">
                                <div className="flex justify-between items-center">
                                    <NavLink to="/">
                                        <img src={logo} alt="logo" width={40}/>
                                    </NavLink>
                                    <IoMdClose className=" text-clrAccent" fontSize={35} onClick={() => setIsOpen(false)}/>
                                </div>
                                <div className="mx-auto flex items-center flex-col mt-6 text-white gap-12">
                                    <div className="flex flex-col items-center justify-center gap-3 text-lg font-bold">
                                        <NavLink to="/">
                                            <p>
                                                Home
                                            </p>
                                        </NavLink>
                                        <NavLink to="/about">
                                            <p>
                                                About
                                            </p>
                                        </NavLink>
                                        <NavLink to="/projects">
                                            <p>
                                                Project
                                            </p>
                                        </NavLink>
                                        <NavLink to="/contact">
                                            <p>
                                                Contact
                                            </p>
                                        </NavLink>
                                    </div>
                                    <div className="flex gap-6 mb-2">
                                        <NavLink target="_blank" to={"https://github.com/pandeyjii11"}>
                                            <AiOutlineGithub fontSize={35} className=" hover:text-clrAccent"/>
                                        </NavLink>

                                        <NavLink target="_blank"  to={"https://www.linkedin.com/in/nitish-pandey-474442201/"}>
                                            <AiFillLinkedin fontSize={35} className=" hover:text-clrAccent" />
                                        </NavLink>

                                        <NavLink target="_blank"  to={"https://twitter.com/pandeynitish341"}>
                                            <AiOutlineTwitter fontSize={35} className=" hover:text-clrAccent" />
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        )
                     }
                </div>
            </div>
        </div>
    );
}

export default Navbar;