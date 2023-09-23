'use client'

import { motion } from "framer-motion";

import "./Privacy.css";
import { slideIn, staggerContainer, zoomIn } from "@/utils/Constants";
import { Button, Headings } from "@/components";





const Privacy = () => {
    return (
        <section className="prizes private section " id="prizes">
            <div className="privacyson prizes-content mycontainer ">

                <div className="rewardsHeadiing privacyHead">
                    <Headings

                        title='Privacy Policy and 
                        '
                        spanText='Terms'
                    />
                    <p>
                        Last updated on September 12, 2023

                    </p>
                </div>

                <div className="myflex padlockdi">
                    <div className="prvacytermscom myflex" >
                        <p>
                            Below are our privacy & policy, which outline a lot of goodies.
                            it’s our aim to always take of our participant
                        </p>

                        <div className="ppt myflex">
                            <p className="priivacysummary">
                                At getlinked tech Hackathon 1.0, we value your privacy
                                and are committed to protecting your personal information.
                                This Privacy Policy outlines how we collect, use, disclose,
                                and safeguard your data when you participate in our tech
                                hackathon event. By participating in our event, you consent
                                to the practices described in this policy.
                            </p>

                            <div className="licencsingP myflex">
                                <h4>
                                    Licensing Policy
                                </h4>
                                <h6>
                                    Here are terms of our Standard License:
                                </h6>


                            </div>
                            <div className="checkilst myflex">
                                <div className="singlecheck">
                                    <div className="svgcase">

                                        <img src="/listterms.svg" alt="check" />
                                    </div>
                                    <span>The Standard License grants you a non-exclusive right to
                                        navigate and register for our event</span>
                                </div>
                            </div>
                            <div className="checkilst myflex">
                                <div className="singlecheck">
                                    <img src="/listterms.svg" alt="check" />
                                    <span>You are licensed to use the item available at any free source
                                        sites, for your project developement</span>
                                </div>
                            </div>
                            <Button
                                title='Read More'
                                type='submit'
                                className='gradient1 button '
                            />
                        </div>
                    </div>
                    <div className="ppiImage">
                        <img src="/manonpadlock.svg" alt="masn3d" />

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Privacy