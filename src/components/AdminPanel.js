import React, { useState, useEffect } from 'react';
import './AdminPanel.css';

const AdminPanel = () => {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [editingUser, setEditingUser] = useState(null);
    const [newBalance, setNewBalance] = useState({});

    // সব ইউজার লোড করো
    useEffect(() => {
        const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
        setUsers(savedUsers);
    }, []);

    // ইউজার সেভ করো
    const saveUsers = (updatedUsers) => {
        setUsers(updatedUsers);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
    };

    // ইউজার খুঁজো
    const filteredUsers = users.filter(user => 
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.phone.includes(searchTerm)
    );

    // ইউজার এডিট শুরু করো
    const startEditUser = (user) => {
        setEditingUser(user);
        setNewBalance({
            random: user.balance?.random || 0,
            regular: user.balance?.regular || 0,
            premium: user.balance?.premium || 0,
            referral: user.balance?.referral || 0,
            deposit: user.balance?.deposit || 0
        });
    };

    // ব্যালেন্স আপডেট করো
    const updateBalance = () => {
        const updatedUsers = users.map(user => 
            user.id === editingUser.id 
                ? { 
                    ...user, 
                    balance: {
                        random: Number(newBalance.random) || 0,
                        regular: Number(newBalance.regular) || 0,
                        premium: Number(newBalance.premium) || 0,
                        referral: Number(newBalance.referral) || 0,
                        deposit: Number(newBalance.deposit) || 0
                    }
                }
                : user
        );
        saveUsers(updatedUsers);
        alert('ব্যালেন্স আপডেট করা হয়েছে!');
        setEditingUser(null);
    };

    // ব্যালেন্স যোগ করো
    const addBalance = (userId, type, amount) => {
        const updatedUsers = users.map(user => {
            if (user.id === userId) {
                const current = user.balance[type] || 0;
                return {
                    ...user,
                    balance: {
                        ...user.balance,
                        [type]: current + Number(amount)
                    }
                };
            }
            return user;
        });
        saveUsers(updatedUsers);
        alert(`${type} ব্যালেন্সে ${amount} HQ যোগ করা হয়েছে!`);
    };

    // ব্যালেন্স কাটো
    const deductBalance = (userId, type, amount) => {
        const updatedUsers = users.map(user => {
            if (user.id === userId) {
                const current = user.balance[type] || 0;
                const newAmount = Math.max(0, current - Number(amount));
                return {
                    ...user,
                    balance: {
                        ...user.balance,
                        [type]: newAmount
                    }
                };
            }
            return user;
        });
        saveUsers(updatedUsers);
        alert(`${type} ব্যালেন্স থেকে ${amount} HQ কাটা হয়েছে!`);
    };

    // ইউজার ডিলিট করো
    const deleteUser = (userId) => {
        if (window.confirm('আপনি কি নিশ্চিত এই ইউজার ডিলিট করতে চান?')) {
            const updatedUsers = users.filter(user => user.id !== userId);
            saveUsers(updatedUsers);
            alert('ইউজার ডিলিট করা হয়েছে!');
        }
    };

    // পাসওয়ার্ড চেঞ্জ করো
    const changePassword = (userId) => {
        const newPassword = prompt('নতুন পাসওয়ার্ড দিন:');
        if (newPassword) {
            const updatedUsers = users.map(user => 
                user.id === userId ? { ...user, password: newPassword } : user
            );
            saveUsers(updatedUsers);
            alert('পাসওয়ার্ড চেঞ্জ করা হয়েছে!');
        }
    };

    // নতুন ইউজার তৈরি করো
    const createNewUser = () => {
        const name = prompt('ইউজারের নাম দিন:');
        const email = prompt('ইউজারের ইমেইল দিন:');
        const phone = prompt('ইউজারের ফোন নম্বর দিন:');
        const password = prompt('পাসওয়ার্ড দিন:');

        if (name && email && phone && password) {
            const newUser = {
                id: Date.now(),
                name: name,
                email: email,
                phone: phone,
                password: password,
                type: 'normal',
                status: 'active',
                joinDate: new Date().toLocaleDateString('bn-BD'),
                referralCode: `REF${Date.now().toString().slice(-6)}`,
                balance: {
                    random: 0,
                    regular: 0,
                    premium: 0,
                    referral: 0,
                    deposit: 0
                },
                tasksCompleted: 0,
                totalEarnings: 0
            };

            const updatedUsers = [...users, newUser];
            saveUsers(updatedUsers);
            alert('নতুন ইউজার তৈরি করা হয়েছে!');
        }
    };

    // ইউজার একটিভ/ইনএকটিভ করো
    const toggleUserStatus = (userId) => {
        const updatedUsers = users.map(user => 
            user.id === userId 
                ? { ...user, status: user.status === 'active' ? 'inactive' : 'active' }
                : user
        );
        saveUsers(updatedUsers);
        alert('ইউজার স্ট্যাটাস চেঞ্জ করা হয়েছে!');
    };

    return (
        <div className="admin-panel">
            {/* হেডার */}
            <div className="admin-header">
                <h1>এডমিন প্যানেল</h1>
                <div className="header-actions">
                    <button className="btn btn-primary" onClick={createNewUser}>
                        <i className="fas fa-user-plus"></i>
                        নতুন ইউজার
                    </button>
                </div>
            </div>

            {/* সার্চ বক্স */}
            <div className="search-section">
                <div className="search-box">
                    <input 
                        type="text" 
                        placeholder="ইউজার খুঁজুন (নাম, ইমেইল, ফোন)"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <i className="fas fa-search"></i>
                </div>
                <div className="user-count">
                    মোট ইউজার: {users.length} জন
                </div>
            </div>

            {/* ইউজার টেবিল */}
            <div className="users-table-container">
                <table className="users-table">
                    <thead>
                        <tr>
                            <th>নাম</th>
                            <th>ইমেইল</th>
                            <th>ফোন</th>
                            <th>ব্যালেন্স</th>
                            <th>স্ট্যাটাস</th>
                            <th>একশন</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map(user => (
                            <tr key={user.id}>
                                <td>
                                    <div className="user-info">
                                        <strong>{user.name}</strong>
                                        <small>যোগ: {user.joinDate}</small>
                                    </div>
                                </td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>
                                    <div className="balance-display">
                                        <span>র‍্যান্ডম: {user.balance?.random || 0} HQ</span>
                                        <span>রেগুলার: {user.balance?.regular || 0} HQ</span>
                                        <span>রেফারেল: {user.balance?.referral || 0} HQ</span>
                                    </div>
                                </td>
                                <td>
                                    <span className={`status ${user.status}`}>
                                        {user.status === 'active' ? 'একটিভ' : 'ইনএকটিভ'}
                                    </span>
                                </td>
                                <td>
                                    <div className="action-buttons">
                                        <button className="btn btn-sm btn-edit" 
                                                onClick={() => startEditUser(user)}>
                                            <i className="fas fa-edit"></i> এডিট
                                        </button>
                                        <button className="btn btn-sm btn-password"
                                                onClick={() => changePassword(user.id)}>
                                            <i className="fas fa-key"></i> পাসওয়ার্ড
                                        </button>
                                        <button className="btn btn-sm btn-status"
                                                onClick={() => toggleUserStatus(user.id)}>
                                            <i className="fas fa-power-off"></i> স্ট্যাটাস
                                        </button>
                                        <button className="btn btn-sm btn-delete"
                                                onClick={() => deleteUser(user.id)}>
                                            <i className="fas fa-trash"></i> ডিলিট
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* ব্যালেন্স এডিট মডাল */}
            {editingUser && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3>ব্যালেন্স এডিট: {editingUser.name}</h3>
                            <button className="close-btn" onClick={() => setEditingUser(null)}>
                                <i className="fas fa-times"></i>
                            </button>
                        </div>

                        <div className="balance-edit-form">
                            <div className="balance-inputs">
                                <div className="input-group">
                                    <label>র‍্যান্ডম টাস্ক ব্যালেন্স</label>
                                    <input 
                                        type="number" 
                                        value={newBalance.random}
                                        onChange={(e) => setNewBalance({...newBalance, random: e.target.value})}
                                    />
                                </div>
                                <div className="input-group">
                                    <label>রেগুলার টাস্ক ব্যালেন্স</label>
                                    <input 
                                        type="number" 
                                        value={newBalance.regular}
                                        onChange={(e) => setNewBalance({...newBalance, regular: e.target.value})}
                                    />
                                </div>
                                <div className="input-group">
                                    <label>প্রিমিয়াম টাস্ক ব্যালেন্স</label>
                                    <input 
                                        type="number" 
                                        value={newBalance.premium}
                                        onChange={(e) => setNewBalance({...newBalance, premium: e.target.value})}
                                    />
                                </div>
                                <div className="input-group">
                                    <label>রেফারেল ব্যালেন্স</label>
                                    <input 
                                        type="number" 
                                        value={newBalance.referral}
                                        onChange={(e) => setNewBalance({...newBalance, referral: e.target.value})}
                                    />
                                </div>
                                <div className="input-group">
                                    <label>ডিপোজিট ব্যালেন্স</label>
                                    <input 
                                        type="number" 
                                        value={newBalance.deposit}
                                        onChange={(e) => setNewBalance({...newBalance, deposit: e.target.value})}
                                    />
                                </div>
                            </div>

                            <div className="quick-actions">
                                <h4>দ্রুত একশন:</h4>
                                <div className="quick-buttons">
                                    <button onClick={() => addBalance(editingUser.id, 'random', 100)}>
                                        র‍্যান্ডম +100
                                    </button>
                                    <button onClick={() => addBalance(editingUser.id, 'regular', 100)}>
                                        রেগুলার +100
                                    </button>
                                    <button onClick={() => addBalance(editingUser.id, 'referral', 100)}>
                                        রেফারেল +100
                                    </button>
                                    <button onClick={() => deductBalance(editingUser.id, 'random', 100)}>
                                        র‍্যান্ডম -100
                                    </button>
                                    <button onClick={() => deductBalance(editingUser.id, 'regular', 100)}>
                                        রেগুলার -100
                                    </button>
                                </div>
                            </div>

                            <div className="form-actions">
                                <button className="btn btn-primary" onClick={updateBalance}>
                                    ব্যালেন্স সেভ করুন
                                </button>
                                <button className="btn btn-secondary" onClick={() => setEditingUser(null)}>
                                    বাতিল
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminPanel;
