'use client';

import { useEffect } from 'react';

export default function BotpressChat() {
  useEffect(() => {
    // 1. Inject custom styles to control the height and appearance
    const style = document.createElement('style');
    style.innerHTML = `
      #bp-web-widget {
        height: 300px !important; /* Adjust this value as needed */
        max-height: 300px !important; /* Adjust this value as needed */
        width: 350px !important; /* Optional: Adjust width if desired */
        max-width: 350px !important; /* Optional: Adjust max-width if desired */
      }
      iframe[src*="webchat"] {
        height: 300px !important; /* Match the height of the parent container */
        max-height: 300px !important; /* Match the max-height of the parent container */
      }
      /* Optional: Customize colors if you want */
      :root {
        --bpw-header-background-color: #111827;
        --bpw-header-text-color: #facc15;
        --bpw-bot-message-background: #1e3a8a;
        --bpw-user-message-background: #10b981;
        --bpw-bot-message-color: #ffffff;
        --bpw-user-message-color: #ffffff;
        --bpw-send-icon-color: #10b981;
      }
    `;
    document.head.appendChild(style);

    // 2. Load Botpress inject script
    const injectScript = document.createElement('script');
    injectScript.src = 'https://cdn.botpress.cloud/webchat/v3.0/inject.js';
    injectScript.async = true;
    injectScript.onload = () => {
      // After inject.js loads, load your config script
      const configScript = document.createElement('script');
      configScript.src = 'https://files.bpcontent.cloud/2025/05/31/08/20250531084605-L1AH1X1R.js'; // Replace with your actual config URL
      configScript.async = true;
      document.body.appendChild(configScript);
    };
    document.body.appendChild(injectScript);

    // Optional cleanup function if the component unmounts
    return () => {
      style.remove();
      // Note: Removing Botpress scripts correctly on unmount can be tricky
      // if they create global state. For most cases, leaving them is fine
      // if the component only mounts once for the whole app.
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return null; // This component doesn't render any visible JSX itself
}