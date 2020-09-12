import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

export default function Filter() {
    return (
        <div className="filter">
            <div className="container-fluid">
                <div className=" filter-content">
                    <div className="filter-btn">
                        <button className="btn main-btn" >Filter  <FontAwesomeIcon className="ml-2" icon={faFilter}/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
