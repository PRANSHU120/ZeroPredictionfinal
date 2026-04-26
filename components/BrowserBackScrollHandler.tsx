"use client";

import { useEffect } from "react";

export default function BrowserBackScrollHandler() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
    window.addEventListener("popstate", scrollTop);
    //window.addEventListener("hashchange", scrollTop);

    return () => {
      window.removeEventListener("popstate", scrollTop);
      window.removeEventListener("hashchange", scrollTop);
    };
  }, []);

  return null;
}
