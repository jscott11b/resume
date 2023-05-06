import { useEffect } from "react";

const useClickEvent = (onClick: (event: MouseEvent) => void) => {
  const EVENT_TYPE = "click";

  useEffect(() => {
    window.addEventListener(EVENT_TYPE, onClick);
    return () => window.removeEventListener(EVENT_TYPE, onClick);
  }, [onClick]);
};

export { useClickEvent };