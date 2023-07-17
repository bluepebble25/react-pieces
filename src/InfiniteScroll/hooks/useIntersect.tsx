import { useEffect, useRef, useCallback } from 'react';

type IntersectHandler = (
  entry: IntersectionObserverEntry,
  observer: IntersectionObserver
) => void;

function useIntersect(
  onIntersect: IntersectHandler,
  options?: IntersectionObserverInit
) {
  const ref = useRef<HTMLDivElement>(null); // target 요소를 저장할 ref

  const callback = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      // entries 배열인 이유는 한 observer가 여러 대상을 관찰할 수 있기 때문
      entries.forEach((entry) => {
        if (entry.isIntersecting) onIntersect(entry, observer);
      });
    },
    [onIntersect]
  );

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(callback, options);
    observer.observe(ref.current);

    return () => observer.disconnect(); // unmount되면 구독 해제
  }, [ref, options, callback]);

  return ref;
}

export default useIntersect;
