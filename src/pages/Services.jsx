import React from 'react';
import { HeartHandshake, Users, Ambulance, Home, Gift, Accessibility } from 'lucide-react';
import './Services.css';

const Services = () => {
    const services = [
        {
            id: 1,
            title: '發放物資',
            description: '定期訪視偏鄉弱勢家庭，提供生活物資（如白米、罐頭等），協助改善基本生活條件。',
            icon: <Gift size={48} />,
            image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 2,
            title: '急難救助 & 捐棺',
            description: '針對突發性災難提供即時援助，並協助無力殮葬之貧困家庭圓滿身後事（捐棺服務）。',
            icon: <Ambulance size={48} />,
            image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 3,
            title: '房屋修繕',
            description: '協助弱勢家庭進行水電維修、漏水屋頂修繕，改善居住環境安全。',
            icon: <Home size={48} />,
            image: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 4,
            title: '三節福利',
            description: '於重要節日傳遞溫暖：端午節送粽子、中秋節送月餅、春節發送年菜，讓弱勢族群也能感受過節氣氛。',
            icon: <HeartHandshake size={48} />,
            image: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 5,
            title: '輔具贈送',
            description: '提供輪椅、助行器等輔具給予需要的長者或身心障礙人士，提升其生活便利性。',
            icon: <Accessibility size={48} />,
            image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 6,
            title: '老人照護與陪伴',
            description: '針對獨居長者提供關懷訪視，排解孤獨感，建立社區支持網絡。',
            icon: <Users size={48} />,
            image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
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
