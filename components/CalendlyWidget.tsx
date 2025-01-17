"use client";

import { useEffect } from "react";
import { InlineWidget } from "react-calendly";

export default function CalendlyWidget() {
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
    <div id="calendly-container">
      <InlineWidget url="https://calendly.com/p-demenshyn-theclicks" />
    </div>
  );
}
