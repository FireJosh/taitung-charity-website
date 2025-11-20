import React from 'react';
import { Target, Heart, ShieldCheck } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <div className="page-about">
            <div className="about-hero">
                <div className="container">
                    <h1>關於我們</h1>
                    <p>凝聚愛心，傳遞溫暖，守護後山每一個需要幫助的靈魂。</p>
                </div>
            </div>

            {/* Mission & Vision */}
            <section className="section mission-vision-section">
                <div className="container">
                    <div className="mv-grid">
                        <div className="mv-card">
                            <Heart size={48} className="mv-icon" />
                            <h3>服務宗旨</h3>
                            <p>
                                我們深信「愛」是改變世界最大的力量。透過匯集社會大眾的善心，
                                我們致力於消除貧困與孤獨，讓每一位弱勢者都能感受到社會的溫暖與關懷。
                            </p>
                        </div>
                        <div className="mv-card">
                            <Target size={48} className="mv-icon" />
                            <h3>服務願景</h3>
                            <p>
                                建立一個互助共好的社會網絡，讓臺東後山的每一個角落都充滿愛與希望。
                                我們期許成為最值得信賴的慈善平台，連結捐助者與受助者。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* History Timeline */}
            <section className="section history-section">
                <div className="container">
                    <h2 className="section-title">發展沿革</h2>
                    <div className="timeline">
                        <div className="timeline-item left">
                            <div className="timeline-content">
                                <h3>2023</h3>
                                <p>啟動「One Click 一鍵生成愛」數位轉型計畫，擴大服務範圍。</p>
                            </div>
                        </div>
                        <div className="timeline-item right">
                            <div className="timeline-content">
                                <h3>2020</h3>
                                <p>成立急難救助專案小組，針對突發性災難提供即時援助。</p>
                            </div>
                        </div>
                        <div className="timeline-item left">
                            <div className="timeline-content">
                                <h3>2015</h3>
                                <p>正式登記成立「臺東後山慈善會」，致力於在地弱勢關懷。</p>
                            </div>
                        </div>
                        <div className="timeline-item right">
                            <div className="timeline-content">
                                <h3>2010</h3>
                                <p>一群熱心志工發起草創，開始不定期的物資發放活動。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Legal Info */}
            <section className="section legal-section">
                <div className="container">
                    <h2 className="section-title">合法登記資訊</h2>
                    <div className="legal-info">
                        <ShieldCheck size={48} style={{ color: 'var(--primary-color)', marginBottom: '1rem' }} />
                        <p><strong>立案證書字號：</strong> 台內社字第XXXXXXXX號</p>
                        <p><strong>統一編號：</strong> XXXXXXXX</p>
                        <p><strong>法人登記：</strong> 登記簿第XX冊第XX頁第XX號</p>
                        <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--text-light)' }}>
                            本會財務公開透明，定期公告捐款徵信與財務報表，歡迎各界監督指教。
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
