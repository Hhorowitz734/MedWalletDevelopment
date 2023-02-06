import React from "react";
import Navbar from "../components/navbar";
import Register from "../components/register";
import axios from "axios"

function RegistrationPage(){
    

    axios.get("http://localhost:8383/gettest").then(res => {
        console.log(res.data);
    }).catch(error => {
        console.log(error)
    })


    return (
        <React.Fragment>
            <Register />
        </React.Fragment>
    )
}


export default RegistrationPage