import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import resumenGeneral from '../assets/img/tarjetas/resumen gral.png';
import transferencias from '../assets/img/tarjetas/transf.png';
import cuentas from '../assets/img/tarjetas/cuentas.png';
import presupuesto from '../assets/img/tarjetas/presupuesto.png';
import informeAnual from '../assets/img/tarjetas/reportes.png';
import categorias from '../assets/img/tarjetas/CatIngresosgGastos.png';
import './Carrusel.css';

const images = [
  { src: resumenGeneral, name: 'resumen', altName: 'resumen_alt' },
  { src: transferencias, name: 'transferencias', altName: 'transferencias_alt' },
  { src: cuentas, name: 'cuentas', altName: 'cuentas_alt' },
  { src: presupuesto, name: 'presupuesto', altName: 'presupuesto_alt' },
  { src: informeAnual, name: 'informeAnual', altName: 'informeAnual_alt' },
  { src: categorias, name: 'categorias', altName: 'categorias_alt' },
];

const visibleCount = 3;
const imageWidth = 200;

export default function CarouselWithNav() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const moveSlide = (direction) => {
    const maxIndex = images.length - visibleCount;
    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = 0;
    if (newIndex > maxIndex) newIndex = maxIndex;
    setCurrentIndex(newIndex);
  };

  const handleClick = (image) => {
    switch (image.name) {
      case 'resumen':
        navigate('/resumen');
        break;
      case 'transferencias':
        navigate('/transferencias');
        break;
      case 'cuentas':
        navigate('/cuentas');
        break;
      case 'presupuesto':
        navigate('/presupuesto');
        break;
      case 'informeAnual':
        navigate('/informe-anual');
        break;
      case 'categorias':
        navigate('/categorias');
        break;
      default:
        alert(`Navegación no implementada para: ${t(image.name)}`);
    }
  };

  return (
    <div className="carousel-container2">
      <button onClick={() => moveSlide(-1)} className="nav-button2">❮</button>

      <div className="carousel-track2">
        <div
          className="carousel-slide2"
          style={{ transform: `translateX(-${currentIndex * imageWidth}px)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="carousel-item2"
              onClick={() => handleClick(image)}
            >
              <div className="image-wrapper2">
                <img src={image.src} alt={t(image.altName)} />
                <p className="image-label2">{t(image.name)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button onClick={() => moveSlide(1)} className="nav-button2">❯</button>
    </div>
  );
}
