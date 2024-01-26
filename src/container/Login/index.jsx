import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
// import eyopen from '../../asset/images/eye.png'
// import hide from '../../asset/images/hide.png'
import { Link, useNavigate } from "react-router-dom";
import action from '../../redux/action';
import { store } from '../../createStore';


const Login = () => {
    const [email, setemail] = useState("")
    const [password, setPassword] = useState("")
    const [showPasswordState, setShowpasswordstate] = useState(true)
    const [errorUser, setErrorUser] = useState('')
    const [errorPass, setErrorPass] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        let token = store?.getState()?.LOGIN?.authToken?.access_token
        if (token) {
            navigate('/home')
        }
    }, [])

    const managePassword = () => {
        if (showPasswordState) {
            setShowpasswordstate(false)
        } else {
            setShowpasswordstate(true)
        }
    }



    const login = () => {
        if (!email) {
            setErrorUser("Please enter email")
        } else if (!password) {
            setErrorPass("Please enter your password")
        } else {
            const params = {
                email: email,
                password: password
            }
            const callback = (res) => {
                if (res?.response_code === 0) {
                    navigate('/home')
                } else {
                    setErrorPass(res?.response_message)
                }
            }
            dispatch(action.Login(params, callback))
        }
    }


    return (
      
        <div class="container">
            <div class="row justify-content-center">

                <div class="col-xl-10 col-lg-12 col-md-9">

                    <div class="card o-hidden border-0 shadow-lg my-5">
                        <div class="card-body p-0">
                            <div class="row">
                                <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                <div class="col-lg-6">
                                    <div class="p-5">
                                        <div class="text-center">
                                            <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                        </div>
                                        <form class="user">
                                            <div class="form-group">
                                                <input type="email" class="form-control form-control-user"
                                                    id="exampleInputEmail" aria-describedby="emailHelp"
                                                    placeholder="Enter Email Address..." onChange={(e) => {
                                                        setemail(e?.target?.value)
                                                        setErrorUser('')
                                                    }} value={email} />
                                                    {errorUser && <p style={{ color: 'red' }}>{errorUser}</p>}
                                            </div>
                                            <div class="form-group">
                                                <input type="password" class="form-control form-control-user"
                                                    id="exampleInputPassword" placeholder="Password" onChange={(e) => {
                                                        setPassword(e?.target?.value)
                                                        setErrorPass('')
                                                    }} value={password} />
                                                    {errorPass && <p style={{ color: 'red' }}>{errorPass}</p>}
                                            </div>
                                            <div class="form-group">
                                                <div class="custom-control custom-checkbox small">
                                                    <input type="checkbox" class="custom-control-input" id="customCheck" />

                                                </div>
                                            </div>
                                            <a onClick={()=>login()} class="btn btn-primary btn-user btn-block">
                                                Login
                                            </a>
                                            <hr />

                                        </form>
                                        <hr />

                                        <div class="text-center">
                                            <Link to={'/register'} class="small" >Create an Account!</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}
export default Login