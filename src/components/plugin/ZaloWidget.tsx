"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

const ZaloWidgetButton = () => {
  const openZalo = () => {
    window.open("https://zalo.me/0973276871", "_blank");
  };

  return (
    <Button
      onClick={openZalo}
      style={{
        position: "fixed",
        bottom: "50px",
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
        src="/icons/icons-zalo.svg"
        alt="Zalo Icon"
        width={56}
        height={56}
      />
    </Button>
  );
};

export default ZaloWidgetButton ;
