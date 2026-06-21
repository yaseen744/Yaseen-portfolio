import { useEffect, useRef, useState } from "react";

/**
 * useCountUp — animates a number from 0 to `end` over `duration` ms.
 * Pass `start = true` (e.g. from framer-motion's onViewportEnter) to begin.
 */
export default function useCountUp(end, start, duration = 1400) {
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!start || startedRef.current) return;
    startedRef.current = true;

    const startTime = performance.now();

    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setValue(Math.round(eased * end));
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [start, end, duration]);

  return value;
}
