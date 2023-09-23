'use client'
import { Headings } from "@/components"

import { motion } from "framer-motion";

import './Sponsors.css';
import { staggerContainer } from "@/utils/Constants";


import { TypingPara } from "@/components/CustomTexts"
import { TimelineMobile } from "@/components";


const Sponsors = () => {
    return (
        <section className="sponsors section " id="sponsors">
            <motion.div className="sponsors-content mycontainer myflex"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.02 }}
            >

                <Headings

                    title='Patners and Sponsors'
                />

                <p>
                    Getlinked Hackathon 1.0 is honored to have the following major
                    companies as its partners and sponsors
                </p>


                <img src="/sponsors.svg" alt="sponsors" />
            </motion.div>

            

        </section>
    )
}

export default Sponsors