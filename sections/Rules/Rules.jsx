'use client'

import { motion } from "framer-motion";

import { Headings } from "@/components";
import "./Rules.css";
import { slideIn, staggerContainer, zoomIn } from "@/utils/Constants";

const Rules = () => {
    return (
        <section className="rules section " id="rules">
            <div className="rules-content mycontainer myflex"
            >
                <div className="cut">

                </div>
                <motion.div className="rulesLeft"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.02 }}

                >
                    <motion.img src="/3dlady.svg" alt="idea" className="ideamage"
                        variants={zoomIn(0.5, 1)}
                    />

                    <img src="/starrules1.svg" alt="star" className="starrules1 star2" />
                </motion.div>
                <motion.div className="rulesRight"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.02 }}

                >
                    <motion.div
                        variants={slideIn('left', 'tween', 1.2, 1)}
                    >

                        <Headings
                            title="Rules and
                        Guidelines"
                            spanText="tech Hackathon 1.0"
                        />
                    </motion.div>
                    <motion.p
                        variants={zoomIn(0.7, 1)}

                    >
                        Our tech hackathon is a melting pot of visionaries, and its purpose
                        is as clear as day: to shape the future. Whether you're a coding
                        genius, a design maverick, or a concept wizard, you'll have the
                        chance to transform your ideas into reality. Solving real-world
                        problems, pushing the boundaries of technology, and creating
                        solutions that can change the world, <br />that's what we're all about!
                    </motion.p>
                    <img src="/starrules2.png" alt="star" className="starrules2 star" />
                    <img src="/starrules2.png" alt="star" className="starrules3 star" />
                </motion.div>
            </div>
        </section>
    );
};

export default Rules;
