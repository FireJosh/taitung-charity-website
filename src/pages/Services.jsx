import React from 'react';
import { HeartHandshake, Users, Ambulance } from 'lucide-react';
import './Services.css';

const Services = () => {
    const services = [
        {
            id: 1,
            title: '弱勢關懷與救助',
            description: '定期訪視偏鄉弱勢家庭，提供生活物資、急難救助金，協助改善基本生活條件，讓愛心深入每一個需要的角落。',
            icon: <HeartHandshake size={48} />,
            image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 2,
            title: '老人照護與陪伴',
            description: '針對獨居長者提供送餐服務、居家關懷與健康諮詢，並定期舉辦長青活動，排解長者孤獨感，建立社區支持網絡。',
            icon: <Users size={48} />,
            image: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 3,
            title: '急難救助專案',
            description: '針對天災、意外事故或突發性變故之家庭，提供即時性的緊急援助，協助受災戶度過難關，重建生活。',
            icon: <Ambulance size={48} />,
            image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        }
    ];

    return (
        <div className="page-services">
            <div className="services-hero">
                <div className="container">
                    <h1>服務項目</h1>
                    <p>我們提供多元化的服務，全方位守護弱勢族群。</p>
                </div>
            </div>

            {/* Services Grid */}
            <section className="section">
                <div className="container">
                    <div className="services-grid">
                        {services.map(service => (
                            <div key={service.id} className="service-card">
                                <div className="service-image" style={{ backgroundImage: `url(${service.image})` }}></div>
                                <div className="service-content">
                                    <div className="service-icon">{service.icon}</div>
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="section stats-section">
                <div className="container">
                    <h2 className="section-title" style={{ color: 'white' }}>服務成果</h2>
                    <div className="stats-grid">
                        <div className="stat-item">
                            <h3>5,000+</h3>
                            <p>服務人次</p>
                        </div>
                        <div className="stat-item">
                            <h3>10,000+</h3>
                            <p>發放物資 (件)</p>
                        </div>
                        <div className="stat-item">
                            <h3>120+</h3>
                            <p>志工夥伴</p>
                        </div>
                        <div className="stat-item">
                            <h3>50+</h3>
                            <p>合作社區</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
