import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Firstpage from "./Firstpage";
import Secondpage from "./Secondpage";
import Thirdpage from "./Thirdpage";



const MultiStepProgressBar = () => {
  
  const [page, setPage] = useState(1);
  
  
  return (
    <>
      <div className="container mt-4">
        <h6 className="text-center">Share your requirements</h6>
       
        <p>{page}</p>
        {page === 1 ? (
          <Firstpage />
        ) : page === 2 ? (
          <Secondpage />
        ) : (
          <Thirdpage />
        )}
        <center>
          {page <= 2 && (
            <Button
              className="btn btn-warning"
              onClick={() => {
                const nextPage = page + 1;
                setPage(nextPage);
              }}
            >
              Next
            </Button>
          )}
          {page === 3 && (
            <Button className="btn btn-warning" type="submit">
              request a callback
            </Button>
          )}
        </center>
      </div>
    </>
  );
};

export default MultiStepProgressBar;
