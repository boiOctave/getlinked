"use client";


import { motion } from "framer-motion";

import { Headings, Button, TypingText, HeroMobile } from "@/components";
import "./Hero.css";
import { glowariants, slideIn, staggerContainer, starVariants, textVariant, zoomIn } from "@/utils/Constants";


const Hero = () => {
  return (
    <>
    <section className="hero section " id="hero">
      <motion.div className="heroSlogan"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.02 }}
      >

        <TypingText

          title='Igniting a Revolution in HR Innovation'
        />
        <motion.img className="pinkstroke" src="/pinkstroke.svg" alt="sroke"
          variants={slideIn('right', 'spring', 4, 1)}
        />
      </motion.div>
      <motion.div className="hero-content mycontainer myflex"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}

      >
        <div className="hero__left">
          <motion.div className="getLinked"
            variants={textVariant(0.3)}
          >
            <Headings isHero title="getlinked Tech" className="topHeading" />

            <motion.img src="/bulb.svg" alt="bulb"
              animate={{ y: 15 }}
              transition={{ ease: "linear", duration: 0.0000000000000002, repeat: Infinity, type: "spring", stiffness: 1000, repeatDelay: 9 }}
              className='upDown'
            />
          </motion.div>
          <motion.div className="hackaton"
            variants={textVariant(0.4)}
          >
            <Headings
              isLogo
              title="Hackathon"
              spanText={` 1.0`}
              className="downHeading"
            />
            <img src="/chains.svg" alt="chaiins" />
          </motion.div>
          <motion.p

            variants={slideIn('left', 'tween', 1, 1)}
          >
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </motion.p>
          <motion.div
            variants={slideIn('left', 'tween', 1.2, 1)}

          >
            <Button type="submit" title="Register" className="button gradient1" />
          </motion.div>


          <motion.div className="countdown"

            variants={zoomIn(1.3, 1)}
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
        <motion.div className="stars"

          initial="closed"
          animate="open"
          exit="exit"
          variants={starVariants}

        >

          <motion.img src="/star1.svg" alt="stars" variants={glowariants} transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 0.9, type: 'tween' }} />
          <motion.img src="/star2.svg" alt="stars" variants={glowariants} transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 0.7, type: 'tween' }} />
          <motion.img src="/star2.svg" alt="stars" variants={glowariants} transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 0.3, type: 'tween' }} />
        </motion.div>

        <motion.div className="hero__Right"

          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <img src='/metrix 1.webp' alt='metrix'
  className="rotate"
          />
          <motion.img src='/man-wearing-smart-glasses-touching-virtual-screen 1.svg' alt='man' className='rightMan'
            variants={slideIn('right', 'tween', 0.02, 1)}
          />

          <motion.img src='/globe.svg' alt='globe' className='globe  '
            variants={slideIn('right', 'tween', 0.02, 1)}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, type: 'tween', duration: 100 }}

          />
          <div className="dashedline">

          </div>
        </motion.div>
      </motion.div>
    </section>
    <HeroMobile/>
    </>
  );
};

export default Hero;
