import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            {/* Dashboard Header */}
            <header className="dashboard-header">
                <div className="container">
                    <div className="header-content">
                        <div className="logo">
                            <i className="fas fa-gem"></i>
                            <span>HQ ইনকাম</span>
                        </div>
                        <div className="dashboard-nav">
                            <a href="#profile" className="nav-item">
                                <i className="fas fa-user"></i>
                                প্রোফাইল
                            </a>
                            <a href="#logout" className="nav-item">
                                <i className="fas fa-sign-out-alt"></i>
                                লগআউট
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container">
                {/* User Info Section */}
                <div className="user-info">
                    <h2>স্বাগতম, <span className="user-name">রহিম</span>!</h2>
                    <p>HQ ইনকামে আপনাকে স্বাগতম। এখানে থেকে আপনি বিভিন্ন উপায়ে আয় করতে পারবেন।</p>
                    <span className="user-badge premium">প্রিমিয়াম ইউজার</span>
                </div>

                {/* Stats Grid */}
                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-icon">
                            <i className="fas fa-wallet"></i>
                        </div>
                        <div className="stat-info">
                            <h3>১৫০ HQ</h3>
                            <p>মোট ব্যালেন্স</p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon">
                            <i className="fas fa-tasks"></i>
                        </div>
                        <div className="stat-info">
                            <h3>৫</h3>
                            <p>সম্পন্ন টাস্ক</p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon">
                            <i className="fas fa-users"></i>
                        </div>
                        <div className="stat-info">
                            <h3>২</h3>
                            <p>রেফারেল</p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon">
                            <i className="fas fa-chart-line"></i>
                        </div>
                        <div className="stat-info">
                            <h3>৫০ HQ</h3>
                            <p>আজকের আয়</p>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="quick-actions">
                    <h2>দ্রুত একশন</h2>
                    <div className="actions-grid">
                        <div className="action-card">
                            <i className="fas fa-random"></i>
                            <h3>র্যান্ডম টাস্ক</h3>
                            <p>বিভিন্ন ধরনের র্যান্ডম টাস্ক সম্পন্ন করে আয় করুন</p>
                            <button className="btn btn-primary">শুরু করুন</button>
                        </div>
                        <div className="action-card">
                            <i className="fas fa-calendar-alt"></i>
                            <h3>রেগুলার টাস্ক</h3>
                            <p>স্থায়ী টাস্কগুলো সম্পন্ন করে নিয়মিত আয় করুন</p>
                            <button className="btn btn-primary">শুরু করুন</button>
                        </div>
                        <div className="action-card">
                            <i className="fas fa-crown"></i>
                            <h3>প্রিমিয়াম টাস্ক</h3>
                            <p>প্রিমিয়াম টাস্কগুলো সম্পন্ন করে বেশি আয় করুন</p>
                            <button className="btn btn-primary">শুরু করুন</button>
                        </div>
                        <div className="action-card">
                            <i className="fas fa-share-alt"></i>
                            <h3>রেফারেল</h3>
                            <p>বন্ধুদের আমন্ত্রণ করে অতিরিক্ত আয় করুন</p>
                            <button className="btn btn-primary">শেয়ার করুন</button>
                        </div>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="recent-activity">
                    <h2>সাম্প্রতিক এক্টিভিটি</h2>
                    <div className="activity-list">
                        <div className="activity-item">
                            <div className="activity-icon success">
                                <i className="fas fa-check-circle"></i>
                            </div>
                            <div className="activity-details">
                                <h4>জিমেইল অ্যাকাউন্ট তৈরি</h4>
                                <p>আপনি একটি জিমেইল অ্যাকাউন্ট তৈরি করেছেন</p>
                                <span className="activity-time">২ ঘন্টা আগে</span>
                            </div>
                            <div className="activity-amount">
                                +১২০ HQ
                            </div>
                        </div>
                        <div className="activity-item">
                            <div className="activity-icon pending">
                                <i className="fas fa-clock"></i>
                            </div>
                            <div className="activity-details">
                                <h4>ফেসবুক অ্যাকাউন্ট</h4>
                                <p>ফেসবুক অ্যাকাউন্ট পেন্ডিং এপ্রুভাল</p>
                                <span className="activity-time">৫ ঘন্টা আগে</span>
                            </div>
                            <div className="activity-amount">
                                +৮০ HQ
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
