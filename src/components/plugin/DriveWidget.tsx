"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { getStaticAssetPath } from "@/lib/utils";

const DriveButton = () => {
  const openDrive = () => {
    window.open("https://drive.google.com/file/d/1ZeZmsTahL-W1p57-A8pyq5CuOtX9aLt5/view?usp=sharing", "_blank");
  };

  return (
    <Button
      onClick={openDrive}
      className="fixed bottom-44 sm:bottom-[272px] right-2 sm:right-12 p-2 sm:p-3.5 rounded-full border-none z-[9999] cursor-pointer bg-transparent hover:bg-transparent"
    >
      <Image
        src={getStaticAssetPath("/icons/icon-google-drive.svg")}
        alt="Drive Icon"
        width={50}
        height={50}
        className="sm:w-[60px] sm:h-[60px]"
      />
    </Button>
  );
};

export default DriveButton;
