import React from 'react';
import Navbar from '../../sections/navbar';
import Footer from '../../sections/footer';
import Oops from './oops';
import GridBackground from '../../components/GridBackground';

const NotFoundPage = () => {
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
