import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // এখানে লগইন লজিক যোগ করবেন
        console.log('Login data:', formData);
        navigate('/dashboard');
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2>লগইন</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">ইউজারনেম, ইমেইল বা ফোন নম্বর</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="আপনার ইউজারনেম, ইমেইল বা ফোন নম্বর দিন"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">পাসওয়ার্ড</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="আপনার পাসওয়ার্ড দিন"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">লগইন</button>
                </form>
                <p className="auth-link">
                    একাউন্ট নেই? <a href="/register">রেজিস্ট্রেশন করুন</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
