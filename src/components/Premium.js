import React, { useState } from 'react';
import './Premium.css';

const Premium = () => {
    const [activeTab, setActiveTab] = useState('packages');
    
    const packages = [
        {
            id: 1,
            name: 'বেসিক প্যাকেজ',
            price: '1000 HQ',
            duration: '৩০ দিন',
            adsPerDay: 2,
            earningPerAd: '50 HQ',
            dailyEarning: '100 HQ',
            totalEarning: '3000 HQ'
        },
        {
            id: 2,
            name: 'স্ট্যান্ডার্ড প্যাকেজ',
            price: '5000 HQ',
            duration: '৩০ দিন',
            adsPerDay: 10,
            earningPerAd: '50 HQ',
            dailyEarning: '500 HQ',
            totalEarning: '15000 HQ'
        },
        {
            id: 3,
            name: 'প্রিমিয়াম প্যাকেজ',
            price: '10000 HQ',
            duration: '৩০ দিন',
            adsPerDay: 22,
            earningPerAd: '50 HQ',
            dailyEarning: '1100 HQ',
            totalEarning: '33000 HQ'
        },
        {
            id: 4,
            name: 'এক্সক্লুসিভ প্যাকেজ',
            price: '30000 HQ',
            duration: '৩০ দিন',
            adsPerDay: 70,
            earningPerAd: '50 HQ',
            dailyEarning: '3500 HQ',
            totalEarning: '105000 HQ'
        },
        {
            id: 5,
            name: 'ভিআইপি প্যাকেজ',
            price: '50000 HQ',
            duration: '৩০ দিন',
            adsPerDay: 55,
            earningPerAd: '100 HQ',
            dailyEarning: '5500 HQ',
            totalEarning: '165000 HQ'
        },
        {
            id: 6,
            name: 'প্রো প্যাকেজ',
            price: '100000 HQ',
            duration: '৩০ দিন',
            adsPerDay: 60,
            earningPerAd: '200 HQ',
            dailyEarning: '12000 HQ',
            totalEarning: '360000 HQ'
        }
    ];

    const [availableAds, setAvailableAds] = useState([
        { id: 1, title: 'প্রিমিয়াম এড #1', reward: '50 HQ', viewed: false },
        { id: 2, title: 'প্রিমিয়াম এড #2', reward: '50 HQ', viewed: false },
        { id: 3, title: 'প্রিমিয়াম এড #3', reward: '100 HQ', viewed: false }
    ]);

    const handleViewAd = (adId) => {
        setAvailableAds(ads => 
            ads.map(ad => 
                ad.id === adId ? {...ad, viewed: true} : ad
            )
        );
        // Show countdown modal
        setShowCountdown(true);
        setTimeout(() => {
            setShowCountdown(false);
            alert('এড দেখানো সম্পন্ন! ৫০ HQ আপনার অ্যাকাউন্টে যোগ করা হয়েছে।');
        }, 10000); // 10 seconds countdown
    };

    const [showCountdown, setShowCountdown] = useState(false);
    const [countdown, setCountdown] = useState(10);

    const startCountdown = () => {
        let time = 10;
        const timer = setInterval(() => {
            time--;
            setCountdown(time);
            if (time === 0) {
                clearInterval(timer);
            }
        }, 1000);
    };

    React.useEffect(() => {
        if (showCountdown) {
            startCountdown();
        }
    }, [showCountdown]);

    return (
        <div className="premium-page">
            <header className="dashboard-header">
                <div className="container">
                    <div className="header-content">
                        <div className="logo">
                            <i className="fas fa-crown"></i>
                            <span>HQ ইনকাম - প্রিমিয়াম</span>
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
                <div className="premium-container">
                    <div className="premium-header">
                        <h1>প্রিমিয়াম সেকশন</h1>
                        <p>প্রিমিয়াম প্যাকেজ কিনে বেশি আয় করুন</p>
                    </div>

                    <div className="premium-tabs">
                        <button 
                            className={`tab-btn ${activeTab === 'packages' ? 'active' : ''}`}
                            onClick={() => setActiveTab('packages')}
                        >
                            <i className="fas fa-box"></i>
                            প্রিমিয়াম প্যাকেজ
                        </button>
                        <button 
                            className={`tab-btn ${activeTab === 'view-ads' ? 'active' : ''}`}
                            onClick={() => setActiveTab('view-ads')}
                        >
                            <i className="fas fa-eye"></i>
                            এড দেখুন
                        </button>
                    </div>

                    {activeTab === 'packages' && (
                        <div className="packages-grid">
                            {packages.map(pkg => (
                                <div key={pkg.id} className="package-card">
                                    <div className="package-header">
                                        <h3>{pkg.name}</h3>
                                        <div className="package-price">{pkg.price}</div>
                                    </div>
                                    <div className="package-details">
                                        <div className="detail-item">
                                            <span>মেয়াদ:</span>
                                            <span>{pkg.duration}</span>
                                        </div>
                                        <div className="detail-item">
                                            <span>দৈনিক এড:</span>
                                            <span>{pkg.adsPerDay} টি</span>
                                        </div>
                                        <div className="detail-item">
                                            <span>প্রতি এড আয়:</span>
                                            <span>{pkg.earningPerAd}</span>
                                        </div>
                                        <div className="detail-item">
                                            <span>দৈনিক আয়:</span>
                                            <span className="highlight">{pkg.dailyEarning}</span>
                                        </div>
                                        <div className="detail-item">
                                            <span>মোট আয়:</span>
                                            <span className="highlight">{pkg.totalEarning}</span>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary buy-btn">
                                        প্যাকেজ কিনুন
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === 'view-ads' && (
                        <div className="ads-section">
                            <div className="ads-info">
                                <h3>আজকের এডগুলি</h3>
                                <p>নিচের এডগুলি দেখে আয় করুন</p>
                            </div>
                            <div className="ads-grid">
                                {availableAds.map(ad => (
                                    <div key={ad.id} className="ad-card">
                                        <div className="ad-header">
                                            <h4>{ad.title}</h4>
                                            <span className="ad-reward">{ad.reward}</span>
                                        </div>
                                        <div className="ad-content">
                                            <p>এই এডটি দেখে আপনি {ad.reward} আয় করতে পারবেন</p>
                                            {ad.viewed ? (
                                                <button className="btn btn-success" disabled>
                                                    দেখা完成了
                                                </button>
                                            ) : (
                                                <button 
                                                    className="btn btn-primary"
                                                    onClick={() => handleViewAd(ad.id)}
                                                >
                                                    এড দেখুন
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Countdown Modal */}
            {showCountdown && (
                <div className="countdown-modal">
                    <div className="countdown-content">
                        <h3>এড লোড হচ্ছে...</h3>
                        <div className="countdown-circle">
                            <span>{countdown}</span>
                        </div>
                        <p>দয়া করে অপেক্ষা করুন</p>
                        <button 
                            className="btn btn-danger"
                            onClick={() => setShowCountdown(false)}
                        >
                            বাতিল করুন
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Premium;
