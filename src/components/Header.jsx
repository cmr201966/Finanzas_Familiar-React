import React from 'react';
import './Header.css';
import { useTranslation } from 'react-i18next';
export default function Header() {
  const { t,i18n } = useTranslation();
    return (
    <div>
      <p className="frase">"{t('frase')}"</p>
    <p className="salidas">{t('salidas')}</p>
    <p className="notificacionesh">{t('notificacionesh')}</p>
      </div>
  );
}