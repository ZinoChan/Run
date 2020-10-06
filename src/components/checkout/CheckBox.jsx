import React from 'react';
import { useField } from 'formik';
import {TERMS_OF_USE } from '../../constants/routes';
import { NavLink } from 'react-router-dom';



export default function CheckBox({children, ...props}) {

    const [field, meta] = useField(props, 'checkbox')

    return (
       <>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" {...field} {...props}/>
                <label className="form-check-label" >I accept the <NavLink to={TERMS_OF_USE}>terms of use</NavLink></label> 
            </div>
            {meta.touched && meta.error ? (
                <div className="error text-danger">{meta.error}</div>
            ) : null}
       </>
    )
}
