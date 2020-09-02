import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

export default function Filter() {
    return (
        <div className="filter">
            <div className="container-fluid">
                <div className=" filter-content d-flex align-items-center justify-content-between">
                    <div className="search-bar">
                        <div className="form-group d-flex">
                            <input 
                                className="form-control mr-4" 
                                type="text" 
                                placeholder="shoes, color, size..."
                            />
                            <button type="submit" className="btn main-btn">Search</button>
                        </div>
                    </div>
                    <div className="filter">
                        <button className="btn main-btn" >Filter  <FontAwesomeIcon className="ml-2" icon={faFilter}/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
