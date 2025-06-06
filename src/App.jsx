import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './views/Home';


export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}