import React, { useState } from 'react'
import { history } from '../../App'
import { useNavigate } from 'react-router-dom'

export default function Login() {

    const navigate = useNavigate();

    const [userLogin, setUserLogin] = useState({userName: '', passWord: ''})

    console.log(userLogin)
    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserLogin({
            ...userLogin,
            [name]: value
        });
    }

    const handleLogin = (e) => {
        e.preventDefault(); //Prevent reload browser
        if(userLogin.userName === 'cyberlearn' && userLogin.passWord ==='cyberlearn') {
            // history.push('/');
            navigate('home', {replace: false});
        }else {
            alert('Login fail !')
            return;
        }
    }

    return (
        <form className="container" onSubmit={handleLogin}>
            <h3 className="display-4">Login</h3>
            <div className="form-group">
                <p>Username</p>
                <input name="userName" className="form-control" onChange={handleChange}/>
            </div>
            <div className="form-group">
                <p>Password</p>
                <input name="passWord" className="form-control" onChange={handleChange}/>
            </div>
            <div className="form-group">
               <button className="btn btn-success">Login</button>
            </div>
        </form>
    )
}