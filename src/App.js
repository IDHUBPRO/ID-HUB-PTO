import React, { createContext, useContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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

// Authentication Context
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);

  // Load users from localStorage on component mount
  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const savedCurrentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    setUsers(savedUsers);
    if (savedCurrentUser) {
      setCurrentUser(savedCurrentUser);
    }
  }, []);

  // Save users to localStorage whenever users state changes
  useEffect(() => {
    if (users.length > 0) {
      localStorage.setItem('users', JSON.stringify(users));
    }
  }, [users]);

  // Login Function
  const login = (email, password) => {
    // Default admin account
    if (email === 'admin@hqincome.com' && password === 'admin123') {
      const adminUser = {
        id: 1,
        name: 'এডমিন',
        email: 'admin@hqincome.com',
        type: 'admin',
        status: 'active',
        balance: {
          random: 0,
          regular: 0,
          premium: 0,
          referral: 0,
          deposit: 0
        }
      };
      setCurrentUser(adminUser);
      localStorage.setItem('currentUser', JSON.stringify(adminUser));
      return true;
    }

    // Regular user login
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      setCurrentUser(user);
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }
    return false;
  };

  // Register Function
  const register = (userData) => {
    const newUser = {
      id: Date.now(),
      ...userData,
      balance: {
        random: 0,
        regular: 0,
        premium: 0,
        referral: 0,
        deposit: 0
      },
      type: 'normal',
      status: 'active',
      joinDate: new Date().toLocaleDateString('bn-BD'),
      referralCode: `REF${Date.now().toString().slice(-6)}`,
      tasksCompleted: 0,
      totalEarnings: 0
    };
    
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    setCurrentUser(newUser);
    
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    localStorage.setItem('currentUser', JSON.stringify(newUser));

    return true;
  };

  // Logout Function
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
  };

  // Update User Balance
  const updateUserBalance = (userId, type, amount) => {
    const updatedUsers = users.map(user => {
      if (user.id === userId) {
        const currentBalance = user.balance[type] || 0;
        return {
          ...user,
          balance: {
            ...user.balance,
            [type]: currentBalance + amount
          },
          totalEarnings: user.totalEarnings + amount
        };
      }
      return user;
    });
    
    setUsers(updatedUsers);
    
    // Update current user if needed
    if (currentUser && currentUser.id === userId) {
      const updatedCurrentUser = updatedUsers.find(u => u.id === userId);
      setCurrentUser(updatedCurrentUser);
      localStorage.setItem('currentUser', JSON.stringify(updatedCurrentUser));
    }
  };

  const authValue = {
    currentUser,
    users,
    login,
    register,
    logout,
    updateUserBalance
  };

  return (
    <AuthContext.Provider value={authValue}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route 
              path="/dashboard" 
              element={currentUser ? <Dashboard /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/tasks" 
              element={currentUser ? <Tasks /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/premium" 
              element={currentUser ? <Premium /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/balance" 
              element={currentUser ? <Balance /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/referral" 
              element={currentUser ? <Referral /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/deposit" 
              element={currentUser ? <Deposit /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/withdraw" 
              element={currentUser ? <Withdraw /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/profile" 
              element={currentUser ? <Profile /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/admin" 
              element={currentUser && currentUser.type === 'admin' ? <AdminPanel /> : <Navigate to="/dashboard" />} 
            />
          </Routes>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
