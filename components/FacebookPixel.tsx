/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect } from "react";
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
