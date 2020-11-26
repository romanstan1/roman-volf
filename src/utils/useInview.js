/* global window, IntersectionObserver */
import { useState, useEffect, useRef } from "react";

const useInview = (once, threshold = 0.5, triggerOnNoSupport = true) => {
  const [inView, setInview] = useState(false);
  const ref = useRef();

  useEffect(() => {
    // no intersectionObserver so element will always be visible
    if ("IntersectionObserver" in window === false) {
      if (triggerOnNoSupport) {
        setInview(true);
      }
      return () => {};
    }

    // Listen to viewport updates for element
    const observer = new IntersectionObserver(entries => {
      entries.forEach(
        entry => {
          const { isIntersecting } = entry;

          if (!isIntersecting && inView && !once) {
            setInview(false);
          }
          if (isIntersecting && !inView) {
            setInview(true);
          }
        },
        {
          threshold,
        }
      );
    });

    // start observing
    if (ref.current) {
      observer.observe(ref.current);
    }

    // Stop observing when object is destroyed
    return function unbind() {
      observer.disconnect();
    };
  }, [ref, inView, once, threshold, triggerOnNoSupport]);

  return [ref, inView];
};

export default useInview;
