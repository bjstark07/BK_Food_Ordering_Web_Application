import React from 'react';
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import styles from './App.module.css';

function App() {
  return (
    <>
      <Navbar />
      <section id="home" className={styles.section}>Home Section</section>
      <section id="features" className={styles.section}>Features Section</section>
      <section id="about" className={styles.section}>About Section</section>
      <section id="menu" className={styles.section}>Menu Section</section>
      <ContactForm />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
