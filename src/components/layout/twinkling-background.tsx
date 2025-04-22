import React from 'react';

interface BackgroundSvgProps extends React.SVGProps<SVGSVGElement> {
  // You can add specific props here if needed later
}

export const TwinklingBackground: React.FC<BackgroundSvgProps> = (props) => {
  // Assuming you have manually added class="star" to the star elements in the SVG markup below
  return (
    <svg width="1960" height="864" viewBox="0 0 1960 864" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g filter="url(#filter0_f_102_58)">
      <path d="M1583.74 439.137C1628.87 412.825 1647.32 384.015 1637.38 355.385C1627.44 326.754 1589.43 299.233 1526.89 275.378C1464.34 251.524 1379.29 232.11 1279.64 218.943C1179.99 205.775 1068.97 199.281 956.899 200.063C844.832 200.846 735.355 208.879 638.644 223.418C541.934 237.956 461.128 258.528 403.739 283.219C346.349 307.911 314.239 335.922 310.392 364.649C306.545 393.376 331.086 421.886 381.734 447.529L975 370.5L1583.74 439.137Z" fill="url(#paint0_radial_102_58)"/>
      </g>
      {/* Remember to add class="star" (or similar) to the rect elements below that represent stars */}
      <rect className="star star-1" x="840" y="188" width="1" height="1" rx="0.5" fill="#D9D9D9"/>
      <rect className="star star-2" x="915" y="302" width="1" height="1" rx="0.5" fill="#D9D9D9"/>
      <rect className="star star-3" x="1107" y="205" width="1" height="1" rx="0.5" fill="#D9D9D9"/>
      <rect className="star star-1" x="1071" y="270" width="1" height="1" rx="0.5" fill="#D9D9D9"/>
      <rect className="star star-2" x="1077" y="367" width="1" height="1" rx="0.5" fill="#D9D9D9"/>
      <rect className="star star-3" x="615" y="344" width="1" height="1" rx="0.5" fill="#D9D9D9" fillOpacity="0.25"/>
      <rect className="star star-1" x="616" y="292" width="1" height="1" rx="0.5" fill="#D9D9D9" fillOpacity="0.25"/>
      <rect className="star star-2" x="692" y="241" width="1" height="1" rx="0.5" fill="#D9D9D9" fillOpacity="0.8"/>
      <rect className="star star-3" x="547" y="285" width="2" height="1" rx="0.5" fill="#D9D9D9" fillOpacity="0.1"/>
      <rect className="star star-1" x="549" y="385" width="1" height="1" rx="0.5" fill="#D9D9D9" fillOpacity="0.8"/>
      <rect className="star star-2" x="629" y="225" width="1" height="1" rx="0.5" fill="#D9D9D9" fillOpacity="0.8"/>
      <rect className="star star-3" x="867" y="387" width="2" height="1" rx="0.5" fill="#D9D9D9"/>
      <rect className="star star-1" x="768" y="368" width="1" height="1" rx="0.5" fill="#D9D9D9" fillOpacity="0.6"/>
      <rect className="star star-2" x="1194" y="345" width="1" height="1" rx="0.5" fill="#D9D9D9" fillOpacity="0.1"/>
      <rect className="star star-3" x="1232" y="311" width="2" height="1" rx="0.5" fill="#D9D9D9" fillOpacity="0.1"/>
      <rect className="star star-1" x="1137" y="286" width="6" height="6" rx="3" fill="#D9D9D9" fillOpacity="0.7"/>
      <rect className="star star-2" x="1207" y="247" width="5" height="5" rx="2.5" fill="#D9D9D9" fillOpacity="0.75"/>
      <rect className="star star-3" x="964" y="168" width="5" height="5" rx="2.5" fill="#D9D9D9" fillOpacity="0.8"/>
      <rect className="star star-1" x="941" y="339" width="6" height="5" rx="2.5" fill="#D9D9D9" fillOpacity="0.72"/>
      <rect className="star star-2" x="1043" y="320" width="5" height="5" rx="2.5" fill="#D9D9D9" fillOpacity="0.5"/>
      <rect className="star star-3" x="1278" y="303" width="6" height="6" rx="3" fill="#D9D9D9" fillOpacity="0.1"/>
      <rect className="star star-1" x="1227" y="333" width="5" height="6" rx="2.5" fill="#D9D9D9" fillOpacity="0.75"/>
      <rect className="star star-2" x="1281" y="251" width="5" height="5" rx="2.5" fill="#D9D9D9" fillOpacity="0.1"/>
      <rect className="star star-3" x="1240" y="205" width="5" height="5" rx="2.5" fill="#D9D9D9" fillOpacity="0.8"/>
      <rect className="star star-1" x="1297" y="382" width="5" height="5" rx="2.5" fill="#D9D9D9"/>
      <rect className="star star-2" x="722" y="309" width="5" height="5" rx="2.5" fill="#D9D9D9"/>
      <rect className="star star-3" x="751" y="242" width="5" height="6" rx="2.5" fill="#D9D9D9"/>
      <rect className="star star-1" x="706" y="188" width="5" height="5" rx="2.5" fill="#D9D9D9"/>
      <rect className="star star-2" x="706" y="188" width="5" height="5" rx="2.5" fill="#D9D9D9" fillOpacity="0.5"/>
      <rect className="star star-3" x="864" y="129" width="6" height="5" rx="2.5" fill="#D9D9D9" fillOpacity="0.8"/>
      <rect className="star star-1" x="813" y="287" width="1" height="1" rx="0.5" fill="#D9D9D9"/>
      <rect className="star star-2" x="869" y="226" width="1" height="1" rx="0.5" fill="#D9D9D9"/>
      <rect className="star star-3" x="934" y="242" width="1" height="2" rx="0.5" fill="#D9D9D9"/>
      <rect className="star star-1" x="998" y="312" width="1" height="1" rx="0.5" fill="#D9D9D9"/>
      <rect className="star star-2" x="969" y="251" width="1" height="1" rx="0.5" fill="#D9D9D9" fillOpacity="0.55"/>
      <rect className="star star-3" x="1015" y="227" width="1" height="2" rx="0.5" fill="#D9D9D9" fillOpacity="0.55"/>
      <rect className="star star-1" x="969" y="207" width="1" height="1" rx="0.5" fill="#D9D9D9" fillOpacity="0.8"/>
      <rect className="star star-2" x="872" y="263" width="1" height="1" rx="0.5" fill="#D9D9D9"/>
      <mask id="path-40-inside-1_102_58" fill="white">
      <path d="M1960 625.649C1960 756.898 1521.24 863.297 980 863.297C438.761 863.297 0 756.898 0 625.649C0 494.399 438.761 388 980 388C1521.24 388 1960 494.399 1960 625.649Z"/>
      </mask>
      <path d="M1960 625.649C1960 756.898 1521.24 863.297 980 863.297C438.761 863.297 0 756.898 0 625.649C0 494.399 438.761 388 980 388C1521.24 388 1960 494.399 1960 625.649Z" fill="url(#paint1_linear_102_58)"/>
      <path d="M1956 625.649C1956 656.114 1930.42 686.345 1881 714.682C1831.88 742.845 1760.53 768.341 1672.02 789.804C1495.07 832.716 1250.4 859.297 980 859.297V867.297C1250.84 867.297 1496.17 840.68 1673.91 797.579C1762.74 776.036 1834.92 750.324 1884.98 721.622C1934.73 693.095 1964 660.809 1964 625.649H1956ZM980 859.297C709.602 859.297 464.933 832.716 287.978 789.804C199.469 768.341 128.124 742.845 79.0028 714.682C29.5781 686.345 4 656.114 4 625.649H-4C-4 660.809 25.267 693.095 75.0237 721.622C125.084 750.324 197.257 776.036 286.093 797.579C463.828 840.68 709.159 867.297 980 867.297V859.297ZM4 625.649C4 595.184 29.5781 564.952 79.0028 536.615C128.124 508.453 199.469 482.956 287.978 461.493C464.933 418.582 709.602 392 980 392V384C709.159 384 463.828 410.618 286.093 453.718C197.257 475.261 125.084 500.974 75.0237 529.675C25.267 558.202 -4 590.489 -4 625.649H4ZM980 392C1250.4 392 1495.07 418.582 1672.02 461.493C1760.53 482.956 1831.88 508.453 1881 536.615C1930.42 564.952 1956 595.184 1956 625.649H1964C1964 590.489 1934.73 558.202 1884.98 529.675C1834.92 500.974 1762.74 475.261 1673.91 453.718C1496.17 410.618 1250.84 384 980 384V392Z" fill="url(#paint2_radial_102_58)" mask="url(#path-40-inside-1_102_58)"/>
      <defs>
      <filter id="filter0_f_102_58" x="110" y="0" width="1730" height="647.529" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_102_58"/>
      </filter>
      <radialGradient id="paint0_radial_102_58" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(975 287.28) rotate(90) scale(180 700)">
      <stop stopColor="#4F1ABE"/>
      <stop offset="1" stopColor="#24214B" stopOpacity="0"/>
      </radialGradient>
      <linearGradient id="paint1_linear_102_58" x1="980" y1="388" x2="980" y2="626" gradientUnits="userSpaceOnUse">
      <stop stopColor="#161616"/>
      <stop offset="0.485987" stopColor="#161616" stopOpacity="0.514013"/>
      <stop offset="1" stopColor="#161616" stopOpacity="0"/>
      </linearGradient>
      <radialGradient id="paint2_radial_102_58" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(980 388) rotate(90) scale(219.851 982.339)">
      <stop stopColor="#6229BF"/>
      <stop offset="1" stopOpacity="0"/>
      </radialGradient>
      </defs>
    </svg>
  );
}; 