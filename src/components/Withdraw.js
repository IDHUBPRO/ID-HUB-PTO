import React, { useState } from 'react';
import './Withdraw.css';

const Withdraw = () => {
    const [activeBalance, setActiveBalance] = useState('random');
    const [formData, setFormData] = useState({
        amount: '',
        method: 'bkash',
        phone: '',
        password: ''
    });

    const balanceTypes = {
        random: {
            name: 'র্যান্ডম টাস্ক ব্যালেন্স',
            balance: 2500,
            minWithdraw: 2000,
            commission: 30,
            commissionType: '%'
        },
        regular: {
            name: 'রেগুলার টাস্ক ব্যালেন্স',
            balance: 1500,
            minWithdraw: 1000,
            commission: 10,
            commissionType: '%'
        },
        premium: {
            name: 'প্রিমিয়াম টাস্ক ব্যালেন্স',
            balance: 5000,
            minWithdraw: 3000,
            commission: 15,
            commissionType: '%'
        },
        referral: {
            name: 'রেফারেল ব্যালেন্স',
            balance: 1200,
            minWithdraw: 500,
            commission: 20,
            commissionType: '%'
        }
    };

    const paymentMethods = [
        { value: 'bkash', label: 'বিকাশ', icon: 'fas fa-mobile-alt' },
        { value: 'nagad', label: 'নগদ', icon: 'fas fa-wallet' },
        { value: 'rocket', label: 'রকেট', icon: 'fas fa-rocket' },
        { value: 'upay', label: 'উপায়', icon: 'fas fa-money-bill-wave' }
    ];

    const calculateWithdraw = (amount) => {
        const commission = (amount * balanceTypes[activeBalance].commission) / 100;
        const receivedAmount = amount - commission;
        const receivedMoney = receivedAmount / 100; // 1 TK = 100 HQ
        return {
            commission,
            receivedAmount,
            receivedMoney
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const amount = parseInt(formData.amount);
        
        if (amount < balanceTypes[activeBalance].minWithdraw) {
            alert(`সর্বনিম্ন উইথড্র ${balanceTypes[activeBalance].minWithdraw} HQ`);
            return;
        }
        
        if (amount > balanceTypes[activeBalance].balance) {
            alert('পর্যাপ্ত ব্যালেন্স নেই');
            return;
        }

        const calculation = calculateWithdraw(amount);
        
        const withdrawData = {
            ...formData,
            amount: amount,
            balanceType: activeBalance,
            ...calculation,
            date: new Date().toLocaleString(),
            status: 'pending'
        };
        
        console.log('Withdraw Data:', withdrawData);
        alert('উইথড্র রিকোয়েস্ট সাবমিট হয়েছে! এডমিন অ্যাপ্রুভ করবেন।');
        
        // Reset form
        setFormData({
            amount: '',
            method: 'bkash',
            phone: '',
            password: ''
        });
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const calculation = formData.amount ? calculateWithdraw(parseInt(formData.amount)) : null;

    return (
        <div className="withdraw-page">
            <header className="dashboard-header">
                <div className="container">
                    <div className="header-content">
                        <div className="logo">
                            <i className="fas fa-hand-holding-usd"></i>
                            <span>HQ ইনকাম - উইথড্র</span>
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
                <div className="withdraw-container">
                    <div className="withdraw-header">
                        <h1>💸 টাকা উত্তোলন করুন 💸</h1>
                        <p>১০০ HQ = ১ টাকা | সর্বনিম্ন উত্তোলন দেখুন নিচে</p>
                    </div>

                    {/* Balance Types */}
                    <div className="balance-types">
                        <h3>ব্যালেন্স টাইপ সিলেক্ট করুন</h3>
                        <div className="balance-grid">
                            {Object.keys(balanceTypes).map(balance => (
                                <div
                                    key={balance}
                                    className={`balance-card ${activeBalance === balance ? 'active' : ''}`}
                                    onClick={() => setActiveBalance(balance)}
                                >
                                    <div className="balance-header">
                                        <h4>{balanceTypes[balance].name}</h4>
                                        <span className="balance-amount">{balanceTypes[balance].balance} HQ</span>
                                    </div>
                                    <div className="balance-details">
                                        <div className="detail">
                                            <span>সর্বনিম্ন:</span>
                                            <span>{balanceTypes[balance].minWithdraw} HQ</span>
                                        </div>
                                        <div className="detail">
                                            <span>কমিশন:</span>
                                            <span className="commission">{balanceTypes[balance].commission}{balanceTypes[balance].commissionType}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Withdraw Form */}
                    <div className="withdraw-form-section">
                        <div className="form-container">
                            <form className="withdraw-form" onSubmit={handleSubmit}>
                                <h3>উইথড্র ফর্ম</h3>
                                
                                <div className="form-group">
                                    <label htmlFor="amount">কত HQ উত্তোলন করবেন?</label>
                                    <input
                                        type="number"
                                        id="amount"
                                        name="amount"
                                        value={formData.amount}
                                        onChange={handleInputChange}
                                        placeholder={`সর্বনিম্ন ${balanceTypes[activeBalance].minWithdraw} HQ`}
                                        min={balanceTypes[activeBalance].minWithdraw}
                                        max={balanceTypes[activeBalance].balance}
                                        required
                                    />
                                    <small>আপনার ব্যালেন্স: {balanceTypes[activeBalance].balance} HQ</small>
                                </div>

                                {/* Calculation Preview */}
                                {calculation && (
                                    <div className="calculation-preview">
                                        <h4>ক্যালকুলেশন:</h4>
                                        <div className="calculation-details">
                                            <div className="calc-item">
                                                <span>উত্তোলন Amount:</span>
                                                <span>{formData.amount} HQ</span>
                                            </div>
                                            <div className="calc-item">
                                                <span>কমিশন ({balanceTypes[activeBalance].commission}%):</span>
                                                <span className="negative">-{calculation.commission} HQ</span>
                                            </div>
                                            <div className="calc-item total">
                                                <span>প্রাপ্ত Amount:</span>
                                                <span className="positive">{calculation.receivedAmount} HQ</span>
                                            </div>
                                            <div className="calc-item money">
                                                <span>প্রাপ্ত টাকা:</span>
                                                <span className="positive">৳ {calculation.receivedMoney}</span>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div className="form-group">
                                    <label htmlFor="method">পেমেন্ট মাধ্যম</label>
                                    <select
                                        id="method"
                                        name="method"
                                        value={formData.method}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        {paymentMethods.map(method => (
                                            <option key={method.value} value={method.value}>
                                                {method.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">আপনার {paymentMethods.find(m => m.value === formData.method)?.label} নাম্বার</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="01XXXXXXXXX"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password">অ্যাকাউন্ট পাসওয়ার্ড</label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        placeholder="আপনার পাসওয়ার্ড দিন"
                                        required
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary submit-btn">
                                    উত্তোলন রিকোয়েস্ট পাঠান
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Withdraw History */}
                    <div className="withdraw-history">
                        <h3>উত্তোলন হিস্টোরি</h3>
                        <div className="history-list">
                            <div className="history-item">
                                <div className="history-info">
                                    <span className="type">র্যান্ডম টাস্ক</span>
                                    <span className="amount">2000 HQ → ৳ 14</span>
                                    <span className="method">বিকাশ</span>
                                    <span className="date">১৯ ডিসেম্বর ২০২৩</span>
                                </div>
                                <span className="status approved">অনুমোদিত</span>
                            </div>
                            <div className="history-item">
                                <div className="history-info">
                                    <span className="type">রেফারেল</span>
                                    <span className="amount">500 HQ → ৳ 4</span>
                                    <span className="method">নগদ</span>
                                    <span className="date">১৭ ডিসেম্বর ২০২৩</span>
                                </div>
                                <span className="status pending">পেন্ডিং</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Withdraw;
