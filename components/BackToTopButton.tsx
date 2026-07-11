"use client";

import { useEffect, useState } from "react";

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="#top"
      aria-label="Volver al inicio"
      className="fixed bottom-6 right-6 z-40 bg-marian-600 hover:bg-marian-700 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-xl font-bold transition-all hover:scale-110"
    >
      ↑
    </a>
  );
}
