import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        whatsapp: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        referralCode: ''
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
        
        if (formData.password !== formData.confirmPassword) {
            alert('পাসওয়ার্ড মেলেনি। আবার চেষ্টা করুন।');
            return;
        }
        
        // এখানে রেজিস্ট্রেশন লজিক যোগ করবেন
        console.log('Registration data:', formData);
        alert('রেজিস্ট্রেশন সফল হয়েছে! এখন লগইন করুন।');
        navigate('/login');
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2>রেজিস্ট্রেশন</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="firstName">প্রথম নাম</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="আপনার প্রথম নাম দিন"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">শেষ নাম</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="আপনার শেষ নাম দিন"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">ফোন নম্বর</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="আপনার ফোন নম্বর দিন"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="whatsapp">হোয়াটসঅ্যাপ নম্বর (ঐচ্ছিক)</label>
                        <input
                            type="tel"
                            id="whatsapp"
                            name="whatsapp"
                            value={formData.whatsapp}
                            onChange={handleChange}
                            placeholder="আপনার হোয়াটসঅ্যাপ নম্বর দিন"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">ইউজারনেম</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="একটি ইউজারনেম তৈরি করুন"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">ইমেইল</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="আপনার ইমেইল ঠিকানা দিন"
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
                            placeholder="ন্যূনতম ৬ অক্ষরের পাসওয়ার্ড দিন"
                            required
                            minLength="6"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">পাসওয়ার্ড নিশ্চিত করুন</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="পাসওয়ার্ডটি আবার দিন"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="referralCode">রেফারেল কোড (ঐচ্ছিক)</label>
                        <input
                            type="text"
                            id="referralCode"
                            name="referralCode"
                            value={formData.referralCode}
                            onChange={handleChange}
                            placeholder="রেফারেল কোড ব্যবহার করলে ১০০ HQ বোনাস পাবেন"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">রেজিস্ট্রেশন সম্পন্ন করুন</button>
                </form>
                <p className="auth-link">
                    ইতিমধ্যে একাউন্ট আছে? <a href="/login">লগইন করুন</a>
                </p>
            </div>
        </div>
    );
};

export default Register;
