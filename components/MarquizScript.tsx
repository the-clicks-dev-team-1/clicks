// components/MarquizScript.tsx
import Script from "next/script";

const MarquizScript = () => {
  return (
    <>
      <Script
        id="marquiz-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w, d, s, o){
              var j = d.createElement(s); j.async = true; j.src = 'https://script.marquiz.io/v2.js'; j.onload = function() {
                if (document.readyState !== 'loading') Marquiz.init(o);
                else document.addEventListener("DOMContentLoaded", function() {
                  Marquiz.init(o);
                });
              };
              d.head.insertBefore(j, d.head.firstElementChild);
            })(window, document, 'script', {
              host: '//quiz.marquiz.io',
              region: 'us',
              id: '66f5f810439a5a00265f8849',
              autoOpen: 10,
              autoOpenFreq: 'once',
              openOnExit: false,
              disableOnMobile: false
            });
          `,
        }}
      />
    </>
  );
};

export default MarquizScript;
