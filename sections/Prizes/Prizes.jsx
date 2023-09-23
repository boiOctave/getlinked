'use client'

import { motion } from "framer-motion";

import "./Prizes.css";
import { slideIn, staggerContainer, zoomIn } from "@/utils/Constants";
import { Headings } from "@/components";


const Prizes = () => {
    return (
        <section className="prizes section " id="prizes">
            <div className="rewadscon prizes-content mycontainer ">

                     <div className="rewardsHeadiing">
                <Headings

title='Prizes and'
spanText='Rewards'
/>
<p>
Highlight of the prizes or rewards for winners and
for participants.

</p>
                </div>

            <motion.div className="myflex rewarders"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.02 }}
            >
      
                <motion.div className="prizesLeft"
                    variants={zoomIn(0.5, 1)}

                >
                    <div className="upDown"> <img src="/trophy.svg" alt="trophy"/></div>
                   
                </motion.div>
                <motion.div className="prizesRight"
                    variants={zoomIn(0.5, 1)}

                >
                    <div className="trophyText">
{/* 
                    <Headings

                        title='Prizes and'
                        spanText='Rewards'
                    />
                    <p>
                        Highlight of the prizes or rewards for winners and
                        for participants.

                    </p> */}
                    </div>

                    <div className="trophymedals myflex">
                        <motion.div className="medalss myflex"
                        
                        variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.02 }}
                        >

                            <motion.img src="/2nd position.svg" alt="trophy"  className="secondplace"  variants={slideIn('right', 'spring', 0.5, 1)}/>
                            <motion.img src="/1st position.svg" alt="trophy" className="winner"  variants={slideIn('right', 'spring', 1, 1)}/>
                            <motion.img src="/3rd position.svg" alt="trophy" className='thirdplace'  variants={slideIn('right', 'spring', 1.2, 1)} />
                        </motion.div>

                    </div>
                </motion.div>


            </motion.div>
            </div>
        </section>
    )
}

export default Prizes