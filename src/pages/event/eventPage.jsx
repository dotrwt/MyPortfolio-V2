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
        description: 'capturing dynamic keynotes, interactive panel discussions, and developer interactions at the annual Tech Summit. focusing on high-contrast black and white shadows, technological depth, and candid moments of collaboration.',
        driveLink: 'https://drive.google.com/drive/folders/1rmH7wALWHS1cOcav5_vqGmTwzSGYHeP-?usp=sharing',
        images: [
            'https://res.cloudinary.com/dph28qrrx/image/upload/f_auto,q_auto/v1779475609/IMG_0761_yrqqx8.jpg', // Image 1 [Landscape]
            'https://res.cloudinary.com/dph28qrrx/image/upload/f_auto,q_auto/v1779477363/IMG_0603_2_kl72bc.jpg', // Image 2 [Portrait]
            'https://res.cloudinary.com/dph28qrrx/image/upload/f_auto,q_auto/v1779475604/IMG_9644_bzsupp.jpg', // Image 3 [Landscape]
            'https://res.cloudinary.com/dph28qrrx/image/upload/f_auto,q_auto/v1779476610/IMG_0943_mlplua.jpg', // Image 4 [Portrait]
            'https://res.cloudinary.com/dph28qrrx/image/upload/f_auto,q_auto/v1779476596/IMG_0903_yfmby3.jpg', // Image 5 [Portrait]
            'https://res.cloudinary.com/dph28qrrx/image/upload/f_auto,q_auto/v1779526523/IMG_0254_le0wym.jpg', // Image 6 [Landscape]
            'https://res.cloudinary.com/dph28qrrx/image/upload/f_auto,q_auto/v1779475618/IMG_9403_qka83x.jpg', // Image 7 [Portrait]
            'https://res.cloudinary.com/dph28qrrx/image/upload/f_auto,q_auto/v1779526530/IMG_0975_e2arux.jpg', // Image 8 [Landscape]
            'https://res.cloudinary.com/dph28qrrx/image/upload/f_auto,q_auto/v1779476601/IMG_9821_pzhzfn.jpg', // Image 9 [Landscape]
            'https://res.cloudinary.com/dph28qrrx/image/upload/f_auto,q_auto/v1779476612/IMG_9482_tckasd.jpg', // Image 10 [Portrait]
            'https://res.cloudinary.com/dph28qrrx/image/upload/f_auto,q_auto/v1779527174/IMG_0656_chvp57.jpg', // Image 11 [Landscape]
            'https://res.cloudinary.com/dph28qrrx/image/upload/v1780169471/IMG_9724_ccfa1d.jpg',  // Image 12 [Portrait]
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
        title: `${event.title} | Photography Showcase`,
        description: `view the selected shots and full album of ${event.title} shot at ${event.venue} on ${event.date} by dotrwt.`
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
