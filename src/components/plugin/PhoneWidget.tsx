"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { getStaticAssetPath } from "@/lib/utils";

const PhoneWidget = () => {
  const openPhone = () => {
    window.open("tel:+84973276871", "_blank");
  };

  return (
    <Button
      onClick={openPhone}
      className="fixed bottom-32 sm:bottom-[200px] right-2 sm:right-12 p-2 sm:p-3.5 rounded-full border-none z-[9999] cursor-pointer bg-transparent hover:bg-transparent"
    >
      <Image
        src={getStaticAssetPath("/icons/icon-phone.svg")}
        alt="Phone Icon"
        width={50}
        height={50}
        className="sm:w-[60px] sm:h-[60px]"
      />
    </Button>
  );
};

export default PhoneWidget;
