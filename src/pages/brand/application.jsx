import React from 'react';
import './brand.css';
import { optimizeCloudinaryUrl } from '../../utils/cloudinary';

const Application = () => {
    return (
        <div className="brand-cell dark">
            <div className="cell-header">
                <span className="cell-title">03 / APPLICATIONS</span>
                <span className="cell-corner-mark">+</span>
            </div>

            <div className="cell-body">
                <div className="app-mockups-container">
                    {/* Card Mockup 1: Dark */}
                    <div className="card-mockup">
                        <img src="/logo.png" alt="logo" style={{ height: '24px', width: 'auto', objectFit: 'contain', filter: 'invert(1)' }} />
                        <div className="card-details">
                            <span className="card-role" style={{ color: '#888888', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                DESIGN. CREATE. BUILD.
                            </span>
                        </div>
                        {/* Absolute positioned small corner mark */}
                        <span className="subbrand-title" style={{ position: 'absolute', right: '1.5rem', bottom: '1.2rem', fontSize: '1.2rem', color: '#888888' }}>
                            .r
                        </span>
                    </div>

                    {/* Card Mockup 2: Light */}
                    <div className="card-mockup light">
                        <div>
                            <span className="card-name" style={{ fontSize: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                                Harshvardhan Rawat
                            </span>
                            <div className="card-role" style={{ fontSize: '0.55rem', color: '#666666', marginTop: '2px' }}>
                                developer — designer
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                            <div className="card-contact">
                                <div>hello@dotrwt.in</div>
                                <div>www.dotrwt.in</div>
                            </div>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E1E1E" strokeWidth="1.5">
                                <path d="M 6 10 L 6 6 L 10 6" />
                                <path d="M 18 10 L 18 6 L 14 6" />
                                <path d="M 6 14 L 6 18 L 10 18" />
                                <path d="M 18 14 L 18 18 L 14 18" />
                                <circle cx="12" cy="12" r="2.5" fill="#1E1E1E" />
                            </svg>
                        </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        {/* Circular Stamp Mockup */}
                        <div className="circular-stamp" style={{ border: 'none' }}>
                            <img
                                src={optimizeCloudinaryUrl("https://res.cloudinary.com/dph28qrrx/image/upload/v1783321534/Stamp_s8z9qw.png", 200)}
                                alt="Stamp"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                    borderRadius: '50%'
                                }}
                            />
                        </div>

                        {/* Sticker Mockup */}
                        <div className="sticker-mockup">
                            <img src="/logo.png" alt="logo" style={{ height: '30px', width: 'auto', objectFit: 'contain' }} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="cell-footer">
                COLLATERAL & PHYSICAL STATIONERY MOCKUPS
            </div>
        </div>
    );
};

export default Application;
