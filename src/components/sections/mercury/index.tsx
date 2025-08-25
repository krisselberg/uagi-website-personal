import React from 'react';

export function Mercury() {
  return (
    <div className="sketchfab-embed-wrapper w-full h-full relative overflow-hidden">
      <iframe
        title="Mercury (planet)"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; fullscreen; xr-spatial-tracking"
        src="https://sketchfab.com/models/ccb6c6a9ac3742109cc67c0f16032b49/embed?autospin=0.1&autostart=1&ui_theme=dark&ui_infos=0&ui_controls=0&ui_watermark=0&ui_help=0&ui_settings=0&ui_inspector=0&ui_annotations=0&ui_stop=0&ui_vr=0&ui_hint=0"
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