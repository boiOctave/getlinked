'use client'

import { motion } from "framer-motion";

import { Button, Headings } from "@/components";
import "./Criteria.css";
import { staggerContainer, zoomIn } from "@/utils/Constants";

const Criteria = () => {
    return (
        <section className="criteria section " id="criteria">
            <motion.div className="criteria-content mycontainer myflex"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.02 }}
            >
                <div className="cut">

                </div>
                <motion.div className="criteriaLeft"
                    variants={zoomIn(0.5, 1)}

                >
                    <img src="/criteria.svg" alt="idea" className="ideamage" />

                    <img src="/starrules1.svg" alt="star" className="starrules1 star2" />
                </motion.div>
                <motion.div className="criteriaRight"
                    variants={zoomIn(0.7, 1)}
                >
                    <Headings
                        title="Judging Criteria
                        "
                        spanText="Key attributes"
                    />
                    <div className="attributes">
                        <div className="single__attribute">

                            <p>
                                <span>
                                    Functionality:
                                </span>  Assess how well the solution works. Does it perform its
                                intended functions effectively and without major issues? Judges would
                                consider the completeness and robustness of the solution.
                            </p>
                        </div>
                        <div className="single__attribute">

                            <p>
                                <span>
                                    Impact and Relevance:
                                </span>  Determine the potential impact of the solution
                                in the real world. Does it address a significant problem, and is it relevant
                                to the target audience? Judges would assess the potential social,
                                economic, or environmental benefits.
                            </p>
                        </div>
                        <div className="single__attribute">

                            <p>
                                <span>
                                    Technical Complexity:
                                </span>
                                Evaluate the technical sophistication of the solution.
                                Judges would consider the complexity of the code, the use of advanced
                                technologies or algorithms, and the scalability of the solution. </p>
                        </div>
                        <div className="single__attribute">

                            <p>
                                <span>
                                    Adherence to Hackathon Rules:
                                </span>
                                Judges will Ensure that the team adhered
                                to the rules and guidelines of the hackathon, including deadlines, use of
                                specific technologies or APIs, and any other competition-specific requirements.  </p>
                        </div>
                        <div className="single__attribute">

                            <p>
                                <span>
                                    Innovation and Creativity:
                                </span>
                                Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.
                            </p>
                        </div>

                        <Button
                            type='submit'
                            title="Read More" className="button gradient1 attriibuteBtn"

                        />
                    </div>
                    <img src="/starrules2.png" alt="star" className="starrules2 star" />
                    <img src="/starrules2.png" alt="star" className="starrules3 star" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Criteria;
