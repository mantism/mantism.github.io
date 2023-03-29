import { useState, useEffect, useRef } from 'react';

function useIsInViewport(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(([entry]) =>
      setIsIntersecting(entry.isIntersecting)
    );
  }, []);

  useEffect(() => {
    if (ref.current && observer.current) {
      observer.current.observe(ref.current);
    }

    return () => {
      if (ref.current && observer.current) {
        observer.current.disconnect();
      }
    };
  }, [ref]);

  return isIntersecting;
};

export default useIsInViewport;
