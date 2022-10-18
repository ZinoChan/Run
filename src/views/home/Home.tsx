import React from 'react';
import { SHOP } from '@/constants/routes';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import nike from '@/assets/nike.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <section className="home position-relative d-flex align-items-center">
      <div className="glass position-absolute"></div>
      <div className="container-fluid position-relative min-vh-100">
        <div className="vector">
          <h1>Nike</h1>
        </div>

        <div className="shoe">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
              duration: 1,
              delay: 0.5,
            }}
          >
            <img src={nike} alt="shoe" className="inline-block shoe-img" />
          </motion.div>

          <div className="text-center">
            <p className="mb-3 text-body mt-3 fs-6">
              Explore the new collections designed with <br /> comfort and style
              in mind
            </p>
            <NavLink to={SHOP} className="btn home-btn fs-6 ">
              <span> Shop Now</span>
              <FontAwesomeIcon icon={faArrowRightLong} className="ms-2" />
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}
