import { Button, Headings } from ".."
import './Form.css'






const Form = ({ isRegister = false, buttonName, headingtop, headingspan }) => {
    return (<div className="formBody1">

        <img src="/const3.svg" alt="star" className="starintro1 star2" />
        <img src="/const4.svg" alt="star" className="starintro3 star2" />
        {
            isRegister && (
                <>
                <Headings
                    title=''
                    spanText={headingtop}

                />
                <div className="movement myflex">
                    <p>
                    Be part of this movement!
                    </p>
                    <img src="/movement.svg" alt="moves" />
                </div>
               
               <h1>
               CREATE YOUR ACCOUNT
               </h1>

               <form action="" className="form">
                <div className="halfform">
                    <div className="teamBody">
                        <p>Team's Name</p>
                        <div className="groupInput">
                            <input type="text"  id="group" placeholder="Enter the name of your group"/>
                        </div>
                    </div>
                    <div className="phonNum">
                        <p>Phone</p>
                        <div className="groupInput">
                            <input type="number"  id="number" placeholder="Enter Your Phone Number"/>
                        </div>
                    </div>
                </div>
                <div className="halfform">
                    <div className="emailBody">
                        <p>Email</p>
                        <div className="emailInput">
                            <input type="text"  id="email" placeholder="Enter your email address"/>
                        </div>
                    </div>
                    <div className="projectTopc">
                        <p>Project Topic</p>
                        <div className="groupInput">
                            <input type="text"  id="project" placeholder="What is your project topic"/>
                        </div>
                    </div>
                </div>
                <div className="halfform">
                    <div className="selectCon">
                        <p>Category</p>
                        <div className="categoryBody">
                          <select className="selectopts" id="category" >
                                <option class='select_option'  value="">Select Your Category</option>
                                <option class='select_option'  value="1">First</option>
                                <option class='select_option'  value="2">Second Your Category</option>
                                <option class='select_option'  value="3">Third Your Category</option>
                          </select>
                        </div>
                    </div>
                    <div className="selectCon">
                        <p>Group Size</p>
                        <div className="grpSizeBody">
                          <select className="selectopts" id="grpsize"  >
                                <option  class='select_option' value="">Select Your Category</option>
                                <option class='select_option'  value="1">First</option>
                                <option  class='select_option' value="2">Second Your Category</option>
                                <option  class='select_option' value="3">Third Your Category</option>
                          </select>
                        </div>
                    </div>
                </div>

                <span className="alert">
                Please review your registration details before submitting
                </span>
<div className="checkbox">

                <input type="checkbox" id='privacy' name="priivate" value='1' />
                <label htmlFor="privacy"> I agreed with the event terms and conditions  and privacy policy</label>
</div>

                <Button
                
                title='Register Now'
                type='submit'
                className='gradient1 button registerBtn'
                />
               </form>
                </>


            )

            ||

            (
                <div className="contactBody">
                    <img src="/const2.svg" alt="star" className="starintro1 star" />
                    <Headings
                        isLogo
                        title={headingtop}
                        spanText={headingspan}
                    />


                    <form className="contactform" action="">
                        <div className="fNameContainer">

                            <input type="text" placeholder="First Name" id="fName" className="fName" />
                        </div>
                        <div className="mailContainer">

                            <input type="text" placeholder="Mail" id="Mail" className="fName" />
                        </div>
                        <div className="messageContainer">

                            <textarea type="text" placeholder="Message" id="Message" className="fName" />
                        </div>

                        <div className="btncontainer">

                            <Button
                                title={buttonName}
                                type='submit'
                                className='button gradient1 contactBtn'
                            />
                        </div>
                    </form>
                </div>
            )
        }
    </div>)
}

export default Form