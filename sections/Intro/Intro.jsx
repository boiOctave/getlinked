'use client'

import { motion } from "framer-motion";

import { Headings } from "@/components";
import "./Intro.css";
import { slideIn, staggerContainer } from "@/utils/Constants";

const Intro = () => {
    return (
        <section className="intro section " id="intro">
            <motion.div className="intro-content mycontainer myflex"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.02 }}
            >
                <div className="cut">

                </div>
                <motion.div className="introLeft"
                  variants={slideIn('left', 'tween',1, 1)}
                
                >
                    <img src="/idea.svg" alt="idea" className="ideamage"/>

                    <img src="/satagra.svg" alt="star" className="starintro1 star2" />
                </motion.div>
                <motion.div className="introRight"
                
                variants={slideIn('right', 'tween', 2, 1)}
                >
                    <Headings
                        title="Introduction to getlinked"
                        spanText="tech Hackathon 1.0"
                    />
                    <p>
                        Our tech hackathon is a melting pot of visionaries, and its purpose
                        is as clear as day: to shape the future. Whether you're a coding
                        genius, a design maverick, or a concept wizard, you'll have the
                        chance to transform your ideas into reality. Solving real-world
                        problems, pushing the boundaries of technology, and creating
                        solutions that can change the world, <br/>that's what we're all about!
                    </p>
                    <img src="/starpu.svg" alt="star" className="starintro2 star" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Intro;
