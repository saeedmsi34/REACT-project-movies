import axios from 'axios'
import Joi from 'joi'
import React from 'react'
import { useState } from 'react/cjs/react.development'
import style from "./Login.module.css"
export default function Login(props) {
    

    let [errorList, setErrorList] = useState([])
    let [loading, setLoading] = useState(false)
    let [error, setError] = useState('')
    let [user, setUser] = useState({ email: '', password: '' })

    


    function getUser(e) {
        let myUser = { ...user }
        myUser[e.target.name] = e.target.value;

       
        setUser(myUser)

    }



    async function formSubmit(e) {
        e.preventDefault();
        setLoading(true);

        let validateRegisterResponce = validateRegisterForm()
        console.log(validateRegisterResponce)

        if (validateRegisterResponce.error) {
            //listError
            setErrorList(validateRegisterResponce.error.details)
            setLoading(false)
        } else {

            let { data } = await axios.post(`https://route-egypt-api.herokuapp.com/signin`, user);
            if (data.message === 'success') {
                localStorage.setItem('userToken', data.token);
                props.getUserInfo();
                props.history.push('/Home');
                setLoading(false);

            } else {
                setLoading(false)
                setError(data.message)

            }

        }

    }



    function validateRegisterForm() {
        let schema = Joi.object({
            email: Joi.string().email({ tlds: { allow: ['com', 'net', 'org'] } }),
            password: Joi.string().pattern(new RegExp('^[A-Z][a-z]{2,10}$')),

        })
        return schema.validate(user, { abortEarly: false });

    }

    return (

        <div className={`container-fluid  ${style.cont}`} >
            <div className={`formItem  ${style.formItem}`}>
                <div className={`box  ${style.box}`}>
                    <div className={`form ${style.form}`}>
                        <div className="form-group ">

                            <h1 className='h1 '>Login</h1>

                            <form onSubmit={formSubmit} className='mt-4'>
                                <div className='my-3 '>

                                    {error ? <div className="alert alert-danger  ">{error}</div> : ''}

                                    {errorList.map((error, index) => <div key={index} className="alert alert-danger p-2" > {error.path === 'password' && error.type !== "string.empty" ? "invalid password" : error.message}</div>)}

                                </div>

                                <div className='my-3'>

                                    <label htmlFor="">email</label>
                                    <input   onChange={getUser}  className='form-control ms-5' type="email" name='email' />

                                </div>

                                <div className='my-3'>

                                    <label htmlFor="">password</label>
                                    <input  onChange={getUser} className='form-control  ms-5'   type="password" name='password' />

                                </div>
                                <button type="submit" className="btn btn-secondary mt-3">{loading ? <i className='fas fa-spinner fa-spin '></i> : 'register'} </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}











