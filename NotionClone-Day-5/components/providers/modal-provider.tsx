"use client";

import { useEffect } from "react";
import { useState } from "react";
import { SettingModal } from "../modals/settings-modal";
import { ConverImageModal } from "../modals/cover-image-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <SettingModal />
      <ConverImageModal />
    </>
  );
};
