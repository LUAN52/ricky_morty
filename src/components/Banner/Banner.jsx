import React from 'react';
import './Banner.css'
import { Link } from 'react-router-dom'




const Banner = () => {
    return (

        <nav className="navbar  navbar-dark bg-dark"  >


            <div className="navbar-brand logo ">
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                    <div style={{ display: "flex" }}>

                        <img src={process.env.PUBLIC_URL + '/rubik.png'} width="55" height="55" alt="logo" />
                        <h1  >Rubik</h1>
                        <sup className="subTitle">studio</sup>
                    </div>
                </Link>
            </div>

            <Link to="/form">
                <img src={process.env.PUBLIC_URL + '/search.png'} width="55" height="55" alt="search" />
            </Link>

        </nav>
    )
}

export default Banner;