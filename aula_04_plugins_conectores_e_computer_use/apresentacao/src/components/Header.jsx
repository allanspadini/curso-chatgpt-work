import React from 'react';
import { getAssetPath } from '../utils/assetHelper';

export default function Header({ title, subtitle, isTitleSlide = false }) {
  if (isTitleSlide) {
    return null; // Title slide has its own integrated cover design
  }

  return (
    <header className="slide-header">
      {/* Infnet cyan wave accent */}
      <svg
        className="header-wave"
        viewBox="0 0 1366 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0 0H1366V22C1180 34 1000 12 780 26C540 40 320 18 0 32V0Z"
          fill="#1BB5D8"
          fillOpacity="0.45"
        />
        <path
          d="M0 0H1366V15C1220 28 980 8 720 22C460 36 210 14 0 20V0Z"
          fill="#64D9EF"
          fillOpacity="0.75"
        />
      </svg>

      <div className="header-text-container">
        <h1 className="header-title">{title}</h1>
        {subtitle && <p className="header-subtitle">{subtitle}</p>}
      </div>

      <div className="header-logo-container">
        <img
          src={getAssetPath('/infnet_logo.png')}
          alt="Instituto Infnet"
          className="header-logo"
        />
      </div>
    </header>
  );
}
