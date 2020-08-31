import React from 'react'

export default function Home() {
    return (
        <section className="home relative d-flex align-items-center">
            <div className="home-overlay">
                <h1>Nike</h1>
                <h2>2020</h2>
            </div>
            <div className="shoe"></div>
            <div className="home-text">
                <h1>THE NEW ARRIVALS</h1>
                <p>
                we are taking nike to the next level, with our new 2020 collection more comfort and style ready to run.
                </p>
                <button className="btn home-btn">Order Now</button>
                <a href="goo.com" class="d-flex align-items-center">New Arrivals <span className="arrow"></span></a>
            </div>
            <div className="social d-flex">
                <p>INSTAGRAM</p>
                <p>FACEBOOK</p>
                <p>TWITTER</p>
            </div>
        </section>
    )
}
