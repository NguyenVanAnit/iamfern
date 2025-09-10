"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { getStaticAssetPath } from "@/lib/utils";

const MessengerChatButton = () => {
  const openMessenger = () => {
    window.open("https://m.me/25559455110336252", "_blank");
  };

  return (
    <Button
      onClick={openMessenger}
      className="fixed bottom-20 sm:bottom-32 right-3 sm:right-13 p-2 sm:p-3.5 rounded-full border-none z-[9999] cursor-pointer bg-transparent hover:bg-transparent"
    >
      <Image
        src={getStaticAssetPath("/icons/facebook-messenger-icon.svg")}
        alt="Messenger Icon"
        width={40}
        height={40}
        className="sm:w-[50px] sm:h-[50px]"
      />
    </Button>
  );
};

export default MessengerChatButton;
