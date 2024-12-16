import { useCallback, useRef } from "react";

import { ANIMATION_DELAY } from "@/shared/config/constants.ts";

export const useScrollLock = () => {
  const scrollOffsetRef = useRef(0);

  const lockScroll = useCallback(() => {
    const scrollBarWidth = window.innerWidth - document.body.offsetWidth;
    const isIOS =
      /^iP/.test(navigator.platform) ||
      (/^Mac/.test(navigator.platform) && navigator.maxTouchPoints > 4);

    document.body.classList.add("lock");
    document.body.style.paddingRight = `${scrollBarWidth}px`;

    if (isIOS) {
      scrollOffsetRef.current = window.pageYOffset;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollOffsetRef.current}px`;
      document.body.style.width = "100%";
    }
  }, []);

  const unlockScroll = useCallback(() => {
    setTimeout(() => {
      const isIOS =
        /^iP/.test(navigator.platform) ||
        (/^Mac/.test(navigator.platform) && navigator.maxTouchPoints > 4);

      document.body.classList.remove("lock");
      document.body.style.paddingRight = "";

      if (isIOS) {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        window.scrollTo(0, scrollOffsetRef.current);
      }
    }, ANIMATION_DELAY);
  }, []);

  return {
    lockScroll,
    unlockScroll
  };
};
