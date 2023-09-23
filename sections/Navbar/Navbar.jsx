"use client";


import { useEffect, useState } from 'react';
import Headings from "@/components/Headings";
import "./Navbar.css";
import Link from "next/link";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import Button from "@/components/Button";




import {
  links,
  navVariants,
  itemVariants,
  sideVariants,
} from "../../utils/Constants";

const Navbar = ({isRegister= false}) => {


  const [isScrolled, setIsScrolled] = useState(false);
  const [windowPosition, setWindowPosition] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setWindowPosition(window.scrollY);
    };
    if (windowPosition >= 40) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, [windowPosition]);


  const [open, cycleOpen] = useCycle(false, true);
  return (
    <header className={`header ${!isRegister && 'divideStroke'} padBtm .zIndex ${isScrolled ? 'inverted' : ''}`}>
      <nav className="myflex mycontainer ">
        <a href="#" className="flexG">
          <Headings isLogo title="get" spanText="linked" className="logo" />
        </a>
        <ul className={`nav-links myflex `}>
          <li className="nav-link">
            <Link href="#timeline">Timeline</Link>
          </li>

          <li className="nav-link">
            <Link href="#prizes">Overview</Link>
          </li>

          <li className="nav-link">
            <a href="#faq">FAQs</a>
          </li>

          <li className={`nav-link ${ isRegister && 'coloredlink'}`}>
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <div className="nav__button-container ">
          <a href="/register">

          <Button
            type="submit"
            className={`button nav__button ${!isRegister ? 'gradient1' : 'gradient2' }`}
            title="Register"
            
          />
          </a>
        </div>
        <AnimatePresence>
          {open && (
            <motion.aside
              className="aside myflex"
              initial="closed"
              animate="open"
              exit="exit"
              whileInView="show"
              variants={navVariants}
            >
              <motion.div
                className="mobiileNav-container myflex "
                initial="closed"
                animate="open"
                exit="exit"
                variants={sideVariants}
              >
                {links.map(({ name, to, id }) => (
                  <motion.a key={id} href={to} variants={itemVariants} >
                    {name}
                  </motion.a>
                ))}
              </motion.div>
              <div className="mobile-nav__button-container ">
                <Button
                  type="submit"
                  className="button nav__button gradient1"
                  title="Register"
                />
              </div>

              <div className="hamburgerClose" onClick={cycleOpen}>
                <img src="/close.svg" alt="close" />
              </div>
            </motion.aside>
          )}
        </AnimatePresence>
        <div className='menuCon'>

          <div className="hamburgerOpen" onClick={cycleOpen}>
            <img src="/menu.svg" alt="open" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
