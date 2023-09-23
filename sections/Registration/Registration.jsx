'use client'

import { motion } from "framer-motion";

import { Button, Form, Headings } from "@/components";
import "./Registration.css";
import { staggerContainer, zoomIn } from "@/utils/Constants";
import { useState } from "react";
import axios from "axios";

const Registration = () => {
    // const [team, setTeam] = useState('')
    // const [email, setEmail] = useState('')
    // const [category, setCategory] = useState(0)
    // const [topic, setTopic] = useState('')
    // const [groupSize, setGroupSize] = useState(0)
    // const [phone, setPhone] = useState('')
    // const [privacy, setPriivacy] = useState(false)

    const [fdata, setFdata] = useState({
        email: "",
        phone_number: "",
        team_name: "",
        group_size: 0,
        project_topic: "",
        category: 0,
        privacy_poclicy_accepted: true
    })






    let handleSubmit = async (e) => {
        e.preventDefault();

        console.log(fdata);
        // POST request using fetch with async/await
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: fdata.email,
                phone_number: fdata.phone_number,
                team_name: fdata.team_name,
                group_size: fdata.group_size,
                project_topic: fdata.project_topic,
                category: fdata.category,
                privacy_poclicy_accepted: fdata.privacy_poclicy_accepted,
            })
        };
        const response = await axios('https://backend.getlinked.ai/hackathon/registration', requestOptions);
        const data = await response.json();

    }

    // let handleSubmit = async (e) => {


    //     console.log(team);
    //     try {
    //         let res = await fetch("https://backend.getlinked.ai/hackathon/registration", {
    //             method: "POST",
    //             body: JSON.stringify({

    //             }),
    //         });
    //         let resJson = await res.json();
    //         if (res.status === 201) {
    //             setTeam("")
    //             setEmail("")
    //             setCategory(0)
    //             setTopic("")
    //             setGroupSize(0)
    //             setPhone("")
    //             setPriivacy(false)

    //         }
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };


    return (
        <section className="register section " id="registrate">
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
                    <img src="/sittingMan.svg" alt="idea" className="ideamage" />

                    <img src="/starrules1.svg" alt="star" className="starrules1 star2" />
                </motion.div>
                <motion.div className="criteriaRight formBody"
                    variants={zoomIn(0.7, 1)}
                >
                    <Headings
                        title=""

                        spanText="Register"
                    />
                    <div className="movement myflex">
                        <p>
                            Be part of this movement!
                        </p>
                        <img src="/movement.svg" alt="moves" />
                    </div>

                    <h1 className="createaccountt">
                        CREATE YOUR ACCOUNT
                    </h1>
                    <form className="registerForm" onSubmit={handleSubmit}>
                        <div className="haform">
                            <div className="team">
                                <p>Team's Name</p>
                                <div className="group">
                                    <input type="text" id="group" placeholder="Enter the name of your group" onChange={(e) => setFdata({ ...fdata, team_name: e.target.value })} />
                                </div>
                            </div>
                            <div className="phonNum">
                                <p>Phone</p>
                                <div className="group">
                                    <input type="text" id="number" placeholder="Enter Your Phone Number" onChange={(e) => setFdata({ ...fdata, phone_number: e.target.value })} />
                                </div>
                            </div>
                        </div>
                        <div className="haform">
                            <div className="emailbdy">
                                <p>Email</p>
                                <div className="email">
                                    <input type="text" id="email" placeholder="Enter your email address" onChange={(e) => setFdata({ ...fdata, email: e.target.value })} />
                                </div>
                            </div>
                            <div className="projectTopc">
                                <p>Project Topic</p>
                                <div className="groupInput">
                                    <input type="text" id="project" placeholder="What is your project topic" onChange={(e) => setFdata({ ...fdata, project_topic: e.target.value })} />
                                </div>
                            </div>
                        </div>
                        <div className="haform">
                            <div className="selectContainer">
                                <p>Category</p>
                                <div className="categorybody">
                                    <select className="selectopts" id="category" onChange={(e) => setFdata({ ...fdata, category: 1 })} value={1}>
                                        <option className='select_option' value="">Select Your Category</option>
                                        <option className='select_option' value={1}>First</option>
                                        <option className='select_option' value={2}>Second Your Category</option>
                                        <option className='select_option' value={3}>Third Your Category</option>
                                    </select>
                                </div>
                            </div>
                            <div className="selectContainer">
                                <p>Group Size</p>
                                <div className="grpSizebdy">
                                    <select className="selectopts" id="grpsize" onChange={(e) => setFdata({ ...fdata, group_size: 2 })}  >
                                        <option className='select_option' value="">Select Your Category</option>
                                        <option className='select_option' value={1}>First</option>
                                        <option className='select_option' value={2}>Second Your Category</option>
                                        <option className='select_option' value={3}>Third Your Category</option>
                                    </select>
                                </div>
                            </div>


                        </div>

                        <span className="alert">
                            Please review your registration details before submitting
                        </span>
                        <div className="checkbox">

                            <input type="checkbox" id='privacy' name="priivate" value={true} onChange={(e) => setFdata({ ...fdata, privacy_poclicy_accepted: true })} />
                            <label htmlFor="privacy"> I agreed with the event terms and conditions  and privacy policy</label>
                        </div>

                        <Button

                            title='Register Now'
                            type='submit'
                            className='gradient1 button registerBtn'
                        />
                    </form>


                    <img src="/starrules2.png" alt="star" className="starrules2 star" />
                    <img src="/starrules2.png" alt="star" className="starrules3 star" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Registration;
