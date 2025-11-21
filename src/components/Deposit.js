import React, { useState } from 'react';
import './Deposit.css';

const Deposit = () => {
    const [activeMethod, setActiveMethod] = useState('bkash');
    const [formData, setFormData] = useState({
        amount: '',
        transactionId: '',
        phone: ''
    });

    const paymentMethods = {
        bkash: {
            name: 'বিকাশ',
            number: '01873115394',
            instructions: [
                '1. *247# ডায়াল করুন',
                '2. "Send Money" সিলেক্ট করুন',
                '3. উপরের নাম্বারে টাকা সেন্ড করুন',
                '4. ট্রানজেকশন আইডি সেভ করুন'
            ]
        },
        nagad: {
            name: 'নগদ',
            number: '01873115394',
            instructions: [
                '1. *167# ডায়াল করুন',
                '2. "Send Money" সিলেক্ট করুন',
                '3. উপরের নাম্বারে টাকা সেন্ড করুন',
                '4. ট্রানজেকশন আইডি সেভ করুন'
            ]
        },
        rocket: {
            name: 'রকেট',
            number: '01577213347',
            instructions: [
                '1. Rocket App ওপেন করুন',
                '2. "Send Money" সিলেক্ট করুন',
                '3. উপরের নাম্বারে টাকা সেন্ড করুন',
                '4. ট্রানজেকশন আইডি সেভ করুন'
            ]
        },
        upay: {
            name: 'উপায়',
            number: '01873115394',
            instructions: [
                '1. Upay App ওপেন করুন',
                '2. "Send Money" সিলেক্ট করুন',
                '3. উপরের নাম্বারে টাকা সেন্ড করুন',
                '4. ট্রানজেকশন আইডি সেভ করুন'
            ]
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Calculate HQ based on amount (10 TK = 1 HQ)
        const hqAmount = Math.floor(formData.amount / 10);
        
        const depositData = {
            ...formData,
            method: activeMethod,
            hqAmount: hqAmount,
            date: new Date().toLocaleString(),
            status: 'pending'
        };
        
        console.log('Deposit Data:', depositData);
        alert(`ডিপোজিট রিকোয়েস্ট সাবমিট হয়েছে! আপনি পাবেন ${hqAmount} HQ`);
        
        // Reset form
        setFormData({
            amount: '',
            transactionId: '',
            phone: ''
        });
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="deposit-page">
            <header className="dashboard-header">
                <div className="container">
                    <div className="header-content">
                        <div className="logo">
                            <i className="fas fa-money-bill-wave"></i>
                            <span>HQ ইনকাম - ডিপোজিট</span>
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
                <div className="deposit-container">
                    <div className="deposit-header">
                        <h1>💰💎 ডিপোজিট করুন 💎💰</h1>
                        <p>১০ টাকা = ১ HQ | সর্বনিম্ন ডিপোজিট: ১০০ টাকা (১০ HQ)</p>
                    </div>

                    <div className="payment-methods">
                        <h3>পেমেন্ট মাধ্যম সিলেক্ট করুন</h3>
                        <div className="methods-grid">
                            {Object.keys(paymentMethods).map(method => (
                                <button
                                    key={method}
                                    className={`method-btn ${activeMethod === method ? 'active' : ''}`}
                                    onClick={() => setActiveMethod(method)}
                                >
                                    <i className={`fas fa-mobile-alt`}></i>
                                    {paymentMethods[method].name}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="payment-details">
                        <div className="payment-info">
                            <h4>💖 {paymentMethods[activeMethod].name} নাম্বার 💖</h4>
                            <div className="payment-number">
                                <i className="fas fa-phone"></i>
                                <span>{paymentMethods[activeMethod].number}</span>
                                <button 
                                    className="copy-btn"
                                    onClick={() => navigator.clipboard.writeText(paymentMethods[activeMethod].number)}
                                >
                                    <i className="fas fa-copy"></i>
                                </button>
                            </div>
                            
                            <div className="instructions">
                                <h5>টাকা পাঠানোর নিয়ম:</h5>
                                <ul>
                                    {paymentMethods[activeMethod].instructions.map((instruction, index) => (
                                        <li key={index}>{instruction}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <form className="deposit-form" onSubmit={handleSubmit}>
                            <h4>ডিপোজিট তথ্য দিন</h4>
                            
                            <div className="form-group">
                                <label htmlFor="amount">টাকার পরিমাণ (টাকায়)</label>
                                <input
                                    type="number"
                                    id="amount"
                                    name="amount"
                                    value={formData.amount}
                                    onChange={handleInputChange}
                                    placeholder="যত টাকা পাঠিয়েছেন"
                                    min="100"
                                    required
                                />
                                <small>সর্বনিম্ন ১০০ টাকা</small>
                            </div>

                            <div className="form-group">
                                <label htmlFor="hqAmount">প্রাপ্ত HQ</label>
                                <input
                                    type="text"
                                    id="hqAmount"
                                    value={formData.amount ? Math.floor(formData.amount / 10) + ' HQ' : ''}
                                    readOnly
                                    className="readonly-input"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">আপনার {paymentMethods[activeMethod].name} নাম্বার</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="যে নাম্বার থেকে পাঠিয়েছেন"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="transactionId">ট্রানজেকশন আইডি (TrxID)</label>
                                <input
                                    type="text"
                                    id="transactionId"
                                    name="transactionId"
                                    value={formData.transactionId}
                                    onChange={handleInputChange}
                                    placeholder="ট্রানজেকশন আইডি দিন"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="screenshot">স্ক্রিনশট আপলোড (ঐচ্ছিক)</label>
                                <input
                                    type="file"
                                    id="screenshot"
                                    accept="image/*"
                                    className="file-input"
                                />
                            </div>

                            <button type="submit" className="btn btn-primary submit-btn">
                                ডিপোজিট রিকোয়েস্ট পাঠান
                            </button>
                        </form>
                    </div>

                    {/* Deposit History */}
                    <div className="deposit-history">
                        <h3>ডিপোজিট হিস্টোরি</h3>
                        <div className="history-list">
                            <div className="history-item">
                                <div className="history-info">
                                    <span className="method">বিকাশ</span>
                                    <span className="amount">500 TK → 50 HQ</span>
                                    <span className="date">২০ ডিসেম্বর ২০২৩</span>
                                </div>
                                <span className="status approved">অনুমোদিত</span>
                            </div>
                            <div className="history-item">
                                <div className="history-info">
                                    <span className="method">নগদ</span>
                                    <span className="amount">1000 TK → 100 HQ</span>
                                    <span className="date">১৮ ডিসেম্বর ২০২৩</span>
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

export default Deposit;
