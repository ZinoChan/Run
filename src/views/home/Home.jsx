import React from 'react'
import { SHOP } from '../../constants/routes'
import { NavLink } from 'react-router-dom'


export default function Home() {
    return (
        <>
        <section className="home position-relative d-flex align-items-center">
            
                    <div className="home-overlay">
                    <h1>Nike</h1>
                    <h2>2020</h2>
                </div>
                
                <div className="shoe"></div>

                    <div className="home-text">
                        <h1 className="home-title">THE NEW ARRIVALS</h1>
                        <p>
                        we are taking nike to the next level, with our new 2020 collection more comfort and style ready to run.
                        </p>
                        <NavLink to={SHOP} className="btn home-btn">Shop Now</NavLink>
                        {/* <a href="goo.com" className="d-flex align-items-center">New Arrivals <span className="arrow"></span></a> */}
                    </div>
                
            
        </section>
        </>
    )
}
