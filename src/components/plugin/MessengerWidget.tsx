"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

const MessengerChatButton = () => {
  const openMessenger = () => {
    window.open("https://m.me/25559455110336252", "_blank");
  };

  return (
    <Button
      onClick={openMessenger}
      style={{
        position: "fixed",
        bottom: "120px",
        right: "50px",
        // color: "white",
        padding: "14px",
        borderRadius: "50px",
        border: "none",
        // boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        zIndex: 9999,
        cursor: "pointer",
        backgroundColor: "transparent", // Facebook Messenger color
      }}
    >
      <Image
        src="/icons/facebook-messenger-icon.svg"
        alt="Messenger Icon"
        width={50}
        height={50}
      />
    </Button>
  );
};

export default MessengerChatButton;
