import React from 'react';
import { Link } from 'react-router-dom';
import GridBackground from '../../components/GridBackground';
import Navbar from '../../sections/navbar';
import Footer from '../../sections/footer';
import useSEO from '../../hooks/useSEO';
import { optimizeCloudinaryUrl } from '../../utils/cloudinary';
import './event.css';

// Centralized EVENTS_DATA with live events and high-res cover photos
export const EVENTS_DATA = {
    'ays': {
        title: 'Atal Yuva Sansad',
        date: '12.06.2026 - 14.06.2026',
        venue: "Kiddy's Corner HR. Secondary School, Gwalior",
        driveLink: 'https://drive.google.com/drive/folders/1rmH7wALWHS1cOcav5_vqGmTwzSGYHeP-?usp=sharing',
        ogImage: '/og-image-ays.png',
        coverImage: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1781274038/IMG_2818_tipknu.jpg',
        description: 'Capturing the vibrant energy, diplomatic debates, and youth leadership at Gwalior\'s premier student parliament.',
        images: [
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1781274038/IMG_2818_tipknu.jpg', aspect: 'landscape' },
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1781274081/IMG_3109_xoykbs.jpg', aspect: 'portrait' },
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1781274060/IMG_3032_eoknh8.jpg', aspect: 'landscape' },
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1781274087/IMG_3102_s3hbip.jpg', aspect: 'portrait' },
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1781281757/IMG_2993_pgew0c.jpg', aspect: 'portrait' },
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1781369425/IMG_3526_jfwzfb.jpg', aspect: 'landscape' },
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1781369372/IMG_3497_rb7puu.jpg', aspect: 'portrait' },
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1781369216/IMG_3238_rikkhh.jpg', aspect: 'landscape' },
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1781369300/IMG_3363_verkpw.jpg', aspect: 'landscape' },
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1781369974/IMG_3283_vcwal1.jpg', aspect: 'portrait' },
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1781369840/IMG_3664_syyka5.jpg', aspect: 'landscape' },
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1781369436/IMG_3638_jjuth5.jpg', aspect: 'portrait' },
        ]
    },
};

const EventGalleryPage = () => {
    useSEO({
        title: 'Events',
        description: 'A list of live photography showcases and event coverages captured by Harshvardhan Rawat (.rwt).'
    });

    return (
        <>
            <GridBackground />
            <Navbar />
            <main id="event-gallery-page-main">
                <section className="events-gallery-hero">
                    <div className="events-gallery-hero-grid">
                        <div className="events-gallery-header-wrapper fade-in">
                            <div className="events-gallery-title-container">
                                <span className="text-mono events-gallery-tag">.photography showcase</span>
                                <h1 className="events-gallery-title">events</h1>
                            </div>

                            <div className="events-gallery-icon-wrapper">
                                <div className="events-gallery-icon">
                                    <div className="line"></div>
                                    <div className="circle"></div>
                                </div>
                            </div>
                        </div>

                        <div className="events-gallery-description-wrapper slide-up">
                            <p className="events-gallery-subtitle">
                                a curated collection of live event coverages, student summits, and parliamentary simulations documented through the lens.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="events-grid-section">
                    <div className="events-grid-container">
                        <div className="events-grid">
                            {Object.entries(EVENTS_DATA).map(([slug, event]) => {
                                const cover = event.coverImage || event.images[0].url;
                                return (
                                    <Link to={`/events/${slug}`} key={slug} className="event-gallery-card">
                                        <div className="event-card-image-wrapper">
                                            <img
                                                src={optimizeCloudinaryUrl(cover, 800)}
                                                alt={event.title}
                                                className="event-card-cover-image"
                                                loading="lazy"
                                            />
                                            <div className="event-card-hover-overlay">
                                                <span className="text-mono view-showcase-btn">view showcase →</span>
                                            </div>
                                        </div>
                                        <div className="event-card-details">
                                            <div className="event-card-meta">
                                                <span className="text-mono event-card-date">{event.date}</span>
                                            </div>
                                            <h3 className="event-card-title">{event.title}</h3>
                                            <p className="event-card-description">{event.description}</p>
                                            <span className="text-mono event-card-venue">{event.venue}</span>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default EventGalleryPage;
