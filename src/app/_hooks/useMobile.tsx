"use client";

import { useState, useLayoutEffect } from "react";

const useMobile = () => {
  const [isMobile, setIsMobile] = useState(true);

  useLayoutEffect(() => {
    setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth < 768);
    });
  }, []);

  return { isMobile };
};

export default useMobile;
