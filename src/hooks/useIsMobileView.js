import { useEffect, useMemo, useState } from "react";

const DEFAULT_BREAKPOINT = 1024;

const createQuery = (breakpoint) => `(max-width: ${breakpoint}px)`;

const getInitialMatch = (breakpoint) => {
  if (typeof window === "undefined" || !window.matchMedia) {
    return false;
  }

  return window.matchMedia(createQuery(breakpoint)).matches;
};

const useIsMobileView = (breakpoint = DEFAULT_BREAKPOINT) => {
  const mediaQuery = useMemo(() => createQuery(breakpoint), [breakpoint]);
  const [isMobileView, setIsMobileView] = useState(() =>
    getInitialMatch(breakpoint),
  );

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) {
      return undefined;
    }

    const matcher = window.matchMedia(mediaQuery);

    const handleChange = (event) => {
      setIsMobileView(event.matches);
    };

    handleChange(matcher);
    matcher.addEventListener("change", handleChange);

    return () => {
      matcher.removeEventListener("change", handleChange);
    };
  }, [mediaQuery]);

  return isMobileView;
};

export default useIsMobileView;
