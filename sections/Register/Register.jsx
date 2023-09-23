
'use client'
import './Register.css'

import { Form } from "@/components"


const Register = () => {
  return (
    <section className="register section" id="register" >
        <div className="register-content mycontainer myflex">
            <div className="registerLeft">
                <div className="registerImgcon">

                <img src="sittingMan.svg" alt="sittingMan" />
                </div>
            </div>

        <div className="RegisterRight">
            <Form
            isRegister
            headingtop='Register'
            buttonName='Register Now'

            />
        </div>
        </div>

    </section>
  )
}

export default Register