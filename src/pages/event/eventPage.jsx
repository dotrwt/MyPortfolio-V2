import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import GridBackground from '../../components/GridBackground';
import Navbar from '../../sections/navbar';
import Footer from '../../sections/footer';
import EventHero from './hero';
import EventPreview from './preview';
import ViewFullAlbum from './fullAlbum';
import useSEO from '../../hooks/useSEO';
import './event.css';

// Config object containing realistic placeholder datasets for events
const EVENTS_DATA = {
    'ays': {
        title: 'Atal Yuva Sansad',
        date: '12.06.2026 - 14.06.2026',
        venue: "Kiddy's Corner HR. Secondary School, Gwalior",
        driveLink: 'https://drive.google.com/drive/folders/1rmH7wALWHS1cOcav5_vqGmTwzSGYHeP-?usp=sharing',
        ogImage: '/og-image-ays.png',
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

const EventPage = () => {
    const { eventSlug } = useParams();

    // If dynamic slug matches no defined event config, redirect to 404
    const event = EVENTS_DATA[eventSlug];
    if (!event) {
        return <Navigate to="/404" replace />;
    }

    // Update document headers dynamically for search crawlers
    useSEO({
        title: `${event.title} (Event Photos)`,
        description: `Date: ${event.date} | Venue: ${event.venue}. View the selected shots and full digital gallery.`,
        image: event.ogImage || '/og-image.png'
    });

    return (
        <>
            <GridBackground />
            <Navbar />
            <main id="event-page-main">
                <EventHero
                    title={event.title}
                    date={event.date}
                    venue={event.venue}
                />
                <EventPreview
                    images={event.images}
                />
                <ViewFullAlbum
                    driveLink={event.driveLink}
                />
            </main>
            <Footer />
        </>
    );
};

export default EventPage;
