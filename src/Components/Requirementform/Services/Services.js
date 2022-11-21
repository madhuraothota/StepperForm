import React from 'react';
import formimg from "../../../images/form.png";
import csimg from "../../../images/customer-support.png";
import jiimg from "../../../images/job-interview.png";
import hireimg from "../../../images/hired.png";


 const Services  = () => {
  return (
    <div>
        <h5>The Best Awaits You</h5>
          <div>
            <img
              src={formimg}
              width="20"
              height="20"
              className="d-inline"
              alt="formicon"
            />
            <p className="fw-bold d-inline p-4">
              Your hiring requriements are met every time.
            </p>
            <p>
              Share your candidate requriements&get relevant skilled&trained
              candidates.we have batches coming out every month full of trained
              candidates on specific tech/non tech fields
            </p>
          </div>
          <div>
            <img
              src={csimg}
              width="20"
              height="20"
              className="d-inline"
              alt="csicon"
            />
            <p className="fw-bold d-inline p-4">
              Hire killed candidates.
            </p>
            <p>
              We understand how hard it can be to get the right candidate each & every time.
              Hence we bridge the gap between corporates & skilled candidates by bringing them
              together on this platform.
            </p>
          </div>
          <div>
            <img
              src={jiimg}
              width="20"
              height="20"
              className="d-inline"
              alt="jiicon"
            />
            <p className="fw-bold d-inline p-4">
              Get ready for easy hiring.
            </p>
            <p>
              Hiring can be a tiring!Get on board for a hassle free experience.Set your own
              screening parameters along with the job description& leave the rest to us.We will
              make the hiring process as easy as possible streaming it all the way.just for you.
            </p>
          </div>
          <div>
            <img
              src={hireimg}
              width="20"
              height="20"
              className="d-inline"
              alt="formicon"
            />
            <p className="fw-bold d-inline p-4">
              Explore & Recruit
            </p>
            <p>
              Try the quality of candidates for free for 1 quarter.We have batches coming out every
              month full of trained candidates on specific tech fields.
            </p>
          </div>
    </div>
  )
}

export default Services;