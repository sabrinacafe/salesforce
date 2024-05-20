"use client";
import { useEffect } from 'react';

declare global {
  interface Window {
    watsonAssistantChatOptions?: {
      integrationID: string;
      region: string;
      serviceInstanceID: string;
      clientVersion?: string;
      onLoad: (instance: any) => Promise<void>;
    };
  }
}

const WatsonChat = () => {
  useEffect(() => {
    window.watsonAssistantChatOptions = {
      integrationID: "8df28146-f6e9-4a6b-b96d-209b0487f5ce",
      region: "us-south",
      serviceInstanceID: "426bec6a-8909-471e-ba45-cd00654aa8d3",
      onLoad: async (instance: any) => { await instance.render(); }
    };

    setTimeout(function () {
      const t = document.createElement('script');
      t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions?.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
      document.head.appendChild(t);
    }, 0);
  }, []);

  return null;
};

export default WatsonChat;
