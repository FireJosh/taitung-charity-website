import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import './News.css';

const News = () => {
    const events = [
        {
            id: 1,
            day: '25',
            month: 'DEC',
            title: '聖誕送暖 - 偏鄉兒童圓夢計畫',
            location: '臺東縣海端鄉',
            description: '邀請您一同化身聖誕老人，為偏鄉兒童送上聖誕禮物與祝福，讓孩子們度過一個溫馨的節日。'
        },
        {
            id: 2,
            day: '15',
            month: 'JAN',
            title: '寒冬送暖 - 獨居長者圍爐活動',
            location: '臺東市社區活動中心',
            description: '歲末年終，我們將舉辦圍爐活動，邀請獨居長者共進午餐，感受團圓的氣氛。'
        },
        {
            id: 3,
            day: '05',
            month: 'FEB',
            title: '新春義賣市集',
            location: '鐵花村音樂聚落',
            description: '集結在地小農與手作職人，義賣所得將全數捐贈給本會急難救助專戶。'
        }
    ];

    const galleryImages = [
        'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1516307073050-4a6ddaddfd03?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    ];

    return (
        <div className="page-news">
            <div className="news-hero">
                <div className="container">
                    <h1>最新消息與活動</h1>
                    <p>追蹤我們的最新動態，參與我們的公益活動。</p>
                </div>
            </div>

            {/* Upcoming Events */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">即將舉辦的活動</h2>
                    <div className="events-list">
                        {events.map(event => (
                            <div key={event.id} className="event-card">
                                <div className="event-date-box">
                                    <span className="event-day">{event.day}</span>
                                    <span className="event-month">{event.month}</span>
                                </div>
                                <div className="event-details">
                                    <h3>{event.title}</h3>
                                    <div className="event-meta">
                                        <span><MapPin size={16} style={{ verticalAlign: 'text-bottom' }} /> {event.location}</span>
                                    </div>
                                    <p>{event.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Photo Gallery */}
            <section className="section" style={{ backgroundColor: 'var(--bg-light)' }}>
                <div className="container">
                    <h2 className="section-title">活動花絮</h2>
                    <div className="gallery-grid">
                        {galleryImages.map((img, index) => (
                            <div key={index} className="gallery-item">
                                <img src={img} alt={`Gallery ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default News;
