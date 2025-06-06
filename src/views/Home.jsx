import React from 'react';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/header';
import Carousel from '../components/Catalogo';
import CarouselWithNav from '../components/Carrusel';

export default function HomePage() {
  return (
    <>
      <NavBar />
      <Footer />
      <Header />
      <Carousel />
      <CarouselWithNav />
    </>
  );
}
