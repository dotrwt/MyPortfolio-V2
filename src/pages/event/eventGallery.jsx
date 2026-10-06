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
    'bhajmanbeats': {
        title: 'Bhajman Beats',
        date: '27.09.2026',
        venue: "Madhav Institute of Technology and Science, Gwalior",
        driveLink: 'https://drive.google.com/drive/folders/1rKexqfMTo9Jcvw_sNPNYsdx58UwyvFby?usp=sharing',
        coverImage: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1791303259/IMG_9435_zz1fjb.jpg ',
        images: [
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1791303213/IMG_9603_puxir5.jpg', aspect: 'landscape' },
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1791303324/IMG_9431_nd7dfc.jpg', aspect: 'portrait' },
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1791303259/IMG_9435_zz1fjb.jpg', aspect: 'landscape' },
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1791303338/IMG_9698_qybd8v.jpg', aspect: 'portrait' },
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1791303417/IMG_9413_rq7uc5.jpg', aspect: 'portrait' },
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1791303364/IMG_9772_ihsi8s.jpg', aspect: 'landscape' },
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1791303459/IMG_1397_mrbuvz.heic', aspect: 'portrait' },
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1791303464/IMG_9675_qiuwd6.jpg', aspect: 'landscape' },
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1791303737/IMG_9873_fnrotp.jpg', aspect: 'landscape' },
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1791303569/IMG_1428_whv9pe.heic', aspect: 'portrait' },
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1791303573/IMG_9416_wczxxv.jpg', aspect: 'landscape' },
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1791303574/IMG_9630_rdkn8n.jpg', aspect: 'portrait' },
        ]
    },
    'twt': {
        title: 'Weekend Theory - Yappers Club',
        date: '30.08.2026',
        venue: "Posham Pa Cafe, Gwalior",
        driveLink: 'https://drive.google.com/drive/folders/1m9Nx2K9yVYIG0zB_jTO5JCok3xdLXg23?usp=sharing',
        coverImage: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1788112487/09_riawgb.jpg ',
        images: [
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1788112491/01_hcb2ge.jpg', aspect: 'landscape' },
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1788112493/03_hymoou.jpg', aspect: 'portrait' },
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1788112486/04_syutj7.jpg', aspect: 'landscape' },
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1788112489/06_osnzns.jpg', aspect: 'portrait' },
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1788113037/IMG_7261_nr3vrc.jpg', aspect: 'portrait' },
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1788112498/02_xvnsiw.jpg', aspect: 'landscape' },
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1788113175/IMG_7287_ezdm03.jpg', aspect: 'portrait' },
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1788112498/07_kxn57v.jpg', aspect: 'landscape' },
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1788112487/09_riawgb.jpg', aspect: 'landscape' },
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1788113052/IMG_7243_m6gzct.jpg', aspect: 'portrait' },
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1788112499/08_thrq79.jpg', aspect: 'landscape' },
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1788112951/IMG_7263_uxqtyi.jpg', aspect: 'portrait' },
        ]
    },
    'dsk': {
        title: 'Drishtikon',
        date: '25.07.2026 - 26.07.2026',
        venue: "G.D. Goenka Public School, Gwalior",
        driveLink: 'https://drive.google.com/drive/folders/1cdBIR7jw8XXFV68gaydJspHmYuNV9JOK?usp=sharing',
        coverImage: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1785046632/IMG_5649_roxnym.jpg',
        images: [
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1785046858/IMG_4860_cim3gl.jpg   ', aspect: 'landscape' },
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1785056129/IMG_5474_flzssb.jpg', aspect: 'portrait' },
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1785047477/IMG_5673_gylrzr.jpg', aspect: 'landscape' },
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1785056218/IMG_4901_geo31a.jpg', aspect: 'portrait' },
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1785047244/IMG_5103_dtubog.jpg', aspect: 'portrait' },
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1785047566/IMG_5610_x4l4gt.jpg', aspect: 'landscape' },
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1785056372/IMG_5516_pgavy2.jpg', aspect: 'portrait' },
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1785048111/IMG_5081_iskbxn.jpg', aspect: 'landscape' },
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1785047415/IMG_5116_akfdtl.jpg', aspect: 'landscape' },
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1785056488/IMG_5506_fvypd9.jpg', aspect: 'portrait' },
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1785048396/IMG_5182_ezpqb8.jpg', aspect: 'landscape' },
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1785047352/IMG_5118_enpysd.jpg', aspect: 'portrait' },
        ]
    },
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
    'aarunya': {
        title: 'Aarunya 2026',
        date: '21.02.2026 - 23.02.2026',
        venue: "Madhav Institute of Technology and Science, Gwalior",
        driveLink: 'https://drive.google.com/drive/folders/1v3PA79GtmBpm4RvjoW4p6jKE8aiv6G6n?usp=drive_link',
        coverImage: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1783499698/Picsart_26-02-22_11-26-16-397_pp4hwj.jpg',
        description: 'Capturing the vibrant energy, diplomatic debates, and youth leadership at Gwalior\'s premier student parliament.',
        images: [
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1783499354/IMG_0881_n40gzt.jpg', aspect: 'landscape' },
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1783499389/IMG_0761_ydu41a.jpg', aspect: 'portrait' },
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1783499420/IMG_0917_xxnrqc.jpg', aspect: 'landscape' },
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1783499447/IMG_0254_lhzxzm.jpg', aspect: 'portrait' },
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1783499512/IMG_0656_rbdxew.jpg', aspect: 'portrait' },
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1783499480/IMG_0900_cv89xy.jpg', aspect: 'landscape' },
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1783499560/IMG_9644_ss32xt.jpg', aspect: 'portrait' },
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1783499833/IMG_0938_ua1lhd.jpg', aspect: 'landscape' },
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1783499590/IMG_9821_inhydu.jpg', aspect: 'landscape' },
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1783499595/IMG_9403_lnvkww.jpg', aspect: 'portrait' },
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1783499608/IMG_9474_zlotch.jpg', aspect: 'landscape' },
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1783499636/IMG_0215_uimwc1.jpg', aspect: 'portrait' },
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
