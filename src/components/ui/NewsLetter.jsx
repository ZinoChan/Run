import React from 'react'

export default function NewsLetter() {
    return (
        <div className="news-letter text-center">
            <div className="container-fluid">
                <h2>STAY UPDATED</h2>
                <p>
                    Get updates about our new products <br/> and upcomming discounts
                </p>
                <div className="form-group d-flex w-50 mx-auto">
                    <input 
                        className="form-control mr-4" 
                        type="text" 
                        placeholder="Enter Your Email"
                    />
                    <button type="submit" className="btn main-btn">Submit</button>
                </div>
            </div>
        </div>
    )
}
