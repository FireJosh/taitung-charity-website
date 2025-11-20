import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Home.css';

const Home = () => {
    const newsItems = [
        {
            id: 1,
            title: '偏鄉物資發放活動',
            date: '2023-11-15',
            excerpt: '感謝各界善心人士的捐贈，我們成功將物資送達偏鄉部落...',
            image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 2,
            title: '獨居長者關懷探訪',
            date: '2023-11-10',
            excerpt: '志工團隊前往探訪獨居長者，送上溫暖的問候與陪伴...',
            image: 'https://images.unsplash.com/photo-1516307073050-4a6ddaddfd03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 3,
            title: '急難救助專案啟動',
            date: '2023-11-05',
            excerpt: '針對近期受災家庭，本會已啟動急難救助專案，提供緊急援助...',
            image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        }
    ];

    return (
        <div className="page-home">
            {/* Hero Section */}
            <section className="hero">
                <div className="container hero-content">
                    <h1>決定愛的力量</h1>
                    <p>One Click 一鍵生成愛</p>
                    <Link to="/get-involved" className="btn btn-accent btn-lg">立即捐款</Link>
                </div>
            </section>

            {/* Intro Section */}
            <section className="section intro-section">
                <div className="container intro-content">
                    <h2 className="section-title">關於臺東後山慈善會</h2>
                    <p className="intro-text">
                        我們致力於關懷臺東偏鄉弱勢族群，透過物資發放、急難救助與老人照護，
                        將社會的愛心傳遞到每一個需要的角落。您的每一次支持，都是改變生命的力量。
                    </p>
                    <Link to="/about" className="btn btn-primary">了解更多</Link>
                </div>
            </section>

            {/* Latest News Section */}
            <section className="section news-section">
                <div className="container">
                    <h2 className="section-title">最新消息</h2>
                    <div className="news-grid">
                        {newsItems.map(item => (
                            <article key={item.id} className="news-card">
                                <div className="news-image" style={{ backgroundImage: `url(${item.image})` }}></div>
                                <div className="news-content">
                                    <span className="news-date">{item.date}</span>
                                    <h3 className="news-title">{item.title}</h3>
                                    <p className="news-excerpt">{item.excerpt}</p>
                                    <Link to="/news" className="read-more">
                                        閱讀更多 <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
