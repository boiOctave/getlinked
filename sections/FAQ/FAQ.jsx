'use client'

import { motion } from "framer-motion";

import {  Headings } from "@/components";
import "./FAQ.css";
import { staggerContainer, zoomIn } from "@/utils/Constants";

const FAQ = () => {
    return (
        <section className="faq section " id="faq">
            <motion.div className="faq-content mycontainer myflex"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.02 }}
            >
                <div className="cut">

                </div>
                <motion.div className="faqLeft"
                    variants={zoomIn(0.5, 1)}

                >
                    <img src="/faq.svg" alt="idea" className="ideamage" />

                    <img src="/starrules1.svg" alt="star" className="starrules1 star2" />
                </motion.div>
                <motion.div className="faqRight"
                    variants={zoomIn(0.7, 1)}
                >
                    <Headings
                        title="Frequently Ask
                        
                        "
                        spanText="Question"
                    />
                    <p>
                        We got answers to the questions that you might
                        want to ask about getlinked Hackathon 1.0
                    </p>
                    <div className="attributes">
                        <div className="faqcon">
                            <div className="singleFaq">

                                <p>
                                    Can I work on a project I started before the hackathon?
                                </p>
                                <span className="more">
                                    +
                                </span>
                            </div>
                            <div className="singleFaq">

                                <p>
                                What happens if I need help during the hackathon?
                                </p>
                                <span className="more">
                                    +
                                </span>
                            </div>
                            <div className="singleFaq">

                                <p>
                                What happens if I don't have an idea for a project?
                                </p>
                                <span className="more">
                                    +
                                </span>
                            </div>
                            <div className="singleFaq">

                                <p>
                                Can I join a team or do I have to come with one?
                                </p>
                                <span className="more">
                                    +
                                </span>
                            </div>
                            <div className="singleFaq">

                                <p>
                                What happens after the hackathon ends
                                </p>
                                <span className="more">
                                    +
                                </span>
                            </div>
                            <div className="singleFaq">

                                <p>
                                Can I work on a project I started before the hackathon?
                                </p>
                                <span className="more">
                                    +
                                </span>
                            </div>
                        </div>
                        <div className="single__attribute">


                        </div>

                   
                    </div>
                    <img src="/starrules2.png" alt="star" className="starrules2 star" />
                    <img src="/starrules2.png" alt="star" className="starrules3 star" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default FAQ;
