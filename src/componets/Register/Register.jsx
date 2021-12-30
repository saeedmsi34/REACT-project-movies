import axios from 'axios';
import Joi from 'joi';
import style from "./Register.module.css"
import React, { useState } from 'react';
// import { type } from 'os';
export default function Register(props) {
    let [errorList, setErrorList] = useState([])
    let [loading, setLoading] = useState(false)
    let [error, setError] = useState('')
    let [user, setUser] = useState({ first_name: '', last_name: '', age: 0, email: '', password: '' })
  
  
    function getUser(e) {
        let myUser = { ...user }
        myUser[e.target.name] = e.target.value;

        console.log(myUser)
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
            console.log(errorList)
            setLoading(false)
        } else {

            let { data } = await axios.post(`https://route-egypt-api.herokuapp.com/signup`, user);
            if (data.message === 'success') {
                // login
                props.history.push('/Login')
                setLoading(false)

            } else {
                setLoading(false)
                setError(data.message)
               
            }

        }

    }


    function validateRegisterForm() {
        let schema = Joi.object({
            first_name: Joi.string().min(3).max(10).required(),
            last_name: Joi.string().min(3).max(10).required(),
            age: Joi.number().min(16).max(80).required(),
            email: Joi.string().email({ tlds: { allow: ['com', 'net', 'org'] } }),
            password: Joi.string().pattern(new RegExp('^[A-Z][a-z]{2,10}$')),

        })
        return schema.validate(user, { abortEarly: false });

    }


    return (
        <div className= {`mx-auto w-50 pt-4 ${style.back}`} >
            <h1 className=''>Register Now</h1>
            <form onSubmit={formSubmit} className='mt-5'>
                <div className='my-3'>
                       
                    {error ? <div className="alert alert-danger w-50">{error}</div> : ''}
                   { errorList.map((error, index) => <div key={index} className="alert alert-danger p-2 w-50" > {error.path === 'password' && error.type !== "string.empty" ? "invalid password" : error.message}</div>)}
                      
                  
                    


                    <label htmlFor="first_name">first_name</label>
                    <input onChange={getUser} className='form-control w-50' type="text" name='first_name' />

                </div>

                <div className='my-3'>

                    <label htmlFor="">last_name</label>
                    <input onChange={getUser} className='form-control w-50' type="text" name='last_name' />

                </div>

                <div className='my-3'>

                    <label htmlFor="">age</label>
                    <input onChange={getUser} className='form-control w-50' type="number" name='age' />

                </div>

                <div className='my-3'>

                    <label htmlFor="">email</label>
                    <input onChange={getUser} className='form-control w-50' type="email" name='email' />

                </div>

                <div className='my-3'>

                    <label htmlFor="">password</label>
                    <input onChange={getUser} className='form-control w-50' type="password" name='password' id='pass' />

                </div>
                <button type="submit" class="btn btn-primary">{loading ? <i className='fas fa-spinner fa-spin '></i> : 'register'} </button>
            </form>
        </div>
    )
}
