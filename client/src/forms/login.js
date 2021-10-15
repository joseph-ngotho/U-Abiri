import React, { useState } from 'react';
import { Button, StyledForm } from "./form elements/loginElements";
import axios from 'axios';
import { setUserSession } from '../Utils/common';

//token = getToken();

function Login(props) {
    const [loading, setLoading] = useState(false);
    const email = useFormInput('');
    const password = useFormInput('');
    const [error, setError] = useState(null);


    // handle button click of login form
    const handleLogin = () => {

        setError(null);
        setLoading(true);
        axios.post('http://localhost:9000/systemUser/login', {
            email: email.value,
            password: password.value,
            headers: {
                Authorization: 'Bearer ${token}'
            }

        }).then(response => {
            setLoading(false);
            setUserSession(response.data.token);
            props.history.push('/index');



        }).catch(error => {
            setLoading(false);
            if (error.response.status === 401) setError(error.response.data.message);
            else setError("Something went wrong. Please try again later.");
        });
    }


    return (
        <StyledForm>
            <input type="text" {...email} autoComplete="new-password" placeholder="Enter email" />
            <input type="password" {...password} autoComplete="new-password" placeholder="Enter password" />
            {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}
            <Button input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading}> Login </Button>
        </StyledForm>
    );
}

const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    const handleChange = e => {
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange
    }
}

export default Login;