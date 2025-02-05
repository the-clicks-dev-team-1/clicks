/* eslint-disable @next/next/no-img-element */
// "use client";

// import { useEffect } from "react";
// import { useRouter } from "next/router";
// import Script from "next/script";

// declare global {
//   interface Window {
//     fbq: any;
//     _fbq: any;
//   }
// }
// const handleRouteChange = () => {
//   pageview();
// };

// const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

// const pageview = () => {
//   window.fbq("track", "PageView");
// };

// const FacebookPixel = ({ children }) => {
//   const router = useRouter();

//   useEffect(() => {
//     // the below will only fire on route changes (not initial load - that is handled in the script below)
//     router.events.on("routeChangeComplete", handleRouteChange);
//     return () => {
//       router.events.off("routeChangeComplete", handleRouteChange);
//     };
//   }, [router.events]);

//   return (
//     <Script id="fb-pixel">
//       {`
//         !function(f,b,e,v,n,t,s)
//         {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
//         n.callMethod.apply(n,arguments):n.queue.push(arguments)};
//         if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
//         n.queue=[];t=b.createElement(e);t.async=!0;
//         t.src=v;s=b.getElementsByTagName(e)[0];
//         s.parentNode.insertBefore(t,s)}(window, document,'script',
//         'https://connect.facebook.net/en_US/fbevents.js');
//         // fbq('init', ${FB_PIXEL_ID});
//         // fbq('track', 'PageView');`}
//     </Script>
//   );
// };

"use client";

import { useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

export default function FacebookPixel() {
  useEffect(() => {
    if (window.fbq) return;
    window.fbq = function () {
      window.fbq.callMethod
        ? window.fbq.callMethod.apply(window.fbq, arguments)
        : window.fbq.queue.push(arguments);
    };
    if (!window._fbq) window._fbq = window.fbq;
    window.fbq.push = window.fbq;
    window.fbq.loaded = true;
    window.fbq.version = "2.0";
    window.fbq.queue = [];

    window.fbq("init", process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID!);
    window.fbq("track", "PageView");
  }, []);

  return (
    <>
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        src="https://connect.facebook.net/en_US/fbevents.js"
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}
