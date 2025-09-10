"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { getStaticAssetPath } from "@/lib/utils";

const ZaloWidgetButton = () => {
  const openZalo = () => {
    window.open("https://zalo.me/0973276871", "_blank");
  };

  return (
    <Button
      onClick={openZalo}
      className="fixed bottom-8 sm:bottom-14 right-2 sm:right-12 p-2 sm:p-3.5 rounded-full border-none z-[9999] cursor-pointer bg-transparent hover:bg-transparent"
    >
      <Image
        src={getStaticAssetPath("/icons/icons-zalo.svg")}
        alt="Zalo Icon"
        width={48}
        height={48}
        className="sm:w-[60px] sm:h-[60px]"
      />
    </Button>
  );
};

export default ZaloWidgetButton ;
