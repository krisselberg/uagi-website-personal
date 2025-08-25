import React from 'react';

export function BeyondEarth() {
  return (
    <div className="sketchfab-embed-wrapper w-full h-full relative overflow-hidden">
      <iframe
        title="planet Earth"
        frameBorder="0"
        allowFullScreen
        // mozallowfullscreen="true"
        // webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        // xr-spatial-tracking
        // execution-while-out-of-viewport
        // execution-while-not-rendered
        // web-share
        src="https://sketchfab.com/models/4a654cc4c2f9464791073e245f43c2e7/embed?autospin=0.1&autostart=1&camera=0&ui_theme=dark&ui_infos=0&ui_controls=0"
        className="w-[110%] h-[110%] -translate-x-[5%] -translate-y-[5%]"
        style={{
          border: 'none',
          outline: 'none'
        }}
      ></iframe>
      <div className="absolute top-0 left-0 w-full h-full bg-transparent z-10"></div>
    </div>
  );
}