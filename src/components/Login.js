import React, { useState, useContext } from 'react'
import "../stylesheets/sign.css"
import { Link, useNavigate } from "react-router-dom";
import AuthContext from '../context/auth/AuthContext';





function Login() {

    const context = useContext(AuthContext);
    const { login, isAuthenticated } = context;

    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const back = () => {
        if(isAuthenticated || localStorage.getItem('token')){
            navigate('/profile');
        }
        else{
            navigate('/');
        }


    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        await login(credentials.email, credentials.password);
      
    }

    if(isAuthenticated || localStorage.getItem('token')){
        navigate('/profile');
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }


    return (
        <>
            <div className="signTemp" id="id01">

                <span onClick={back} className="close" title="Close">&times;</span>

                <form className="form animate form-in" onSubmit={handleSubmit}>
                    <span>
                        <h3>Welcome back! </h3>
                        <h3>Login</h3>
                    </span>
                    <input type="email" className="sinput" name="email" value={credentials.email} placeholder="Username" onChange={onChange} />
                    <input type="password" className="sinput" name="password" value={credentials.password} placeholder="Password" onChange={onChange} />
                    <a className="ap">Forgot password?</a>
                    <button type="submit" className="btr">Sign In</button>

                    <div className="seg">OR</div>

                    <button className="googleAuth gm-i">
                        Login with Google
                    </button>

                    <div className="upl">
                        Not a member? <Link to='/signup'>Register now</Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login;
