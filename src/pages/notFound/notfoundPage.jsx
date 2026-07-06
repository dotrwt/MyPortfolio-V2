import React from 'react';
import Navbar from '../../sections/navbar';
import Footer from '../../sections/footer';
import Oops from './oops';
import GridBackground from '../../components/GridBackground';
import useSEO from '../../hooks/useSEO';

const NotFoundPage = () => {
  useSEO({
    title: '404 Page Not Found',
    description: 'The page you are looking for does not exist or has been moved.',
    robots: 'noindex, nofollow'
  });

  return (
    <>
      <GridBackground />
      <Navbar />
      <main id="notfound-page">
        <Oops />
      </main>
      <Footer />
    </>
  );
};

export default NotFoundPage;
