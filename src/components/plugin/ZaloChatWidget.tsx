"use client";
import { useEffect } from "react";
import "./StyleZaloChatWidget.css";
const ZaloChatWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sp.zalo.me/plugins/sdk.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      suppressHydrationWarning={true}
      className="zalo-chat-widget"
      data-oaid="1845742797143453354"
      data-welcome-message="Rất vui khi được hỗ trợ bạn!"
      data-autopopup="1000"
      data-width="250"
      data-height="300"
    ></div>
  );
};

export default ZaloChatWidget;
