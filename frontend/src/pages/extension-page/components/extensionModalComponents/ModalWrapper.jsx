// src/components/ModalWrapper.jsx
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ExtensionTutorialModal from "./ExtensionTutorialModal";

export default function ModalWrapper() {
  const location = useLocation();
  const [showTutorial, setShowTutorial] = useState(false);

  useEffect(() => {
    if (location.pathname === "/extension") {
      const seen = localStorage.getItem("seenTutorial");
      if (!seen) {
        setShowTutorial(true);
      }
    }
  }, [location]);

  const handleClose = () => {
    localStorage.setItem("seenTutorial", "true");
    setShowTutorial(false);
  };

  return (
    <>
      {location.pathname === "/extension" && (
        <ExtensionTutorialModal show={showTutorial} onClose={handleClose} />
      )}
    </>
  );
}
