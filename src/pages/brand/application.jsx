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
                    <div className="card-mockup" style={{ padding: 0, overflow: 'hidden', position: 'relative' }}>
                        <img 
                            src={optimizeCloudinaryUrl("https://res.cloudinary.com/dph28qrrx/image/upload/v1783326423/stampAppli_p5bqfq.png", 400)} 
                            alt="dotrwt brand stamp application card mockup" 
                            loading="lazy"
                            style={{ 
                                width: '100%', 
                                height: '100%', 
                                objectFit: 'cover' 
                            }} 
                        />
                    </div>

                    {/* Card Mockup 2: Light */}
                    <div className="card-mockup light" style={{ padding: 0, overflow: 'hidden', position: 'relative' }}>
                        <img 
                            src={optimizeCloudinaryUrl("https://res.cloudinary.com/dph28qrrx/image/upload/v1783327724/card_joy9gz.png", 400)} 
                            alt="dotrwt business card design mockup" 
                            loading="lazy"
                            style={{ 
                                width: '100%', 
                                height: '100%', 
                                objectFit: 'cover' 
                            }} 
                        />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        {/* Circular Stamp Mockup */}
                        <div className="circular-stamp" style={{ border: 'none' }}>
                            <img
                                src={optimizeCloudinaryUrl("https://res.cloudinary.com/dph28qrrx/image/upload/v1783321534/Stamp_s8z9qw.png", 200)}
                                alt="dotrwt circular signature stamp mockup"
                                loading="lazy"
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
                            <img 
                                src="/logo.png" 
                                alt="dotrwt brand sticker logo" 
                                loading="lazy"
                                style={{ height: '30px', width: 'auto', objectFit: 'contain' }} 
                            />
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
