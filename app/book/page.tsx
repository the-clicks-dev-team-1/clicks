"use client";

import { InlineWidget } from "react-calendly";

import Navbar from "@/components/navbar";
import { useEffect } from "react";

const Book = () => {
  useEffect(() => {
    const handleCalendlyEvent = (e: MessageEvent) => {
      if (e.data?.event === "calendly.event_scheduled") {
        console.log("Calendly event scheduled: ", e);
        if (window.dataLayer) {
          window.dataLayer.push({
            event: "CalendlyEventScheduled",
            calendly_event_uri: e.data.payload.event.uri,
            calendly_invitee_uri: e.data.payload.invitee.uri,
          });
        }
      }
    };

    window.addEventListener("message", handleCalendlyEvent);

    return () => {
      window.removeEventListener("message", handleCalendlyEvent);
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
