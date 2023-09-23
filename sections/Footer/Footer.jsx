'use client'

import { motion } from "framer-motion";

import { Headings } from "@/components";
import "./Footer.css";
import { slideIn, staggerContainer } from "@/utils/Constants";



const Footer = () => {
    return (
        <section className="footer section " id="footer">
            <motion.div className="footer-content mycontainer "
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.02 }}
            >
                <div className="footerLeft">
                    <a href="#" className="flexG FooterLogo">
                        <Headings isLogo title="get" spanText="linked" className="logo" />
                    </a>
                    <p >
                        Getlinked Tech Hackathon is a technology innovation program
                        established by a group of organizations with the aim of showcasing
                        young and talented individuals in the field of technology
                    </p>
                    <div className="tou myflex">
                        <span >
                            Terms of
                            Use
                        </span>
                        <span className="PrivacyPol" >
                            Privacy Policy
                        </span>
                    </div>
                </div>

                <div className="FooterMiddle">
                    <div className="middlelinks myflex">
                        <p className="middletitle">
                            Useful Links
                        </p>
                        <a href="#" >
                            Overview
                        </a>
                        <a href="#" >
                            Timeline
                        </a>
                        <a href="#" >
                            FAQs
                        </a>
                        <a href="#" >
                            Register
                        </a>
                        <div className="middleGrid">
                            <span>
                                Follow us
                            </span>
                            <img src="/mdi_instagram.svg" alt="ig" className="ig" />
                            <img src="/Vector.svg" alt="x" className="x_app"/>
                            <img src="/fb.svg" alt="ig" className="fb" />
                            <img src="/ri_linkedin-fill.svg" alt="ri_linkedin-fill" className="liinkde" />
                        </div>
                    </div>
                </div>
                    <div className="endlinks myflex">
                        <p>Contact Us</p>
                        <div className="rightGrid">
                            <div className="phonein">

                            <img src="/phone.svg" alt="call" />
                            </div>
                            <span className="numba">
                                +234 679 81819
                            </span>

                        </div>
                        <div className="rightGrid">
                            <img src="/locate.svg" alt="pin" className="pin" />
                            <span className="locate">
                                27,Alara Street
                                Yaba 100012
                                Lagos State
                            </span>

                        </div>
                    </div>
                    <div className="copyright">
                        <p>
                        All rights reserved. © getlinked Ltd.
                            </p> 
                    </div>
            </motion.div>
        </section>
    )
}

export default Footer