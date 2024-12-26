"use client";

import { useState, useLayoutEffect } from "react";

const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth < 768);
    });
  }, []);

  return { isMobile };
};

export default useMobile;
