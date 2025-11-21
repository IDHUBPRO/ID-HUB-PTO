import React from 'react';
import './Homepage.css';

const Homepage = () => {
    return (
        <div className="homepage">
            {/* Header Section */}
            <header className="header">
                <div className="container">
                    <div className="header-content">
                        <div className="logo">
                            <i className="fas fa-gem"></i>
                            <span>HQ ইনকাম</span>
                        </div>
                        <ul className="nav-menu">
                            <li><a href="#home">হোম</a></li>
                            <li><a href="#features">ফিচারস</a></li>
                            <li><a href="#tasks">টাস্কস</a></li>
                            <li><a href="#community">কমিউনিটি</a></li>
                            <li><a href="#about">আমাদের সম্পর্কে</a></li>
                        </ul>
                        <div className="auth-buttons">
                            <a href="/login" className="btn btn-outline">লগইন</a>
                            <a href="/register" className="btn btn-primary">রেজিস্ট্রেশন</a>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="hero" id="home">
                <div className="container">
                    <h1>HQ ইনকামে স্বাগতম!</h1>
                    <p>আমাদের প্ল্যাটফর্ম থেকে বিভিন্ন সোশ্যাল মিডিয়া অ্যাকাউন্ট তৈরি করে সহজেই আয় করুন। আমরা আপনাকে প্রদান করব সম্পূর্ণ গাইডলাইন এবং লাইভ সাপোর্ট।</p>
                    <a href="/register" className="btn btn-primary">এখনই শুরু করুন</a>
                </div>
            </section>

            {/* Features Section */}
            <section className="features" id="features">
                <div className="container">
                    <h2 className="section-title">আমাদের বিশেষ সুবিধাসমূহ</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className="fas fa-wallet"></i>
                            </div>
                            <h3>নিশ্চিত আয়</h3>
                            <p>আমাদের প্ল্যাটফর্ম থেকে আপনি দৈনিক ২০০ থেকে ৫০০ টাকা আয় করতে পারবেন সম্পূর্ণ ফ্রিতে। প্রিমিয়াম ইউজাররা ২০০ থেকে ১৫০০ টাকা পর্যন্ত আয় করতে পারবেন।</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className="fas fa-users"></i>
                            </div>
                            <h3>রেফারেল বোনাস</h3>
                            <p>আপনার রেফারেল লিংক শেয়ার করে আরও আয় করুন। প্রতিটি রেফারেল থেকে পাবেন ১০০ HQ বোনাস এবং তাদের প্রিমিয়াম প্যাকেজ কেনার উপর ১০% কমিশন।</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className="fas fa-headset"></i>
                            </div>
                            <h3>২৪/৭ সাপোর্ট</h3>
                            <p>আমাদের রয়েছে ডেডিকেটেড সাপোর্ট টিম। যেকোনো সমস্যায় আপনি পাবেন লাইভ সাপোর্ট এবং সমস্ত কাজের ভিডিও টিউটোরিয়াল।</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tasks Section */}
            <section className="tasks" id="tasks">
                <div className="container">
                    <h2 className="section-title">টাস্কস এবং আয়ের সুযোগ</h2>
                    <div className="tasks-grid">
                        <div className="task-card">
                            <h3>জিমেইল অ্যাকাউন্ট</h3>
                            <p>প্রতি পিস জিমেইল অ্যাকাউন্ট তৈরি করে ১২০ HQ আয় করুন</p>
                            <a href="/login" className="btn btn-primary">শুরু করুন</a>
                        </div>
                        <div className="task-card">
                            <h3>ফেসবুক অ্যাকাউন্ট</h3>
                            <p>ফেসবুক অ্যাকাউন্ট তৈরি করে ৫০ HQ থেকে ১১০ HQ আয় করুন</p>
                            <a href="/login" className="btn btn-primary">শুরু করুন</a>
                        </div>
                        <div className="task-card">
                            <h3>ইনস্টাগ্রাম অ্যাকাউন্ট</h3>
                            <p>ইনস্টাগ্রাম অ্যাকাউন্ট তৈরি করে ২৫ HQ আয় করুন</p>
                            <a href="/login" className="btn btn-primary">শুরু করুন</a>
                        </div>
                        <div className="task-card">
                            <h3>টিকটক অ্যাকাউন্ট</h3>
                            <p>টিকটক অ্যাকাউন্ট তৈরি করে ২০ HQ আয় করুন</p>
                            <a href="/login" className="btn btn-primary">শুরু করুন</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Community Section */}
            <section className="community" id="community">
                <div className="container">
                    <h2 className="section-title">আমাদের কমিউনিটি</h2>
                    <div className="community-grid">
                        <div className="community-card">
                            <div className="community-icon">
                                <i className="fab fa-whatsapp"></i>
                            </div>
                            <h3>হোয়াটসঅ্যাপ গ্রুপ</h3>
                            <p>আমাদের হোয়াটসঅ্যাপ গ্রুপে জয়েন করুন</p>
                        </div>
                        <div className="community-card">
                            <div className="community-icon">
                                <i className="fab fa-telegram"></i>
                            </div>
                            <h3>টেলিগ্রাম গ্রুপ</h3>
                            <p>আমাদের টেলিগ্রাম গ্রুপে জয়েন করুন</p>
                        </div>
                        <div className="community-card">
                            <div className="community-icon">
                                <i className="fab fa-youtube"></i>
                            </div>
                            <h3>ইউটিউব চ্যানেল</h3>
                            <p>আমাদের ইউটিউব চ্যানেল সাবস্ক্রাইব করুন</p>
                        </div>
                        <div className="community-card">
                            <div className="community-icon">
                                <i className="fab fa-facebook"></i>
                            </div>
                            <h3>ফেসবুক পেজ</h3>
                            <p>আমাদের ফেসবুক পেজ ফলো করুন</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-column">
                            <h3>HQ ইনকাম</h3>
                            <p>আপনার আয়ের নির্ভরযোগ্য প্ল্যাটফর্ম। বিভিন্ন সোশ্যাল মিডিয়া অ্যাকাউন্ট তৈরি করে সহজেই আয় করুন।</p>
                        </div>
                        <div className="footer-column">
                            <h3>দ্রুত লিংক</h3>
                            <ul>
                                <li><a href="#home">হোম</a></li>
                                <li><a href="#features">ফিচারস</a></li>
                                <li><a href="#tasks">টাস্কস</a></li>
                                <li><a href="#community">কমিউনিটি</a></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h3>সাপোর্ট</h3>
                            <ul>
                                <li><a href="/faq">সচরাচর জিজ্ঞাসা</a></li>
                                <li><a href="/contact">যোগাযোগ</a></li>
                                <li><a href="/privacy">প্রাইভেসি পলিসি</a></li>
                                <li><a href="/terms">টার্মস অ্যান্ড কন্ডিশন</a></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h3>যোগাযোগ</h3>
                            <ul>
                                <li><i className="fas fa-envelope"></i> support@hqincome.com</li>
                                <li><i className="fas fa-phone"></i> +8801873115394</li>
                                <li><i className="fas fa-map-marker-alt"></i> ঢাকা, বাংলাদেশ</li>
                            </ul>
                        </div>
                    </div>
                    <div className="copyright">
                        <p>&copy; 2023 HQ ইনকাম। সকল অধিকার সংরক্ষিত।</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Homepage;
