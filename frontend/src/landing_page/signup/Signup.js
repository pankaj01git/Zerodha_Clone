import React, {useState} from 'react';
import axios from 'axios';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3002/auth/signup", {
                email,
                password
            });
            alert(response.data.message);
        } catch (err) {
            alert(err.response?.data?.message || "Signup failed");
        }
    };

    return (
        <div className='container mt-5 mb-5 p-5'>
            <form onSubmit = {handleSignup}>
                <h1>Signup</h1>
                <div>
                    <label className="form-label">Email:</label><br/>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} /> <br/>
                </div>
                <div>
                    <label className="form-label">Password:</label><br/>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                
                <div>
                    <button type="submit">Signup</button>
                </div>
            </form>
        </div>
        
    );
}

export default Signup;