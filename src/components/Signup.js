import React, { useState, useContext } from 'react'
import "../stylesheets/sign.css";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from '../context/auth/AuthContext';



function Signup() {

    const context = useContext(AuthContext);
    const { signup, isAuthenticated } = context;

    const [credentials, setCredentials] = useState({ name: "", email: "", password: "" });
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
        const { name, email, password } = credentials;

        await signup(name, email, password);
    }

    if(isAuthenticated || localStorage.getItem('token')){
        navigate('/profile');
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }


    return (
        <>
            <div className="signTemp" id="id02">

                <span onClick={back} className="close" title="Close">&times;</span>

                <form className="form animate form-up" onSubmit={handleSubmit}>
                    <span>
                        <h3>Ready to join?</h3>
                        <h3>Sign Up</h3>
                    </span>
                    <input type="text" className="sinput" name="name" value={credentials.name} placeholder="Enter your name" onChange={onChange} required />
                    <input type="email" className="sinput" name="email" value={credentials.email} placeholder="Enter your Email ID" onChange={onChange} required />
                    <input type="password" className="sinput" name="password" value={credentials.password} placeholder="Set Password" onChange={onChange} required minLength={8} />
                    <button type="submit" className="btr">Sign Up</button>

                    <div className="upl-s">By signing up, you're agree to <br /> our <Link to='/terms'>Terms & Conditions</Link> and <Link to='/privacy'>Privacy Policy</Link></div>

                    <div className="seg">OR</div>

                    <button className="googleAuth gm-u">
                        Sign Up with Google
                    </button>

                    <div className="upl">
                        Already a member? <Link to='/login'>Login</Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Signup;
