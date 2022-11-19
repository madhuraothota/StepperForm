import React from "react";
import { useState,createContext } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [designation,setDesignation] = useState('');
    const [company,setCompany] = useState('');
    const [workEmail,setWorkEmail] = useState('');
    const [workPhoneNumber,setWorkPhoneNumber] = useState('');
    const [role,setRole] = useState('');
    const [compensation,setCompensation] = useState('');
    const [experience,setExperience] = useState('');
    const [onsiteRemote,setOnsiteRemote] = useState('');
    const [positions,setPositions] = useState('');
    const [location,setLocation] = useState('');
    const [ timeLine,setTimeLine] = useState('');


    return (
        <FormContext.Provider
        value = {{
            firstName,
            lastName,
            designation,
            company,
            workEmail,
            workPhoneNumber,
            role,
            compensation,
            experience,
            onsiteRemote,
            positions,
            location,
            timeLine,
            setFirstName,
            setLastName,
            setDesignation,
            setCompany,
            setWorkEmail,
            setWorkPhoneNumber,
            setRole,
            setCompensation,
            setExperience,
            setOnsiteRemote,
            setPositions,
            setLocation,
            setTimeLine,
        }}       
         >
         {children}
         </FormContext.Provider>
    );

};

export default FormContext;

