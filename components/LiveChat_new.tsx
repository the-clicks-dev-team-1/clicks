"use client";
import { useEffect, useRef } from "react";

const LiveChat = () => {
  const chatRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    console.log("LiveChat useEffect started"); // Debug log

    // Check if elements already exist
    if (
      document.getElementById("live-chat-element") ||
      document.getElementById("tcx-callus-js")
    ) {
      console.log("Elements already exist, skipping"); // Debug log
      return;
    }

    const callUsElement = document.createElement("call-us-selector");
    console.log("Creating chat element"); // Debug log

    callUsElement.setAttribute("phonesystem-url", "https://1489.3cx.cloud");
    callUsElement.setAttribute("party", "theclicksmarketingin");
    callUsElement.id = "live-chat-element";

    document.body.appendChild(callUsElement);
    console.log("Chat element appended to body"); // Debug log
    chatRef.current = callUsElement;

    const script = document.createElement("script");
    console.log("Creating script element"); // Debug log

    script.src =
      "https://downloads-global.3cx.cloud/downloads/livechatandtalk/v1/callus.js";
    script.id = "tcx-callus-js";
    script.defer = true;

    script.addEventListener("load", () => {
      console.log("3CX Chat script loaded successfully"); // Debug log
    });

    script.addEventListener("error", (e) => {
      console.error("Error loading 3CX Chat script:", e); // Debug error log
    });

    document.body.appendChild(script);
    console.log("Script appended to body"); // Debug log

    return () => {
      console.log("Cleanup running"); // Debug log
      const chatElement = document.getElementById("live-chat-element");
      const scriptElement = document.getElementById("tcx-callus-js");

      if (chatElement?.parentNode) {
        chatElement.parentNode.removeChild(chatElement);
        console.log("Chat element removed"); // Debug log
      }

      if (scriptElement?.parentNode) {
        scriptElement.parentNode.removeChild(scriptElement);
        console.log("Script element removed"); // Debug log
      }
    };
  }, []);

  return null;
};

export default LiveChat;
