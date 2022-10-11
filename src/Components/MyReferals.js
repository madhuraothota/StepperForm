import React from "react";
import ReferalForm from "./ReferalForm";
import { useState } from "react";

const MyReferals = () => {
    const [ data,setData] = useState('');

    const myReferalData = () => {
        setData("This is Referal Data");
    }
    return (
        <React.Fragment>
           <ReferalForm/>
        </React.Fragment>
    )
}

export default MyReferals;