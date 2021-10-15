import React, { useState } from "react";
import { StyledForm, Button } from "../forms/form elements/AddvehiclesElements";
import Axios from 'axios';
import { getToken } from '../Utils/common';


function AddVehicle() {

    const url = "http://localhost:9000/vehicles";
    const [data, setData] = useState({
        saccoName: "",
        vehicleRegNo: "",
        routeCost: ""
    })
    const [token, setToken] = useState(getToken())

    function submit(e) {
        e.preventDefault();
        Axios.post(url, {
            saccoName: data.saccoName,
            vehicleRegNo: data.vehicleRegNo,
            routeCost: data.routeCost,
            headers: {
                authorization: `Bearer ${token}`
            }

        })
            .then(res => {
                console.log(res.data)
            })
    }

    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    return (
        <>

            <StyledForm onSubmit={(e) => submit(e)}>
                <input type="text" name="saccoName" placeholder="Sacco Name:" onChange={(e) => handle(e)} id="saccoName" value={data.saccoName} />
                <input type="text" name="vehicleRegNo" placeholder="Vehicle Registration No:" onChange={(e) => handle(e)} id="vehicleRegNo" value={data.vehicleRegNo} />
                <input type="text" name="routeCost" placeholder="Route and Cost:" onChange={(e) => handle(e)} id="routeCost" value={data.routeCost} />
                <Button> Add Vehicle</Button>
            </StyledForm>



        </>

    );
}

export default AddVehicle;