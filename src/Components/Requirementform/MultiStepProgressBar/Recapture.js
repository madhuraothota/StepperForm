import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

function onChange(value) {
    console.log("captcha value:",value);
}
const Recapture = () => {
  return (
  <ReCAPTCHA
    sitekey='6LevPx4jAAAAAIg2uNsWHjkNfYhrk5J1DnaZbdR1'
    onChange={onChange}
  />
 
  )
}

export default Recapture;