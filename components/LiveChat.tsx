"use client";
import { useEffect, useRef } from "react";

// Static flag outside component to track initialization across remounts
let isInitialized = false;

const LiveChat = () => {
  const chatRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    // Create the custom element
    // const callUsElement = document.createElement("call-us");
    // callUsElement.setAttribute("phonesystem-url", "https://1551.3cx.cloud");
    // callUsElement.setAttribute(
    //   "style",
    //   "position:fixed;font-size:16px;line-height:17px;z-index: 50;right: 15px; bottom: 80px;"
    // );
    // callUsElement.setAttribute("id", "wp-live-chat-by-3CX");
    // callUsElement.setAttribute("minimized", "true");
    // callUsElement.setAttribute("animation-style", "fadein");
    // callUsElement.setAttribute("party", "viktorlytvynenko");
    // callUsElement.setAttribute("minimized-style", "bubbleright");
    // callUsElement.setAttribute("allow-call", "true");
    // callUsElement.setAttribute("allow-video", "false");
    // callUsElement.setAttribute("allow-soundnotifications", "true");
    // callUsElement.setAttribute("enable-mute", "true");
    // callUsElement.setAttribute("enable-onmobile", "true");
    // callUsElement.setAttribute("offline-enabled", "true");
    // callUsElement.setAttribute("enable", "true");
    // callUsElement.setAttribute("ignore-queueownership", "false");
    // callUsElement.setAttribute("authentication", "none");
    // callUsElement.setAttribute("operator-name", "Paul Dimension");
    // callUsElement.setAttribute("show-operator-actual-name", "false");
    // callUsElement.setAttribute("aknowledge-received", "true");
    // callUsElement.setAttribute("operator-icon", "data:image/png;base64,..."); // Truncated for brevity
    // callUsElement.setAttribute("gdpr-enabled", "true");
    // callUsElement.setAttribute("message-userinfo-format", "both");
    // callUsElement.setAttribute("message-dateformat", "both");
    // callUsElement.setAttribute("lang", "browser");
    // callUsElement.setAttribute("button-icon-type", "doublebubble");
    // callUsElement.setAttribute("greeting-visibility", "none");
    // callUsElement.setAttribute("greeting-offline-visibility", "none");
    // callUsElement.setAttribute("chat-delay", "2000");
    // callUsElement.setAttribute("enable-direct-call", "true");
    // callUsElement.setAttribute("enable-ga", "false");

    if (isInitialized || document.getElementById("tcx-callus-js")) {
      console.log("Chat already initialized, skipping");
      return;
    }

    isInitialized = true;

    // Clear any existing elements
    const existingElements = document.querySelectorAll(
      "#live-chat-element, #tcx-callus-js"
    );
    existingElements.forEach((el) => el.remove());

    const callUsElement = document.createElement("call-us-selector");
    callUsElement.setAttribute("phonesystem-url", "https://1489.3cx.cloud");
    callUsElement.setAttribute("party", "theclicksmarketingin");
    callUsElement.id = "live-chat-element";

    // Append the element to the body
    document.body.appendChild(callUsElement);
    chatRef.current = callUsElement;

    // Load the chat functionality script
    const script = document.createElement("script");
    script.src =
      "https://downloads-global.3cx.com/downloads/livechatandtalk/v1/callus.js";
    // "./chatscript.js";
    script.id = "tcx-callus-js";
    script.defer = true;
    document.body.appendChild(script);

    const handleClickOutside = (event: MouseEvent) => {
      if (chatRef.current) {
        const isMinimized =
          chatRef.current.getAttribute("minimized") === "true";

        // If chat is open and the click is outside, minimize it
        if (!isMinimized && !chatRef.current.contains(event.target as Node)) {
          setTimeout(() => {
            chatRef.current?.setAttribute("minimized", "true");
          }, 100);
        }
      }
    };

    const observer = new MutationObserver(() => {
      if (document.getElementById("live-chat-element")) {
        document.addEventListener("click", handleClickOutside);
        observer.disconnect(); // Stop observing once element is found
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Clean up the element and script when the component unmounts
    return () => {
      const chatElement = document.getElementById("live-chat-element");
      if (chatElement && chatElement.parentNode) {
        chatElement.parentNode.removeChild(chatElement);
      }

      // Safely remove script
      const scriptElement = document.getElementById("tcx-callus-js");
      if (scriptElement && scriptElement.parentNode) {
        scriptElement.parentNode.removeChild(scriptElement);
      }

      document.removeEventListener("click", handleClickOutside);
      observer.disconnect();
    };
  }, []);

  return null;
};

export default LiveChat;
