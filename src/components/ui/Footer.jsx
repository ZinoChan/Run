import React from 'react';
import { NavLink } from 'react-router-dom';
import { TERMS_OF_USE } from '../../constants/routes';
import  logo  from '../../assets/red-logo.png';

export default function Footer() {
    return (
        <div className="footer d-flex justify-content-between align-items-center">
           <div className="container text-center">
            <div className="row align-items-center">
                <div className="col-xl-4 col-sm-12">
                    <p >Developed by Zino-chan</p>
                </div>        
                <div className="col-xl-4 col-sm-12 text-center">
                    <div className="logo mb-2">
                        <img src={logo} alt="logo" style={{width: 150, height: 70}}/>
                    </div>
                    <p>&copy; 2020</p>
                </div>
                <div className="col-xl-4 col-sm-12">
                <NavLink to={TERMS_OF_USE}>Terms of Use</NavLink>
                </div>
            </div>
           </div>
        </div>
    )
}
