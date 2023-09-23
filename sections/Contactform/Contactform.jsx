'use client'

import { motion } from "framer-motion";

import "./Contactform.css";
import { slideIn, staggerContainer, zoomIn } from "@/utils/Constants";
import { Form, Headings } from "@/components";


const Contactform = () => {
    return (
        <section className="contact section " id="contact">
            <div className="contact-content mycontainer"
            >

                <motion.div className="contactLeft"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.02 }}

                >

<img src="/const1.svg" alt="star" className="starintro1 star2" />

                    <Headings
                        title=''
                        spanText='Get in touch'
                    />
                    <p>
                        Contact
                        Information
                    </p>
                    <p>
                        27,Alara Street
                        Yaba 100012
                        Lagos State
                    </p>
                    <p>Call Us : 07067981819</p>

                    <p>we are open from Monday-Friday
                        08:00am - 05:00pm</p>

                    <span className="shareText">
                        Share on
                    </span>
                    <div className="share__icons">
                        <img src="/mdi_instagram.svg" alt="ig" className="ig" />
                        <img src="/Vector.svg" alt="x" className="x_app" />
                        <img src="/fb.svg" alt="ig" className="fb" />
                        <img src="/ri_linkedin-fill.svg" alt="ri_linkedin-fill" className="liinkde" />

                    </div>



                </motion.div>

                <div className="contactForm">
                    <Form
                        buttonName='Submit'
                        headingtop={`Questions or need assistance?`}
                        headingspan={` Let us know  about it!`}

                    />
                </div>
            </div>
        </section>
    )
}

export default Contactform