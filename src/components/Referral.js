import React, { useState } from 'react';
import './Referral.css';

const Referral = () => {
    const [activeTab, setActiveTab] = useState('link');

    const referralData = {
        link: 'https://hqincome.com/ref/rahim123',
        code: 'RAHIM123',
        stats: {
            totalReferrals: 15,
            activeReferrals: 12,
            premiumUsers: 3,
            totalEarnings: 2500,
            pendingEarnings: 500
        },
        referrals: [
            {
                id: 1,
                name: 'R****m',
                email: 'r****m@gmail.com',
                phone: '01*****894',
                joinDate: '২০২৩-১২-১৫',
                status: 'active',
                type: 'premium',
                earnings: 500
            },
            {
                id: 2,
                name: 'K****l',
                email: 'k****l@yahoo.com',
                phone: '01*****123',
                joinDate: '২০২৩-১২-১০',
                status: 'active',
                type: 'normal',
                earnings: 200
            },
            {
                id: 3,
                name: 'S****a',
                email: 's****a@gmail.com',
                phone: '01*****456',
                joinDate: '২০২৩-১২-০৫',
                status: 'inactive',
                type: 'normal',
                earnings: 150
            }
        ]
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        alert('কপি করা হয়েছে!');
    };

    return (
        <div className="referral-page">
            <header className="dashboard-header">
                <div className="container">
                    <div className="header-content">
                        <div className="logo">
                            <i className="fas fa-users"></i>
                            <span>HQ ইনকাম - রেফারেল</span>
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
                <div className="referral-container">
                    <div className="referral-header">
                        <h1>👥 রেফারেল সিস্টেম 👥</h1>
                        <p>বন্ধুদের আমন্ত্রণ করে অতিরিক্ত আয় করুন</p>
                    </div>

                    {/* Referral Stats */}
                    <div className="referral-stats">
                        <div className="stat-card">
                            <div className="stat-icon">
                                <i className="fas fa-user-plus"></i>
                            </div>
                            <div className="stat-info">
                                <h3>{referralData.stats.totalReferrals}</h3>
                                <p>মোট রেফারেল</p>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon">
                                <i className="fas fa-users"></i>
                            </div>
                            <div className="stat-info">
                                <h3>{referralData.stats.activeReferrals}</h3>
                                <p>একটিভ রেফারেল</p>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon">
                                <i className="fas fa-crown"></i>
                            </div>
                            <div className="stat-info">
                                <h3>{referralData.stats.premiumUsers}</h3>
                                <p>প্রিমিয়াম ইউজার</p>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon">
                                <i className="fas fa-coins"></i>
                            </div>
                            <div className="stat-info">
                                <h3>{referralData.stats.totalEarnings} HQ</h3>
                                <p>মোট আয়</p>
                            </div>
                        </div>
                    </div>

                    {/* Referral Tabs */}
                    <div className="referral-tabs">
                        <button 
                            className={`tab-btn ${activeTab === 'link' ? 'active' : ''}`}
                            onClick={() => setActiveTab('link')}
                        >
                            <i className="fas fa-link"></i>
                            রেফারেল লিংক
                        </button>
                        <button 
                            className={`tab-btn ${activeTab === 'code' ? 'active' : ''}`}
                            onClick={() => setActiveTab('code')}
                        >
                            <i className="fas fa-code"></i>
                            রেফারেল কোড
                        </button>
                        <button 
                            className={`tab-btn ${activeTab === 'list' ? 'active' : ''}`}
                            onClick={() => setActiveTab('list')}
                        >
                            <i className="fas fa-list"></i>
                            রেফারেল তালিকা
                        </button>
                    </div>

                    {/* Referral Content */}
                    <div className="referral-content">
                        {activeTab === 'link' && (
                            <div className="referral-link-section">
                                <div className="link-card">
                                    <h3>আপনার রেফারেল লিংক</h3>
                                    <p>এই লিংক শেয়ার করে বন্ধুদের আমন্ত্রণ করুন</p>
                                    
                                    <div className="link-container">
                                        <div className="link-display">
                                            <i className="fas fa-link"></i>
                                            <span className="link-text">{referralData.link}</span>
                                        </div>
                                        <button 
                                            className="btn btn-primary copy-btn"
                                            onClick={() => copyToClipboard(referralData.link)}
                                        >
                                            <i className="fas fa-copy"></i>
                                            কপি করুন
                                        </button>
                                    </div>

                                    <div className="share-buttons">
                                        <h4>সোশ্যাল মিডিয়ায় শেয়ার করুন:</h4>
                                        <div className="share-grid">
                                            <button className="share-btn facebook">
                                                <i className="fab fa-facebook-f"></i>
                                                Facebook
                                            </button>
                                            <button className="share-btn whatsapp">
                                                <i className="fab fa-whatsapp"></i>
                                                WhatsApp
                                            </button>
                                            <button className="share-btn telegram">
                                                <i className="fab fa-telegram"></i>
                                                Telegram
                                            </button>
                                            <button className="share-btn messenger">
                                                <i className="fab fa-facebook-messenger"></i>
                                                Messenger
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'code' && (
                            <div className="referral-code-section">
                                <div className="code-card">
                                    <h3>আপনার রেফারেল কোড</h3>
                                    <p>এই কোডটি শেয়ার করে বন্ধুদের আমন্ত্রণ করুন</p>
                                    
                                    <div className="code-container">
                                        <div className="code-display">
                                            <i className="fas fa-code"></i>
                                            <span className="code-text">{referralData.code}</span>
                                        </div>
                                        <button 
                                            className="btn btn-primary copy-btn"
                                            onClick={() => copyToClipboard(referralData.code)}
                                        >
                                            <i className="fas fa-copy"></i>
                                            কপি করুন
                                        </button>
                                    </div>

                                    <div className="bonus-info">
                                        <h4>🎉 রেফারেল বোনাস সিস্টেম 🎉</h4>
                                        <div className="bonus-list">
                                            <div className="bonus-item">
                                                <i className="fas fa-check-circle"></i>
                                                <span>প্রতিটি রেফারেল জন্য পাবেন <strong>১০০ HQ</strong> বোনাস</span>
                                            </div>
                                            <div className="bonus-item">
                                                <i className="fas fa-check-circle"></i>
                                                <span>রেফারেল প্রিমিয়াম প্যাকেজ কিনলে পাবেন <strong>১০% কমিশন</strong></span>
                                            </div>
                                            <div className="bonus-item">
                                                <i className="fas fa-check-circle"></i>
                                                <span>আপনার রেফারেলও পাবে <strong>১০০ HQ</strong> ওয়েলকাম বোনাস</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'list' && (
                            <div className="referral-list-section">
                                <div className="list-card">
                                    <h3>আপনার রেফারেল তালিকা</h3>
                                    
                                    <div className="referrals-table">
                                        <div className="table-header">
                                            <span>ব্যবহারকারী</span>
                                            <span>যোগদান তারিখ</span>
                                            <span>স্ট্যাটাস</span>
                                            <span>আয়</span>
                                        </div>
                                        <div className="table-body">
                                            {referralData.referrals.map(ref => (
                                                <div key={ref.id} className="table-row">
                                                    <div className="user-info">
                                                        <div className="user-name">{ref.name}</div>
                                                        <div className="user-contact">
                                                            {ref.email} | {ref.phone}
                                                        </div>
                                                    </div>
                                                    <div className="join-date">{ref.joinDate}</div>
                                                    <div className="status">
                                                        <span className={`status-badge ${ref.status}`}>
                                                            {ref.status === 'active' ? 'একটিভ' : 'ইনএকটিভ'}
                                                        </span>
                                                        <span className={`type-badge ${ref.type}`}>
                                                            {ref.type === 'premium' ? 'প্রিমিয়াম' : 'নরমাল'}
                                                        </span>
                                                    </div>
                                                    <div className="earnings">
                                                        +{ref.earnings} HQ
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Referral;
