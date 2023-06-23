import React from 'react'
import './Login.css'
import Card from 'react-bootstrap/Card';

import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
    return (
        <Card>
            <div className='login'>
                <h1>Login</h1>
                <div>
                    <input className='login-input' type='text' placeholder='Username' /> <br></br>
                    <input className='login-input' type='password' placeholder='Password' /><br />
                    <button className='login-input'>Submit</button>
                </div>
            </div>
        </Card>

    )
}

export default Login
