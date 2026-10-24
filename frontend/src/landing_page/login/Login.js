import React, {useState} from 'react';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3002/auth/login", {
                email,
                password
            });
            alert(response.data.message);
            localStorage.setItem("token", response.data.token);
            window.location.href = "http://localhost:3001"; // Redirect to home page after successful login
        } catch (err) {
            console.error("Login Error:", err);
            alert(err.response?.data?.message || "Login failed");
        }
    };

    return (
        <div className='container mt-5 mb-5 p-5'>
            <form onSubmit = {handleLogin}>
                <h1>Login</h1>
                <div>
                    <label className="form-label">Email:</label><br/>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} /> <br/>
                </div>
                <div>
                    <label className="form-label">Password:</label><br/>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
        
    );
}

export default Login;