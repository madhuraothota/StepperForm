import React from 'react'
import Stack from 'react-bootstrap/Stack';
import tcs from '../images/tcslogo.png';
import google from '../images/Googlelogo.png';
import facebook from '../images/facebooklogo.png';
import amazon from '../images/Amazonlogo.png';
import youtube from '../images/YouTubeLogo.png';
import capgemini from '../images/CapgeminiLogo.png';
import cognizant from '../images/Cognizantlogo.png';
import accenture from '../images/accenture.png';
 const Hiringcos = () => {
  return (
    <div>
      <h6 className='text-center'>Our Hiring Partners</h6>    

    <Stack direction="horizontal" gap={2} className="col-md-5 mx-auto">
    
      <div >
      <img
            src={tcs}
            width="100"
            height="70"
            className="d-inline-block align-top"
            alt="tcs"
          />
      </div>
      <div>
      <img
            src={google}
            width="100"
            height="70"
            className="d-inline-block align-top"
            alt="google"
          />
      </div>
      <div>
      <img
            src={facebook}
            width="100"
            height="70"
            className="d-inline-block align-top"
            alt="facebook"
          />
      </div>
      <div>
      <img
            src={amazon}
            width="100"
            height="70"
            className="d-inline-block align-top"
            alt="amazon"
          />
      </div>
      <div>
      <img
            src={youtube}
            width="100"
            height="70"
            className="d-inline-block align-top"
            alt="youtube"
          />
      </div>
      <div>
      <img
            src={capgemini}
            width="100"
            height="70"
            className="d-inline-block align-top"
            alt="capgemini"
          />
      </div>
      <div>
      <img
            src={cognizant}
            width="100"
            height="70"
            className="d-inline-block align-top"
            alt="cognizant"
          />
      </div>
      <div>
      <img
            src={accenture}
            width="100"
            height="70"
            className="d-inline-block align-top"
            alt="accenture"
          />
      </div>
    </Stack>
 
    </div>
  )
}

export default Hiringcos;
