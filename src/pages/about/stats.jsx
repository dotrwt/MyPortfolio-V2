import React from 'react';
import './about.css';

const Stats = () => {
    return (
        <section className="stats-section">
            <div className="stats-container">

                <div className="stats-content">
                    <div className="stat-item">
                        <div className="stat-header">
                            <span className="stat-label">.experience</span>
                            <div className="stat-line"></div>
                        </div>
                        <p className="stat-value">4+ organizations</p>
                    </div>
                    <div className="stat-item">
                        <div className="stat-header">
                            <span className="stat-label">.location</span>
                            <div className="stat-line"></div>
                        </div>
                        <p className="stat-value">India (IST)</p>
                    </div>
                    <div className="stat-item">
                        <div className="stat-header">
                            <span className="stat-label">.open for work</span>
                            <div className="stat-line"></div>
                        </div>
                        <p className="stat-value">Available</p>
                    </div>
                </div>

                {/* Decorative element */}
                <div className="stats-decorative-target">
                    <div className="target-inner"></div>
                </div>
            </div>
        </section>
    );
};

export default Stats;