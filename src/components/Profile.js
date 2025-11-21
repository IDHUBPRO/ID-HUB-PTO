import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
    const [activeTab, setActiveTab] = useState('info');
    const [userData, setUserData] = useState({
        firstName: 'রহিম',
        lastName: 'ইসলাম',
        phone: '01873115394',
        whatsapp: '01873115394',
        username: 'rahim123',
        email: 'rahim@gmail.com',
        joinDate: '২০২৩-১১-১৫',
        status: 'active',
        type: 'premium'
    });

    const [passwordData, setPasswordData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const handleProfileUpdate = (e) => {
        e.preventDefault();
        alert('প্রোফাইল আপডেট করা হয়েছে!');
    };

    const handlePasswordChange = (e) => {
        e.preventDefault();
        if (passwordData.newPassword !== passwordData.confirmPassword) {
            alert('নতুন পাসওয়ার্ড মেলেনি!');
            return;
        }
        alert('পাসওয়ার্ড পরিবর্তন করা হয়েছে!');
        setPasswordData({
            currentPassword: '',
            newPassword: '',
            confirmPassword: ''
        });
    };

    const handleInputChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    };

    const handlePasswordInputChange = (e) => {
        setPasswordData({
            ...passwordData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="profile-page">
            <header className="dashboard-header">
                <div className="container">
                    <div className="header-content">
                        <div className="logo">
                            <i className="fas fa-user-circle"></i>
                            <span>HQ ইনকাম - প্রোফাইল</span>
                        </div>
                        <div className="dashboard-nav">
                            <a href="/dashboard" className="nav-item">
                                <i className="fas fa-arrow-left"></i>
                                ড্যাশবোর্ড
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container">
                <div className="profile-container">
                    <div className="profile-header">
                        <div className="profile-avatar">
                            <i className="fas fa-user"></i>
                        </div>
                        <div className="profile-info">
                            <h1>{userData.firstName} {userData.lastName}</h1>
                            <p>@{userData.username}</p>
                            <div className="profile-badges">
                                <span className="badge premium">প্রিমিয়াম ইউজার</span>
                                <span className="badge active">একটিভ</span>
                            </div>
                        </div>
                    </div>

                    <div className="profile-tabs">
                        <button 
                            className={`tab-btn ${activeTab === 'info' ? 'active' : ''}`}
                            onClick={() => setActiveTab('info')}
                        >
                            <i className="fas fa-user-edit"></i>
                            প্রোফাইল তথ্য
                        </button>
                        <button 
                            className={`tab-btn ${activeTab === 'password' ? 'active' : ''}`}
                            onClick={() => setActiveTab('password')}
                        >
                            <i className="fas fa-lock"></i>
                            পাসওয়ার্ড পরিবর্তন
                        </button>
                        <button 
                            className={`tab-btn ${activeTab === 'referral' ? 'active' : ''}`}
                            onClick={() => setActiveTab('referral')}
                        >
                            <i className="fas fa-share-alt"></i>
                            রেফারেল তথ্য
                        </button>
                    </div>

                    <div className="profile-content">
                        {activeTab === 'info' && (
                            <div className="profile-info-section">
                                <form onSubmit={handleProfileUpdate}>
                                    <div className="form-grid">
                                        <div className="form-group">
                                            <label htmlFor="firstName">প্রথম নাম</label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                value={userData.firstName}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="lastName">শেষ নাম</label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                value={userData.lastName}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="phone">ফোন নম্বর</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={userData.phone}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="whatsapp">হোয়াটসঅ্যাপ নম্বর</label>
                                            <input
                                                type="tel"
                                                id="whatsapp"
                                                name="whatsapp"
                                                value={userData.whatsapp}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="username">ইউজারনেম</label>
                                            <input
                                                type="text"
                                                id="username"
                                                name="username"
                                                value={userData.username}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">ইমেইল</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={userData.email}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary update-btn">
                                        প্রোফাইল আপডেট করুন
                                    </button>
                                </form>
                            </div>
                        )}

                        {activeTab === 'password' && (
                            <div className="password-section">
                                <form onSubmit={handlePasswordChange}>
                                    <div className="form-group">
                                        <label htmlFor="currentPassword">বর্তমান পাসওয়ার্ড</label>
                                        <input
                                            type="password"
                                            id="currentPassword"
                                            name="currentPassword"
                                            value={passwordData.currentPassword}
                                            onChange={handlePasswordInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="newPassword">নতুন পাসওয়ার্ড</label>
                                        <input
                                            type="password"
                                            id="newPassword"
                                            name="newPassword"
                                            value={passwordData.newPassword}
                                            onChange={handlePasswordInputChange}
                                            minLength="6"
                                            required
                                        />
                                        <small>ন্যূনতম ৬ অক্ষর</small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="confirmPassword">পাসওয়ার্ড নিশ্চিত করুন</label>
                                        <input
                                            type="password"
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            value={passwordData.confirmPassword}
                                            onChange={handlePasswordInputChange}
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary update-btn">
                                        পাসওয়ার্ড পরিবর্তন করুন
                                    </button>
                                </form>
                            </div>
                        )}

                        {activeTab === 'referral' && (
                            <div className="referral-info-section">
                                <div className="referral-card">
                                    <h3>আপনার রেফারেল তথ্য</h3>
                                    <div className="referral-details">
                                        <div className="detail-item">
                                            <span className="label">রেফারেল লিংক:</span>
                                            <span className="value">https://hqincome.com/ref/rahim123</span>
                                            <button className="btn btn-sm btn-outline">কপি</button>
                                        </div>
                                        <div className="detail-item">
                                            <span className="label">রেফারেল কোড:</span>
                                            <span className="value">RAHIM123</span>
                                            <button className="btn btn-sm btn-outline">কপি</button>
                                        </div>
                                        <div className="detail-item">
                                            <span className="label">মোট রেফারেল:</span>
                                            <span className="value">১৫ জন</span>
                                        </div>
                                        <div className="detail-item">
                                            <span className="label">রেফারেল আয়:</span>
                                            <span className="value">২,৫০০ HQ</span>
                                        </div>
                                    </div>
                                    <div className="referral-actions">
                                        <a href="/referral" className="btn btn-primary">
                                            রেফারেল ম্যানেজ করুন
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Account Stats */}
                    <div className="account-stats">
                        <h3>অ্যাকাউন্ট স্ট্যাটিস্টিক্স</h3>
                        <div className="stats-grid">
                            <div className="stat-item">
                                <span className="stat-label">যোগদান তারিখ</span>
                                <span className="stat-value">{userData.joinDate}</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">অ্যাকাউন্ট স্ট্যাটাস</span>
                                <span className="stat-value badge active">একটিভ</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">ইউজার টাইপ</span>
                                <span className="stat-value badge premium">প্রিমিয়াম</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">মোট আয়</span>
                                <span className="stat-value">১৫,২০০ HQ</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
