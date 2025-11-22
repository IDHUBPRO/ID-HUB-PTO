import React from 'react';
import { useAuth } from '../App';
import './Balance.css';

const Balance = () => {
    const { currentUser } = useAuth();

    const balanceTypes = [
        {
            name: 'র্যান্ডম টাস্ক ব্যালেন্স',
            amount: currentUser?.balance?.random || 0,
            icon: 'fas fa-random',
            color: '#4361ee'
        },
        {
            name: 'রেগুলার টাস্ক ব্যালেন্স',
            amount: currentUser?.balance?.regular || 0,
            icon: 'fas fa-calendar-alt',
            color: '#4cc9f0'
        },
        {
            name: 'প্রিমিয়াম টাস্ক ব্যালেন্স',
            amount: currentUser?.balance?.premium || 0,
            icon: 'fas fa-crown',
            color: '#f8961e'
        },
        {
            name: 'রেফারেল ব্যালেন্স',
            amount: currentUser?.balance?.referral || 0,
            icon: 'fas fa-users',
            color: '#4895ef'
        },
        {
            name: 'ডিপোজিট ব্যালেন্স',
            amount: currentUser?.balance?.deposit || 0,
            icon: 'fas fa-wallet',
            color: '#7209b7'
        },
        {
            name: 'মোট আয়',
            amount: currentUser?.totalEarnings || 0,
            icon: 'fas fa-chart-line',
            color: '#2ec4b6'
        }
    ];

    return (
        <div className="balance-page">
            <header className="dashboard-header">
                <div className="container">
                    <div className="header-content">
                        <div className="logo">
                            <i className="fas fa-wallet"></i>
                            <span>HQ ইনকাম - ব্যালেন্স</span>
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
                <div className="balance-container">
                    <div className="balance-header">
                        <h1>💰 আপনার সকল ব্যালেন্স 💰</h1>
                        <p>বিভিন্ন সোর্স থেকে আপনার মোট আয় এবং ব্যালেন্স দেখুন</p>
                    </div>

                    <div className="balance-grid">
                        {balanceTypes.map((balance, index) => (
                            <div key={index} className="balance-card">
                                <div className="balance-icon" style={{backgroundColor: balance.color}}>
                                    <i className={balance.icon}></i>
                                </div>
                                <div className="balance-info">
                                    <h3>{balance.amount} HQ</h3>
                                    <p>{balance.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Balance Summary */}
                    <div className="balance-summary">
                        <h3>💰 ব্যালেন্স সামারি</h3>
                        <div className="summary-grid">
                            <div className="summary-item">
                                <span className="label">মোট ব্যালেন্স:</span>
                                <span className="value">
                                    {balanceTypes.reduce((total, balance) => total + balance.amount, 0)} HQ
                                </span>
                            </div>
                            <div className="summary-item">
                                <span className="label">উত্তোলনযোগ্য ব্যালেন্স:</span>
                                <span className="value">
                                    {balanceTypes.slice(0, 4).reduce((total, balance) => total + balance.amount, 0)} HQ
                                </span>
                            </div>
                            <div className="summary-item">
                                <span className="label">ডিপোজিট ব্যালেন্স:</span>
                                <span className="value">{currentUser?.balance?.deposit || 0} HQ</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="balance-actions">
                        <h3>দ্রুত একশন</h3>
                        <div className="actions-grid">
                            <a href="/tasks" className="action-btn">
                                <i className="fas fa-tasks"></i>
                                টাস্ক করে আয় করুন
                            </a>
                            <a href="/deposit" className="action-btn">
                                <i className="fas fa-money-bill-wave"></i>
                                ডিপোজিট করুন
                            </a>
                            <a href="/withdraw" className="action-btn">
                                <i className="fas fa-hand-holding-usd"></i>
                                টাকা উত্তোলন করুন
                            </a>
                            <a href="/referral" className="action-btn">
                                <i className="fas fa-users"></i>
                                রেফারেল করে আয় করুন
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Balance;
