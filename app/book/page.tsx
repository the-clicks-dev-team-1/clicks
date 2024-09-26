"use client";

import { EventScheduledEvent, InlineWidget } from "react-calendly";

import Navbar from "@/components/navbar";
import { useEffect } from "react";

const Book = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => {
      try {
        // Initialize the Calendly widget
        if (window.Calendly) {
          window.Calendly.initInlineWidget({
            url: "https://calendly.com/p-demenshyn-theclicks",
            parentElement: document.getElementById("calendly-container"),
            prefill: {},
            utm: {},
          });

          // Set up the event listener for Calendly events
          window.Calendly.setupWidget({
            url: "https://calendly.com/p-demenshyn-theclicks",
            parentElement: document.getElementById("calendly-container"),
            prefill: {},
            utm: {},
            onEvent: function (e: EventScheduledEvent) {
              if (e.data.event === "calendly.event_scheduled") {
                if (typeof window !== "undefined" && window.dataLayer) {
                  window.dataLayer?.push({
                    event: "CalendlyEventScheduled",
                    calendly_event_uri: e.data.payload.event.uri,
                    calendly_invitee_uri: e.data.payload.invitee.uri,
                  });
                }
              }
            },
          });
        } else {
          throw new Error("Calendly script not loaded properly.");
        }
      } catch (error) {
        console.error("Error initializing Calendly widget:", error);
      }
    };

    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col   w-full  h-screen bg-[var(--bg-96)]  bg-grid-white/[0.02]   ">
        <Navbar />
        <div
          className="text-4xl mt-36 pb-5 md:text-6xl text-center 
        bg-clip-text text-[var(--text-label)] *text-transparent* bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
        >
          <h1>Book a meeting</h1>
        </div>

        <div id="calendly-container">
          <InlineWidget url="https://calendly.com/p-demenshyn-theclicks" />
        </div>
      </div>
    </>
  );
};

export default Book;
