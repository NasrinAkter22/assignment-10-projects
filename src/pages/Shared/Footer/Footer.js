import React, { Fragment } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Fragment>
      <div className="row w-100  mx-0 bg-dark text-white py-2 ">
        <div clasName="container text-center">
          <p className="text-center text-uppercase mt-4">doctor nasrin akter Copyright  © {year}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
