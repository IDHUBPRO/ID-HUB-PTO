import React, { useState } from 'react';
import './Tasks.css';

const Tasks = () => {
    const [activeTab, setActiveTab] = useState('random');
    const [submittedTasks, setSubmittedTasks] = useState([]);

    const tasksData = {
        random: [
            { id: 1, title: 'YouTube Subscribe', reward: '10 HQ', status: 'available' },
            { id: 2, title: 'Facebook Like', reward: '8 HQ', status: 'available' },
            { id: 3, title: 'Instagram Follow', reward: '12 HQ', status: 'completed' }
        ],
        regular: [
            { 
                id: 1, 
                title: 'জিমেইল অ্যাকাউন্ট তৈরি', 
                reward: '120 HQ', 
                type: 'email',
                fields: ['জিমেইল', 'পাসওয়ার্ড'],
                status: 'available'
            },
            { 
                id: 2, 
                title: 'ফেসবুক অ্যাকাউন্ট তৈরি', 
                reward: '50 HQ', 
                type: 'facebook',
                fields: ['ফেসবুক লিংক/UID', 'পাসওয়ার্ড', '2FA', 'মেইল'],
                status: 'available'
            },
            { 
                id: 3, 
                title: 'ইনস্টাগ্রাম অ্যাকাউন্ট তৈরি', 
                reward: '25 HQ', 
                type: 'instagram',
                fields: ['ইউজারনেম', 'পাসওয়ার্ড', 'মেইল', '2FA'],
                status: 'available'
            }
        ],
        premium: [
            { id: 1, title: 'Premium Task 1', reward: '200 HQ', status: 'locked' },
            { id: 2, title: 'Premium Task 2', reward: '300 HQ', status: 'locked' }
        ]
    };

    const [submissionData, setSubmissionData] = useState({});

    const handleSubmitTask = (taskId, taskType) => {
        const taskData = submissionData[taskId];
        if (taskData) {
            const newTask = {
                id: Date.now(),
                taskId,
                taskType,
                data: taskData,
                submittedAt: new Date().toLocaleString(),
                status: 'pending'
            };
            setSubmittedTasks([...submittedTasks, newTask]);
            setSubmissionData({...submissionData, [taskId]: {}});
            alert('টাস্ক সফলভাবে জমা দেওয়া হয়েছে!');
        }
    };

    const handleInputChange = (taskId, fieldIndex, value) => {
        setSubmissionData({
            ...submissionData,
            [taskId]: {
                ...submissionData[taskId],
                [fieldIndex]: value
            }
        });
    };

    return (
        <div className="tasks-page">
            <header className="dashboard-header">
                <div className="container">
                    <div className="header-content">
                        <div className="logo">
                            <i className="fas fa-gem"></i>
                            <span>HQ ইনকাম - টাস্কস</span>
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
                <div className="tasks-container">
                    <div className="tasks-header">
                        <h1>টাস্ক সেকশন</h1>
                        <p>বিভিন্ন ধরনের টাস্ক সম্পন্ন করে আয় করুন</p>
                    </div>

                    <div className="tasks-tabs">
                        <button 
                            className={`tab-btn ${activeTab === 'random' ? 'active' : ''}`}
                            onClick={() => setActiveTab('random')}
                        >
                            <i className="fas fa-random"></i>
                            র্যান্ডম টাস্ক
                        </button>
                        <button 
                            className={`tab-btn ${activeTab === 'regular' ? 'active' : ''}`}
                            onClick={() => setActiveTab('regular')}
                        >
                            <i className="fas fa-calendar-alt"></i>
                            রেগুলার টাস্ক
                        </button>
                        <button 
                            className={`tab-btn ${activeTab === 'premium' ? 'active' : ''}`}
                            onClick={() => setActiveTab('premium')}
                        >
                            <i className="fas fa-crown"></i>
                            প্রিমিয়াম টাস্ক
                        </button>
                    </div>

                    <div className="tasks-content">
                        <div className="tasks-grid">
                            {tasksData[activeTab].map(task => (
                                <div key={task.id} className="task-card">
                                    <div className="task-header">
                                        <h3>{task.title}</h3>
                                        <span className="task-reward">{task.reward}</span>
                                    </div>
                                    
                                    {task.fields && (
                                        <div className="task-fields">
                                            {task.fields.map((field, index) => (
                                                <div key={index} className="form-group">
                                                    <label>{field}</label>
                                                    <input
                                                        type="text"
                                                        placeholder={`${field} লিখুন`}
                                                        value={submissionData[task.id]?.[index] || ''}
                                                        onChange={(e) => handleInputChange(task.id, index, e.target.value)}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    <div className="task-actions">
                                        {task.status === 'available' && task.fields ? (
                                            <button 
                                                className="btn btn-primary"
                                                onClick={() => handleSubmitTask(task.id, task.type)}
                                            >
                                                টাস্ক জমা দিন
                                            </button>
                                        ) : task.status === 'completed' ? (
                                            <button className="btn btn-success" disabled>
                                                সম্পন্ন হয়েছে
                                            </button>
                                        ) : task.status === 'locked' ? (
                                            <button className="btn btn-warning">
                                                প্রিমিয়াম প্রয়োজন
                                            </button>
                                        ) : (
                                            <button className="btn btn-primary">
                                                শুরু করুন
                                            </button>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Submitted Tasks Section */}
                    <div className="submitted-tasks">
                        <h2>জমা দেওয়া টাস্কস</h2>
                        <div className="tasks-list">
                            {submittedTasks.map(task => (
                                <div key={task.id} className="submitted-task-item">
                                    <div className="task-info">
                                        <h4>টাস্ক #{task.taskId}</h4>
                                        <p>জমা দেওয়ার সময়: {task.submittedAt}</p>
                                        <span className={`status ${task.status}`}>
                                            {task.status === 'pending' ? 'পেন্ডিং' : 
                                             task.status === 'approved' ? 'অনুমোদিত' : 'বাতিল'}
                                        </span>
                                    </div>
                                    <div className="task-reward">
                                        +{tasksData.regular.find(t => t.id === task.taskId)?.reward || '0 HQ'}
                                    </div>
                                </div>
                            ))}
                            {submittedTasks.length === 0 && (
                                <p className="no-tasks">কোন টাস্ক জমা দেওয়া হয়নি</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tasks;
