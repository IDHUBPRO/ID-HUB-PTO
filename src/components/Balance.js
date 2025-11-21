import React from 'react';

const Balance = () => {
    return (
        <div>
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
                <div style={{padding: '30px 0'}}>
                    <h1>ব্যালেন্স সেকশন - কামিং সুন</h1>
                    <p>এই সেকশনটি খুব শীঘ্রই আসছে...</p>
                </div>
            </div>
        </div>
    );
};

export default Balance;
