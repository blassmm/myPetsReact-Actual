import { useState, useEffect } from "react";

const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const handleMediaQueryChange = (e) => setIsMobile(e.matches);

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    handleMediaQueryChange(mediaQuery);

    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, [breakpoint]);

  return isMobile;
};

export default useIsMobile;