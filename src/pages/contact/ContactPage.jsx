import React from 'react';
import GridBackground from '../../components/GridBackground';
import Navbar from '../../sections/navbar';
import Footer from '../../sections/footer';
import ContactHero from './hero';
import ContactForm from './contactForm';
import Socials from './social';
import useSEO from '../../hooks/useSEO';

export default function ContactPage() {
  useSEO({
    title: 'Contact',
    description: "Get in touch with Harshvardhan Rawat. Let's build something exceptional together. Reach out via email, contact form, or connect on social platforms."
  });

  return (
    <>
      <GridBackground />
      <Navbar />

      <main id="contact-page">
        <ContactHero />
        <div className="contact-main-content">
          <ContactForm />
          <Socials />
        </div>
      </main>

      <Footer />
    </>
  );
}
