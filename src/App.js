import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Tasks from './components/Tasks';
import Premium from './components/Premium';
import Balance from './components/Balance';
import Referral from './components/Referral';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';
import Profile from './components/Profile';
import AdminPanel from './components/AdminPanel';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/tasks" element={<Tasks />} />
                    <Route path="/premium" element={<Premium />} />
                    <Route path="/balance" element={<Balance />} />
                    <Route path="/referral" element={<Referral />} />
                    <Route path="/deposit" element={<Deposit />} />
                    <Route path="/withdraw" element={<Withdraw />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/admin" element={<AdminPanel />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
