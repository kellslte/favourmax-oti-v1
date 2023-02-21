import {  useRef, useEffect } from 'react'

export default function useInterval(callback, delay, level) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    let id = setInterval(() => {
      if (level === 110) return;
      savedCallback.current();
    }, delay);
    return () => clearInterval(id);
  }, []);
}