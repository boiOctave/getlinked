'use client'

import { motion } from "framer-motion";

import "./Timeline.css";
import { itemVariants, sideVariants, slideIn, staggerContainer, zoomIn } from "@/utils/Constants";


import { TypingPara } from "@/components/CustomTexts"
import { TimelineMobile } from "@/components";

const Timeline = () => {
    return (
        <section className="timeline section " id="timeline">
            <motion.div className="timeline-content mycontainer myflex"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.02 }}
            >
                <motion.div className="timeline__heading"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.02 }}
                >
                    <TypingPara
                        title='Timeline'
                    />
                    <p className="timelineText">
                        Here is the breakdown of the time we anticipate <br />
                        using for the upcoming event.
                    </p>
                </motion.div>
                <motion.div className="timelineBox"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.02 }}
                >
                    <motion.div className="leftTimeline"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.02 }}
                    >
                        <motion.div     variants={slideIn('left', 'spring', 0.2, 1)} className="leftTimeline__single firstannounce">
                            <h3>
                                Hackathon Announcement
                            </h3>

                            <p>
                                The getlinked tech hackathon 1.0 is formally announced
                                to the general public and teams begin to get ready to register
                            </p>
                        </motion.div>
                        <motion.div   variants={slideIn('left', 'spring', 0.5, 1)} className="leftTimeline__single firstLeftDate">
                            <h3>
                                November 18, 2023
                            </h3>

                        </motion.div>
                        <motion.div   variants={slideIn('left', 'spring', 0.9, 1)} className="leftTimeline__single">
                            <h3>
                                Teams Registration ends
                            </h3>

                            <p>
                                Interested Participants are no longer Allowed to
                                register
                            </p>
                        </motion.div>
                        <motion.div  variants={slideIn('left', 'spring',1, 1)}className="leftTimeline__single fourthDate">
                            <h3>
                                November 18, 2023
                            </h3>

                        </motion.div>
                        <motion.div variants={slideIn('left', 'spring',1.3, 1)} className="leftTimeline__single long">
                            <h3>
                                Getlinked Hackathon 1.0 Offically Begins
                            </h3>

                            <p>
                                Accepted teams can now proceed to build their
                                ground breaking skill driven solutions
                            </p>
                        </motion.div>
                        <motion.div variants={slideIn('left', 'spring',1.4, 1)} className="leftTimeline__single fifthDate">
                            <h3>
                                November 18, 2023
                            </h3>

                        </motion.div>
                    </motion.div>
                    <div className="timelineNumber">
                        <motion.div variants={slideIn('down', 'spring', 0.2, 1)} className="numberSingle">

                            <span>
                                1
                            </span>
                            <div className="stroktLine">

                            </div>
                        </motion.div>
                        <motion.div variants={slideIn('down', 'spring', 0.4, 1)} className="numberSingle">

                            <span>
                                2
                            </span>
                            <div className="stroktLine2">

                            </div>
                        </motion.div>
                        <motion.div variants={slideIn('down', 'spring', 0.7, 1)} className="numberSingle">

                            <span>
                                3
                            </span>
                            <div className="stroktLine2">

                            </div>
                        </motion.div>
                        <motion.div variants={slideIn('down', 'spring', 0.9, 1)} className="numberSingle four">

                            <span>
                                4
                            </span>
                            <div className="stroktLine2">

                            </div>
                        </motion.div>
                        <motion.div variants={slideIn('down', 'spring',1.2, 1)} className="numberSingle five">

                            <span>
                                5
                            </span>
                            <div className="stroktLine">

                            </div>
                        </motion.div>
                        <motion.div variants={slideIn('down', 'spring', 1.5, 1)} className="numberSingle">

                            <span>
                                6
                            </span>
                            <div className="stroktLine2">

                            </div>
                        </motion.div>
                    </div>
                    <div className="leftTimeline2">
                        <motion.div variants={slideIn('right', 'spring', 0.4, 1)}  className="leftTimeline__single2">
                            <h3>
                                November 18, 2023
                            </h3>


                        </motion.div>
                        <motion.div variants={slideIn('right', 'spring', 0.7, 1)} className="leftTimeline__single2 teams">
                            <h3>
                                Teams Registration begins
                            </h3>

                            <p>
                                Interested teams can now show their interest in the
                                getlinked tech hackathon 1.0 2023 by proceeding to register
                            </p>
                        </motion.div>
                        <motion.div variants={slideIn('right', 'spring', 0.9, 1)} className="leftTimeline__single2 thirdDate">
                            <h3>
                                November 18, 2023
                            </h3>

                        </motion.div>
                        <motion.div variants={slideIn('right', 'spring', 1.3, 1)} className="leftTimeline__single2 announce">
                            <h3 >
                                Announcement of the accepted teams
                                and ideas
                            </h3>

                            <p>
                                All teams whom idea has been accepted into getlinked tech<br />
                                hackathon 1.0 2023 are formally announced
                            </p>
                        </motion.div>
                        <motion.div variants={slideIn('right', 'spring', 1.5, 1)} className="leftTimeline__single2 lastRightDate">
                            <h3>
                                November 18, 2023
                            </h3>

                        </motion.div>
                        <motion.div variants={slideIn('right', 'spring',1.8, 1)} className="leftTimeline__single2 demoDay">
                            <h3 >
                                Demo Day
                            </h3>

                            <p>
                                Teams get the opportunity to pitch their projects to judges.<br />
                                The winner of the hackathon will also be announced on
                                this day
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
                <TimelineMobile/>
            </motion.div>
        </section>
    )
}

export default Timeline