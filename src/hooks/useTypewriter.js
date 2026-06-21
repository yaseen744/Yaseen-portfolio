import { useEffect, useState } from "react";

/**
 * useTypewriter — types out `text` character by character.
 * Returns the partial string to render, plus whether typing is done.
 */
export default function useTypewriter(text, { speed = 70, startDelay = 300 } = {}) {
  const [output, setOutput] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    let timeoutId;
    let intervalId;

    timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        i += 1;
        setOutput(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(intervalId);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, speed, startDelay]);

  return { output, done };
}
