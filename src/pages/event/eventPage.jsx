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
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/f_auto,q_auto/v1779526523/IMG_0254_le0wym.jpg', aspect: 'landscape' },
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/f_auto,q_auto/v1779475618/IMG_9403_qka83x.jpg', aspect: 'portrait' },
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/f_auto,q_auto/v1779526530/IMG_0975_e2arux.jpg', aspect: 'landscape' },
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/f_auto,q_auto/v1779476601/IMG_9821_pzhzfn.jpg', aspect: 'landscape' },
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/f_auto,q_auto/v1779476612/IMG_9482_tckasd.jpg', aspect: 'portrait' },
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/f_auto,q_auto/v1779527174/IMG_0656_chvp57.jpg', aspect: 'landscape' },
            { url: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1780169471/IMG_9724_ccfa1d.jpg', aspect: 'portrait' },
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
