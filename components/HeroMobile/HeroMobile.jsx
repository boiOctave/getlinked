'use client'

import { motion } from "framer-motion";


import { glowariants, slideIn, staggerContainer, starVariants, textVariant, zoomIn } from "@/utils/Constants";


import './HeroMobile.css'

import { Headings, Button, TypingText } from "@/components";

const HeroMobile = () => {
  return (
    <section className="section " id="heroMobile">
      <motion.div className="heroContent container myflex"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.02 }}
      >
        <div className="heroSlogan">
          <TypingText
            title='Igniting a Revolution in HR Innovation'
          />

          <motion.img className="pinkstroke" src="/pinkstroke.svg" alt="sroke"
            variants={slideIn('right', 'spring', 4, 1)}
          />
        </div>

        <div className="hero__left">
          <motion.div className="getLinked"
            variants={zoomIn(0.3, 1)}
          >
            <Headings isHero title="getlinked Tech" className="topHeading" />

            <img src="/bulb.svg" alt="bulb" className='upDown' />
          </motion.div>
          <motion.div className="hackaton"
            variants={zoomIn(0.6, 1)}
          >
            <Headings
              isLogo
              title="Hackathon"
              spanText={` 1.0`}
              className="downHeading"
            />
            <img src="/chains.svg" alt="chaiins" />
          </motion.div>
          <motion.p className='herotext'

            variants={slideIn('right', 'spring', 4.2, 1)}
          >
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </motion.p>

          <motion.div

            variants={zoomIn(0.9, 1)}
          >

            <Button type="submit" title="Register" className="button gradient1" />
          </motion.div>

          <motion.div className="countdown"
            variants={zoomIn(1.2, 1)}
          >
            <div className="hours">
              <p>
                00<span>H</span>
              </p>
            </div>

            <div className="mins">
              <p>
                00<span>M</span>
              </p>
            </div>

            <div className="secs">
              <p>
                00<span>S</span>
              </p>
            </div>
          </motion.div>
        </div>
        <motion.div className="starsnew"


          initial="closed"
          animate="open"
          exit="exit"
          variants={starVariants}
        >
          <motion.img src="/star1.svg" alt="stars" className="star1" variants={glowariants} transition={{ duration: 0.1, repeat: Infinity, repeatDelay: 0.9 }} />
          <motion.img src="/star2.svg" alt="stars" className="star2" variants={glowariants} transition={{ duration: 0.1, repeat: Infinity, repeatDelay: 0.7 }} />
          <motion.img src="/star2.svg" alt="stars" className="star3" variants={glowariants} transition={{ duration: 0.1, repeat: Infinity, repeatDelay: 2 }} />
        </motion.div>


        <motion.div className="hero__Right"
          variants={zoomIn(3, 1)}>
          <img src='/man-wearing-smart-glasses-touching-virtual-screen 1.svg' alt='man' className='rightMan' />
          <motion.img src='/globe.svg' alt='globe' className='globe'
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, type: 'tween', duration: 300 }}
          />
          <div className="dashedline"></div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroMobile