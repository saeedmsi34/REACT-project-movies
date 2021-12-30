import React from 'react'
import { NavLink } from 'react-router-dom'
import style from "./Navbar.module.css"
import logo from '../img/download.jpg'

export default function Navbar(props) {
    return (
        <div >
            <nav className={`d-flex justify-content-between p-3 text-align-center ${style.navbar}`}>
                <ul className='list-unstyled d-flex '>
                    <li className='pe-1'><NavLink to='/Home'>

                        <img className={` ${style.logo}`} src={logo} alt="" />
                    </NavLink></li>
                    {props.loginUser ? <>
                        <li className='px-2'><NavLink to='/Home'>Home</NavLink></li>
                        <li className='px-2' ><NavLink to='/Movies'>Movies</NavLink></li>
                        <li className='px-2'><NavLink to='/TV'>TV</NavLink></li>
                        <li className='px-2'><NavLink to='/Gallery'>Gallery</NavLink></li>
                        <li className='px-2'><NavLink to='/Peaple'>Peaple</NavLink></li>
                    </> : ''
                    }
                </ul>


                <ul className='list-unstyled d-flex '>
                    <li className='px-2'><a href="https://www.twitter.com/"><i className="fab fa-twitter fa-fw"></i></a></li>
                    <li className='px-2'><a href="https://www.facebook.com/" ><i className="fab fa-facebook fa-fw"></i></a></li>
                    <li className='px-2' ><a href="https://www.instagram.com/"><i className="fab fa-instagram fa-fw"></i></a></li>
                    <li className='px-2'><a href="https://www.dribbble.com/"><i className="fab fa-dribbble fa-fw"></i></a></li>
                   
                    {props.loginUser? <>
                    <li onClick={props.logOut} className='px-2' > Logout</li>
                    </>:<>
                    <li className='px-2'><NavLink to='/Register'>Register</NavLink></li>
                    <li className='px-2'><NavLink to='/login'>Login</NavLink></li>


                    </>
                    }

                </ul>

            </nav>

        </div>
    )
}
