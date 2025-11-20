import React from 'react';
import { Heart, Gift, Users, CheckCircle } from 'lucide-react';
import './GetInvolved.css';

const GetInvolved = () => {
    return (
        <div className="page-get-involved">
            <div className="get-involved-hero">
                <div className="container">
                    <h1>支持我們</h1>
                    <p>您的每一份支持，都是改變生命的力量。</p>
                </div>
            </div>

            {/* Donation Section */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">捐款支持</h2>
                    <div className="donation-options">
                        <div className="donation-card">
                            <Heart size={48} style={{ color: 'var(--primary-color)', marginBottom: '1rem' }} />
                            <h3>線上捐款</h3>
                            <p>透過安全的線上金流系統，快速方便地捐款支持我們的服務。</p>
                            <button className="btn btn-primary">立即捐款</button>
                        </div>

                        <div className="donation-card">
                            <Gift size={48} style={{ color: 'var(--primary-color)', marginBottom: '1rem' }} />
                            <h3>銀行匯款</h3>
                            <p>您可以透過銀行轉帳或臨櫃匯款的方式進行捐贈。</p>
                            <div className="bank-details">
                                <p>銀行：臺灣銀行臺東分行 (004)</p>
                                <p>戶名：臺東後山慈善會</p>
                                <p>帳號：023-XXX-XXXXXX</p>
                            </div>
                        </div>

                        <div className="donation-card">
                            <CheckCircle size={48} style={{ color: 'var(--primary-color)', marginBottom: '1rem' }} />
                            <h3>物資捐贈</h3>
                            <p>我們目前急需以下物資：白米、罐頭、成人紙尿褲、輪椅。</p>
                            <button className="btn btn-accent">查看物資清單</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Volunteer Section */}
            <section className="section volunteer-section">
                <div className="container volunteer-content">
                    <Users size={64} style={{ color: 'var(--primary-color)', margin: '0 auto' }} />
                    <h2 className="section-title" style={{ marginBottom: '1rem' }}>加入志工行列</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-light)' }}>
                        我們需要您的熱情與專長！無論是活動支援、行政協助，還是專業技能服務，
                        您的參與將為慈善工作注入更多活力。
                    </p>
                    <button className="btn btn-primary btn-lg">填寫志工報名表</button>
                </div>
            </section>

            {/* Voting Project Section */}
            <section className="section voting-section">
                <div className="container">
                    <h2 className="section-title">專案投票支持</h2>
                    <div className="voting-container">
                        <p style={{ fontSize: '1.2rem' }}>
                            請支持我們的「偏鄉兒童數位學習計畫」，為孩子們爭取更多學習資源。
                            您的每一票都至關重要！
                        </p>
                        <div className="qr-code-placeholder">
                            QR Code 掃碼投票
                        </div>
                        <button className="btn btn-accent">前往投票頁面</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GetInvolved;
