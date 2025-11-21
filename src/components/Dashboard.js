import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    const userData = {
        name: 'রহিম ইসলাম',
        type: 'premium',
        balance: 150,
        dailyIncome: '২০০-৫০০ টাকা',
        premiumIncome: '২০০-১৫০০ টাকা'
    };

    const stats = [
        { value: '১৫০ HQ', label: 'মোট ব্যালেন্স' },
        { value: '৫', label: 'সম্পন্ন টাস্ক' },
        { value: '২', label: 'রেফারেল' },
        { value: '৫০ HQ', label: 'আজকের আয়' }
    ];

    const quickActions = [
        {
            icon: 'fas fa-random',
            title: 'র্যান্ডম টাস্ক',
            description: 'বিভিন্ন ধরনের র্যান্ডম টাস্ক সম্পন্ন করে আয় করুন',
            link: '/tasks'
        },
        {
            icon: 'fas fa-calendar-alt',
            title: 'রেগুলার টাস্ক',
            description: 'স্থায়ী টাস্কগুলো সম্পন্ন করে নিয়মিত আয় করুন',
            link: '/tasks'
        },
        {
            icon: 'fas fa-crown',
            title: 'প্রিমিয়াম টাস্ক',
            description: 'প্রিমিয়াম টাস্কগুলো সম্পন্ন করে বেশি আয় করুন',
            link: '/premium'
        },
        {
            icon: 'fas fa-share-alt',
            title: 'রেফারেল',
            description: 'বন্ধুদের আমন্ত্রণ করে অতিরিক্ত আয় করুন',
            link: '/referral'
        }
    ];

    const communityLinks = [
        {
            icon: 'fab fa-whatsapp',
            title: 'হোয়াটসঅ্যাপ গ্রুপ',
            description: 'আমাদের হোয়াটসঅ্যাপ গ্রুপে জয়েন করুন',
            link: '#'
        },
        {
            icon: 'fab fa-telegram',
            title: 'টেলিগ্রাম গ্রুপ',
            description: 'আমাদের টেলিগ্রাম গ্রুপে জয়েন করুন',
            link: '#'
        },
        {
            icon: 'fab fa-youtube',
            title: 'ইউটিউব চ্যানেল',
            description: 'আমাদের ইউটিউব চ্যানেল সাবস্ক্রাইব করুন',
            link: '#'
        },
        {
            icon: 'fab fa-facebook',
            title: 'ফেসবুক পেজ',
            description: 'আমাদের ফেসবুক পেজ ফলো করুন',
            link: '#'
        }
    ];

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
                            <a href="/profile" className="nav-item">
                                <i className="fas fa-user"></i>
                                প্রোফাইল
                            </a>
                            <a href="/" className="nav-item">
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
                    <h2>স্বাগতম, <span className="user-name">{userData.name}</span>!</h2>
                    <p>HQ ইনকামে আপনাকে স্বাগতম। এখানে থেকে আপনি বিভিন্ন উপায়ে আয় করতে পারবেন।</p>
                    <span className={`user-badge ${userData.type}`}>
                        {userData.type === 'premium' ? 'প্রিমিয়াম ইউজার' : 'নরমাল ইউজার'}
                    </span>
                </div>

                {/* Stats Grid */}
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-card">
                            <div className="stat-icon">
                                <i className={`fas ${
                                    index === 0 ? 'fa-wallet' : 
                                    index === 1 ? 'fa-tasks' : 
                                    index === 2 ? 'fa-users' : 'fa-chart-line'
                                }`}></i>
                            </div>
                            <div className="stat-info">
                                <h3>{stat.value}</h3>
                                <p>{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Income Information */}
                <div className="income-info">
                    <div className="income-card">
                        <h3>💰 আয়ের সুযোগ</h3>
                        <div className="income-details">
                            <div className="income-item">
                                <i className="fas fa-star"></i>
                                <div>
                                    <h4>ফ্রি ইউজার</h4>
                                    <p>দৈনিক {userData.dailyIncome} আয় করতে পারবেন</p>
                                </div>
                            </div>
                            <div className="income-item">
                                <i className="fas fa-crown"></i>
                                <div>
                                    <h4>প্রিমিয়াম ইউজার</h4>
                                    <p>দৈনিক {userData.premiumIncome} আয় করতে পারবেন</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Actions Navigation */}
                <div className="dashboard-nav-section">
                    <h2>দ্রুত একশন</h2>
                    <div className="dashboard-nav-grid">
                        <a href="/tasks" className="nav-card">
                            <div className="nav-icon">
                                <i className="fas fa-tasks"></i>
                            </div>
                            <h3>টাস্কস</h3>
                            <p>বিভিন্ন টাস্ক সম্পন্ন করে আয় করুন</p>
                        </a>
                        <a href="/premium" className="nav-card">
                            <div className="nav-icon">
                                <i className="fas fa-crown"></i>
                            </div>
                            <h3>প্রিমিয়াম</h3>
                            <p>প্রিমিয়াম প্যাকেজ কিনে বেশি আয় করুন</p>
                        </a>
                        <a href="/balance" className="nav-card">
                            <div className="nav-icon">
                                <i className="fas fa-wallet"></i>
                            </div>
                            <h3>ব্যালেন্স</h3>
                            <p>আপনার সকল ব্যালেন্স দেখুন</p>
                        </a>
                        <a href="/referral" className="nav-card">
                            <div className="nav-icon">
                                <i className="fas fa-users"></i>
                            </div>
                            <h3>রেফারেল</h3>
                            <p>বন্ধুদের আমন্ত্রণ করে আয় করুন</p>
                        </a>
                        <a href="/deposit" className="nav-card">
                            <div className="nav-icon">
                                <i className="fas fa-money-bill-wave"></i>
                            </div>
                            <h3>ডিপোজিট</h3>
                            <p>টাকা জমা করে HQ কিনুন</p>
                        </a>
                        <a href="/withdraw" className="nav-card">
                            <div className="nav-icon">
                                <i className="fas fa-hand-holding-usd"></i>
                            </div>
                            <h3>উইথড্র</h3>
                            <p>আপনার আয় উত্তোলন করুন</p>
                        </a>
                        <a href="/profile" className="nav-card">
                            <div className="nav-icon">
                                <i className="fas fa-user-cog"></i>
                            </div>
                            <h3>প্রোফাইল</h3>
                            <p>আপনার প্রোফাইল ম্যানেজ করুন</p>
                        </a>
                        <a href="/admin" className="nav-card">
                            <div className="nav-icon">
                                <i className="fas fa-crown"></i>
                            </div>
                            <h3>এডমিন</h3>
                            <p>এডমিন প্যানেল (শুধু এডমিনের জন্য)</p>
                        </a>
                    </div>
                </div>

                {/* Community Section */}
                <div className="community-section">
                    <h2>আমাদের কমিউনিটি</h2>
                    <div className="community-grid">
                        {communityLinks.map((item, index) => (
                            <div key={index} className="community-card">
                                <div className="community-icon">
                                    <i className={item.icon}></i>
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <button className="btn btn-outline">জয়েন করুন</button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Motivation Section */}
                <div className="motivation-section">
                    <div className="motivation-card">
                        <h3>💫 সফলতার মন্ত্র 💫</h3>
                        <p>
                            "আপনি খুব সুন্দর করে ইনকাম করতে পারবেন। বিশ্বাস রেখে কাজ করতে হবে, 
                            ধৈর্য্য ধরে এগিয়ে যেতে হবে। সফলতা আপনার দরজায় কড়া নাড়বেই। 
                            আমাদের প্ল্যাটফর্মে নিয়মিত কাজ করে আপনিও হতে পারেন একজন সফল আয়কারী।"
                        </p>
                        <div className="motivation-footer">
                            <i className="fas fa-lightbulb"></i>
                            <span>মোটিভেশন হয়েছেন? এখনই কাজ শুরু করুন!</span>
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
                        <div className="activity-item">
                            <div className="activity-icon success">
                                <i className="fas fa-check-circle"></i>
                            </div>
                            <div className="activity-details">
                                <h4>রেফারেল বোনাস</h4>
                                <p>আপনার বন্ধু রেজিস্ট্রেশন করেছে</p>
                                <span className="activity-time">১ দিন আগে</span>
                            </div>
                            <div className="activity-amount">
                                +১০০ HQ
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
