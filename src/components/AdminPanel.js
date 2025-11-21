import React, { useState } from 'react';
import './AdminPanel.css';

const AdminPanel = () => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const adminStats = {
        totalUsers: 1250,
        activeUsers: 980,
        premiumUsers: 320,
        totalEarnings: 125000,
        pendingDeposits: 25,
        pendingWithdrawals: 18
    };

    const recentActivities = [
        {
            id: 1,
            user: 'রহিম ইসলাম',
            action: 'ডিপোজিট রিকোয়েস্ট',
            amount: '1000 TK',
            time: '২ মিনিট আগে',
            status: 'pending'
        },
        {
            id: 2,
            user: 'করিম আহমেদ',
            action: 'উইথড্র রিকোয়েস্ট',
            amount: '2000 HQ',
            time: '৫ মিনিট আগে',
            status: 'pending'
        },
        {
            id: 3,
            user: 'সালমা খাতুন',
            action: 'টাস্ক সাবমিশন',
            amount: '120 HQ',
            time: '১০ মিনিট আগে',
            status: 'approved'
        }
    ];

    const usersData = [
        {
            id: 1,
            name: 'রহিম ইসলাম',
            email: 'rahim@gmail.com',
            phone: '01873115394',
            joinDate: '২০২৩-১২-১৫',
            status: 'active',
            type: 'premium',
            balance: 2500,
            tasksCompleted: 25
        },
        {
            id: 2,
            name: 'করিম আহমেদ',
            email: 'karim@yahoo.com',
            phone: '01755123456',
            joinDate: '২০২৩-১২-১০',
            status: 'active',
            type: 'normal',
            balance: 1200,
            tasksCompleted: 15
        },
        {
            id: 3,
            name: 'সালমা খাতুন',
            email: 'salma@gmail.com',
            phone: '01987123456',
            joinDate: '২০২৩-১২-০৫',
            status: 'inactive',
            type: 'normal',
            balance: 500,
            tasksCompleted: 8
        }
    ];

    const depositRequests = [
        {
            id: 1,
            user: 'রহিম ইসলাম',
            method: 'বিকাশ',
            amount: '1000 TK',
            hqAmount: '100 HQ',
            phone: '01873115394',
            transactionId: 'TRX123456',
            date: '২০২৩-১২-২০ 14:30',
            status: 'pending'
        },
        {
            id: 2,
            user: 'আয়শা সিদ্দিকা',
            method: 'নগদ',
            amount: '500 TK',
            hqAmount: '50 HQ',
            phone: '01755123456',
            transactionId: 'TRX123457',
            date: '২০২৩-১২-20 13:15',
            status: 'pending'
        }
    ];

    const withdrawRequests = [
        {
            id: 1,
            user: 'করিম আহমেদ',
            method: 'বিকাশ',
            amount: '2000 HQ',
            phone: '01755123456',
            receivedAmount: '1400 HQ',
            money: '14 TK',
            date: '২০২৩-১২-২০ 15:20',
            status: 'pending'
        },
        {
            id: 2,
            user: 'জাহিদ হাসান',
            method: 'রকেট',
            amount: '1500 HQ',
            phone: '01987123456',
            receivedAmount: '1050 HQ',
            money: '10.5 TK',
            date: '২০২৩-১২-20 14:45',
            status: 'pending'
        }
    ];

    const handleApprove = (type, id) => {
        alert(`${type} রিকোয়েস্ট #${id} অ্যাপ্রুভ করা হয়েছে!`);
    };

    const handleReject = (type, id) => {
        alert(`${type} রিকোয়েস্ট #${id} রিজেক্ট করা হয়েছে!`);
    };

    const handleUserAction = (action, userId) => {
        alert(`ইউজার #${userId} ${action} করা হয়েছে!`);
    };

    return (
        <div className="admin-panel">
            {/* Sidebar */}
            <div className={`admin-sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
                <div className="sidebar-header">
                    <h3>
                        <i className="fas fa-crown"></i>
                        এডমিন প্যানেল
                    </h3>
                    <button 
                        className="toggle-btn"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        <i className={`fas fa-chevron-${sidebarOpen ? 'left' : 'right'}`}></i>
                    </button>
                </div>

                <nav className="sidebar-nav">
                    <button 
                        className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
                        onClick={() => setActiveTab('dashboard')}
                    >
                        <i className="fas fa-tachometer-alt"></i>
                        {sidebarOpen && 'ড্যাশবোর্ড'}
                    </button>
                    <button 
                        className={`nav-item ${activeTab === 'users' ? 'active' : ''}`}
                        onClick={() => setActiveTab('users')}
                    >
                        <i className="fas fa-users"></i>
                        {sidebarOpen && 'ব্যবহারকারী'}
                    </button>
                    <button 
                        className={`nav-item ${activeTab === 'deposits' ? 'active' : ''}`}
                        onClick={() => setActiveTab('deposits')}
                    >
                        <i className="fas fa-money-bill-wave"></i>
                        {sidebarOpen && 'ডিপোজিট'}
                    </button>
                    <button 
                        className={`nav-item ${activeTab === 'withdrawals' ? 'active' : ''}`}
                        onClick={() => setActiveTab('withdrawals')}
                    >
                        <i className="fas fa-hand-holding-usd"></i>
                        {sidebarOpen && 'উইথড্র'}
                    </button>
                    <button 
                        className={`nav-item ${activeTab === 'tasks' ? 'active' : ''}`}
                        onClick={() => setActiveTab('tasks')}
                    >
                        <i className="fas fa-tasks"></i>
                        {sidebarOpen && 'টাস্কস'}
                    </button>
                    <button 
                        className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
                        onClick={() => setActiveTab('settings')}
                    >
                        <i className="fas fa-cog"></i>
                        {sidebarOpen && 'সেটিংস'}
                    </button>
                </nav>
            </div>

            {/* Main Content */}
            <div className="admin-main">
                <header className="admin-header">
                    <div className="header-left">
                        <h1>এডমিন প্যানেল</h1>
                    </div>
                    <div className="header-right">
                        <button className="btn btn-primary">
                            <i className="fas fa-sign-out-alt"></i>
                            লগআউট
                        </button>
                    </div>
                </header>

                <div className="admin-content">
                    {activeTab === 'dashboard' && (
                        <div className="dashboard-tab">
                            <div className="stats-grid">
                                <div className="stat-card">
                                    <div className="stat-icon total-users">
                                        <i className="fas fa-users"></i>
                                    </div>
                                    <div className="stat-info">
                                        <h3>{adminStats.totalUsers}</h3>
                                        <p>মোট ইউজার</p>
                                    </div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-icon active-users">
                                        <i className="fas fa-user-check"></i>
                                    </div>
                                    <div className="stat-info">
                                        <h3>{adminStats.activeUsers}</h3>
                                        <p>একটিভ ইউজার</p>
                                    </div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-icon premium-users">
                                        <i className="fas fa-crown"></i>
                                    </div>
                                    <div className="stat-info">
                                        <h3>{adminStats.premiumUsers}</h3>
                                        <p>প্রিমিয়াম ইউজার</p>
                                    </div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-icon total-earnings">
                                        <i className="fas fa-coins"></i>
                                    </div>
                                    <div className="stat-info">
                                        <h3>{adminStats.totalEarnings} HQ</h3>
                                        <p>মোট আয়</p>
                                    </div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-icon pending-deposits">
                                        <i className="fas fa-money-bill-wave"></i>
                                    </div>
                                    <div className="stat-info">
                                        <h3>{adminStats.pendingDeposits}</h3>
                                        <p>পেন্ডিং ডিপোজিট</p>
                                    </div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-icon pending-withdrawals">
                                        <i className="fas fa-hand-holding-usd"></i>
                                    </div>
                                    <div className="stat-info">
                                        <h3>{adminStats.pendingWithdrawals}</h3>
                                        <p>পেন্ডিং উইথড্র</p>
                                    </div>
                                </div>
                            </div>

                            <div className="recent-activities">
                                <h3>সাম্প্রতিক এক্টিভিটি</h3>
                                <div className="activities-list">
                                    {recentActivities.map(activity => (
                                        <div key={activity.id} className="activity-item">
                                            <div className="activity-icon">
                                                <i className={`fas fa-${activity.action.includes('ডিপোজিট') ? 'money-bill-wave' : activity.action.includes('উইথড্র') ? 'hand-holding-usd' : 'tasks'}`}></i>
                                            </div>
                                            <div className="activity-details">
                                                <h4>{activity.user}</h4>
                                                <p>{activity.action} - {activity.amount}</p>
                                                <span className="activity-time">{activity.time}</span>
                                            </div>
                                            <div className="activity-actions">
                                                {activity.status === 'pending' && (
                                                    <>
                                                        <button 
                                                            className="btn btn-success btn-sm"
                                                            onClick={() => handleApprove('Activity', activity.id)}
                                                        >
                                                            অ্যাপ্রুভ
                                                        </button>
                                                        <button 
                                                            className="btn btn-danger btn-sm"
                                                            onClick={() => handleReject('Activity', activity.id)}
                                                        >
                                                            রিজেক্ট
                                                        </button>
                                                    </>
                                                )}
                                                {activity.status === 'approved' && (
                                                    <span className="status approved">অনুমোদিত</span>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'users' && (
                        <div className="users-tab">
                            <div className="tab-header">
                                <h3>ব্যবহারকারী ব্যবস্থাপনা</h3>
                                <button className="btn btn-primary">
                                    <i className="fas fa-plus"></i>
                                    নতুন ইউজার
                                </button>
                            </div>
                            <div className="users-table">
                                <div className="table-header">
                                    <span>ব্যবহারকারী</span>
                                    <span>যোগদান তারিখ</span>
                                    <span>স্ট্যাটাস</span>
                                    <span>ব্যালেন্স</span>
                                    <span>একশন</span>
                                </div>
                                <div className="table-body">
                                    {usersData.map(user => (
                                        <div key={user.id} className="table-row">
                                            <div className="user-info">
                                                <div className="user-name">{user.name}</div>
                                                <div className="user-details">
                                                    {user.email} | {user.phone}
                                                </div>
                                            </div>
                                            <div className="join-date">{user.joinDate}</div>
                                            <div className="status">
                                                <span className={`status-badge ${user.status}`}>
                                                    {user.status === 'active' ? 'একটিভ' : 'ইনএকটিভ'}
                                                </span>
                                                <span className={`type-badge ${user.type}`}>
                                                    {user.type === 'premium' ? 'প্রিমিয়াম' : 'নরমাল'}
                                                </span>
                                            </div>
                                            <div className="balance">{user.balance} HQ</div>
                                            <div className="actions">
                                                <button 
                                                    className="btn btn-success btn-sm"
                                                    onClick={() => handleUserAction('এডিট', user.id)}
                                                >
                                                    <i className="fas fa-edit"></i>
                                                </button>
                                                <button 
                                                    className="btn btn-info btn-sm"
                                                    onClick={() => handleUserAction('ব্যালেন্স এড', user.id)}
                                                >
                                                    <i className="fas fa-plus"></i>
                                                </button>
                                                <button 
                                                    className="btn btn-warning btn-sm"
                                                    onClick={() => handleUserAction('ব্যালেন্স কাট', user.id)}
                                                >
                                                    <i className="fas fa-minus"></i>
                                                </button>
                                                <button 
                                                    className="btn btn-danger btn-sm"
                                                    onClick={() => handleUserAction('ডিলিট', user.id)}
                                                >
                                                    <i className="fas fa-trash"></i>
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'deposits' && (
                        <div className="deposits-tab">
                            <div className="tab-header">
                                <h3>ডিপোজিট রিকোয়েস্ট</h3>
                            </div>
                            <div className="requests-list">
                                {depositRequests.map(request => (
                                    <div key={request.id} className="request-card">
                                        <div className="request-info">
                                            <div className="user-info">
                                                <h4>{request.user}</h4>
                                                <p>{request.phone} | {request.method}</p>
                                            </div>
                                            <div className="amount-info">
                                                <div className="amount">{request.amount}</div>
                                                <div className="hq-amount">{request.hqAmount}</div>
                                                <div className="transaction-id">TrxID: {request.transactionId}</div>
                                            </div>
                                            <div className="date">{request.date}</div>
                                        </div>
                                        <div className="request-actions">
                                            <button 
                                                className="btn btn-success"
                                                onClick={() => handleApprove('ডিপোজিট', request.id)}
                                            >
                                                অ্যাপ্রুভ
                                            </button>
                                            <button 
                                                className="btn btn-danger"
                                                onClick={() => handleReject('ডিপোজিট', request.id)}
                                            >
                                                রিজেক্ট
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'withdrawals' && (
                        <div className="withdrawals-tab">
                            <div className="tab-header">
                                <h3>উইথড্র রিকোয়েস্ট</h3>
                            </div>
                            <div className="requests-list">
                                {withdrawRequests.map(request => (
                                    <div key={request.id} className="request-card">
                                        <div className="request-info">
                                            <div className="user-info">
                                                <h4>{request.user}</h4>
                                                <p>{request.phone} | {request.method}</p>
                                            </div>
                                            <div className="amount-info">
                                                <div className="amount">{request.amount} HQ</div>
                                                <div className="received-amount">
                                                    প্রাপ্ত: {request.receivedAmount} HQ (৳ {request.money})
                                                </div>
                                            </div>
                                            <div className="date">{request.date}</div>
                                        </div>
                                        <div className="request-actions">
                                            <button 
                                                className="btn btn-success"
                                                onClick={() => handleApprove('উইথড্র', request.id)}
                                            >
                                                অ্যাপ্রুভ
                                            </button>
                                            <button 
                                                className="btn btn-danger"
                                                onClick={() => handleReject('উইথড্র', request.id)}
                                            >
                                                রিজেক্ট
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'tasks' && (
                        <div className="tasks-tab">
                            <div className="tab-header">
                                <h3>টাস্ক ব্যবস্থাপনা</h3>
                                <button className="btn btn-primary">
                                    <i className="fas fa-plus"></i>
                                    নতুন টাস্ক
                                </button>
                            </div>
                            <div className="coming-soon">
                                <h2>🛠️ কামিং সুন 🛠️</h2>
                                <p>এই সেকশনটি খুব শীঘ্রই আসছে...</p>
                            </div>
                        </div>
                    )}

                    {activeTab === 'settings' && (
                        <div className="settings-tab">
                            <div className="tab-header">
                                <h3>সিস্টেম সেটিংস</h3>
                            </div>
                            <div className="coming-soon">
                                <h2>⚙️ কামিং সুন ⚙️</h2>
                                <p>এই সেকশনটি খুব শীঘ্রই আসছে...</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;
