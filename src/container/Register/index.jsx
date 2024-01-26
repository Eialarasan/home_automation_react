import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from "react-router-dom";
import action from '../../redux/action';



const Register = () => {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("")
    const [showPasswordState, setShowpasswordstate] = useState(true)
    const [errorUser, setErrorUser] = useState('')
    const [errorPass, setErrorPass] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPhone, setErrorPhone] = useState('')
    const [errorRole, setErrorRole] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')


    const dispatch = useDispatch()
    const navigate = useNavigate()


    const managePassword = () => {
        if (showPasswordState) {
            setShowpasswordstate(false)
        } else {
            setShowpasswordstate(true)
        }
    }

    const register = () => {

        if (!username) {
            setErrorUser("Please enter username")
        } else
            if (!email) {
                setErrorEmail("Please enter your email")
            } else
                if (!phoneNumber) {
                    setErrorPhone("Please enter your phone number")
                } else
                    if (!password) {
                        setErrorPass("Please enter your password")
                    } else {
                        const params = {
                            "user_name": username,
                            "phone_number": 1234567890,
                            "email": email,
                            "password": password,

                        }
                        const callback = (res) => {
                            if (res?.response_code === 0) {
                                setEmail("")
                                setUserName('')
                                setPassword('')
                                setErrorPass('')
                                navigate('/')
                            } else {
                                setErrorPass(res?.message)
                            }
                        }
                        dispatch(action.register(params, callback))
                    }
    }


    return (
        <div class="container">
            <div class="card o-hidden border-0 shadow-lg my-5">
                <div class="card-body p-0">
                    <div class="row">
                        <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
                        <div class="col-lg-7">
                            <div class="p-5">
                                <div class="text-center">
                                    <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                                </div>
                                <form class="user">
                                    <div class="form-group row">
                                        <div class="col-sm-6 mb-3 mb-sm-0">
                                            <input type="text" class="form-control form-control-user" id="exampleFirstName"
                                                onChange={(e) => {
                                                    setUserName(e?.target?.value)
                                                    setErrorUser('')
                                                }} value={username}
                                                placeholder="User Name" />
                                            {errorUser && <p style={{ color: 'red' }}>{errorUser}</p>}

                                        </div>
                                        <div class="col-sm-6">
                                            <input type="text" class="form-control form-control-user" id="exampleLastName"
                                                onChange={(e) => {
                                                    setPhoneNumber(e?.target?.value)
                                                    setErrorPhone('')
                                                }} value={phoneNumber}
                                                placeholder="phone number" />
                                            {errorPhone && <p style={{ color: 'red' }}>{errorPhone}</p>}
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <input type="email" class="form-control form-control-user"
                                            id="exampleInputEmail"
                                            onChange={(e) => {
                                                setEmail(e?.target?.value)
                                                setErrorEmail('')
                                            }} value={email}
                                            placeholder="Email Address" />
                                        {errorEmail && <p style={{ color: 'red' }}>{errorEmail}</p>}
                                    </div>
                                    <div class="form-group 
                                ">
                                        <input type="password" class="form-control form-control-user"
                                            onChange={(e) => {
                                                setPassword(e?.target?.value)
                                                setErrorPass('')
                                            }} value={password}
                                            id="exampleInputPassword" placeholder="Password" />
                                    </div>
                                    <a onClick={() => register()} class="btn btn-primary btn-user btn-block">
                                        Register Account
                                    </a>
                                    <hr />

                                </form>
                                <hr />

                                <div class="text-center">
                                    <Link to={'/'} class="small" href="login.html">Already have an account? Login!</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default Register