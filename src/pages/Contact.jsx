import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('感謝您的訊息，我們會盡快回覆您！');
    };

    return (
        <div className="page-contact">
            <div className="contact-hero">
                <div className="container">
                    <h1>聯絡我們</h1>
                    <p>有任何問題或建議？歡迎隨時與我們聯繫。</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="contact-container">
                        {/* Contact Info */}
                        <div className="contact-info-box">
                            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>聯絡資訊</h2>

                            <div className="info-item">
                                <MapPin size={24} className="info-icon" />
                                <div className="info-content">
                                    <h3>地址</h3>
                                    <p>950 臺東縣臺東市中華路一段XXX號</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <Phone size={24} className="info-icon" />
                                <div className="info-content">
                                    <h3>電話</h3>
                                    <p>089-XXX-XXX</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <Mail size={24} className="info-icon" />
                                <div className="info-content">
                                    <h3>電子郵件</h3>
                                    <p>info@taitungcharity.org</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <Clock size={24} className="info-icon" />
                                <div className="info-content">
                                    <h3>服務時間</h3>
                                    <p>週一至週五 09:00 - 18:00</p>
                                </div>
                            </div>

                            <div className="map-container">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.5!2d121.1!3d22.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQ1JzAwLjAiTiAxMjHCsDA5JzAwLjAiRQ!5e0!3m2!1szh-TW!2stw!4v1620000000000!5m2!1szh-TW!2stw"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    title="Google Maps"
                                ></iframe>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-box">
                            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>傳送訊息</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">姓名</label>
                                    <input type="text" id="name" className="form-control" required placeholder="您的姓名" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">電子郵件</label>
                                    <input type="email" id="email" className="form-control" required placeholder="your@email.com" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="subject">主旨</label>
                                    <input type="text" id="subject" className="form-control" required placeholder="訊息主旨" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">訊息內容</label>
                                    <textarea id="message" className="form-control" required placeholder="請輸入您的訊息..."></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>送出訊息</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
