import React from 'react';

export default function TermsOfUse() {
  return (
    <div className="terms min-vh-100 d-flex flex-column justify-content-center align-items-center text-center">
      <p className="text-dark font-weight-bold">
        this website contains copyrighted images the use of which has not been
        authorized by the copyright owner. <br />
        we are using such images for educational purpose, <br />
        we belive this constitutes a 'fair use' of any such copyright material.{' '}
        <br />
        this site is a no-profit site and it is just a concept for practice and
        <br /> the copyright owner has nothing to do with it.
      </p>
      <br />
      <br />
      <p className="text-danger font-weight-bold">
        this is only a project for practice and not a real ecommerce website.
      </p>
    </div>
  );
}
