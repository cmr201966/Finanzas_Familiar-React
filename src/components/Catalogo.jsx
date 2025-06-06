import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import CatIngresosgGastos from '../assets/img/tarjetas/CatIngresosgGastos.png';
import presupuesto from '../assets/img/tarjetas/presupuesto.png';
import Cuentas from '../assets/img/tarjetas/cuentas.png';
import ingresos from '../assets/img/tarjetas/ingresos.png';
import gastos from '../assets/img/tarjetas/Gastos.png';
import transferencia from '../assets/img/tarjetas/transf.png';
import './Catalogo.css';

export default function Carousel() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const images = [
    { src: CatIngresosgGastos, alt: 'categorias_alt', name: 'categorias' },
    { src: Cuentas, alt: 'cuentas_alt', name: 'cuentas' },
    { src: presupuesto, alt: 'presupuesto_alt', name: 'presupuesto' },
    { src: ingresos, alt: 'ingresos_alt', name: 'ingresos' },
    { src: gastos, alt: 'gastos_alt', name: 'gastos' },
    { src: transferencia, alt: 'transferencias_alt', name: 'transferencias' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const imageWidth = 200;

  const handleClick = (image) => {
    switch (image.name) {
      case 'categorias':
        navigate('/Categorias');
        break;
      case 'cuentas':
        navigate('/Cuentas');
        break;
      case 'presupuesto':
        navigate('/Presupuesto');
        break;
      case 'ingresos':
        navigate('/Ingresos');
        break;
      case 'gastos':
        navigate('/Gastos');
        break;
      case 'transferencias':
        navigate('/Transferencias');
        break;
      default:
        alert(`Navegación no implementada para: ${image.name}`);
    }
  };

  return (
    <div className="carousel-container">
      <div className="carousel-track">
        <div
          className="carousel-slide"
          style={{ transform: `translateX(-${currentIndex * imageWidth}px)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="carousel-item"
              onClick={() => handleClick(image)}
            >
              <div className="image-wrapper">
                <img src={image.src} alt={t(image.alt)} />
                <p className="image-label">{t(image.name)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
