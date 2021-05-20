import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export const useDebouncedState = <T,>(
  initialValue: T,
  delay: number,
): [T, Dispatch<SetStateAction<T>>, (val: T) => void] => {
  const [runnable, setRunnable] = useState(true);
  const [value, setValue] = useState(initialValue);
  const [debouncedValue, setDebouncedValue] = useState(initialValue);

  const setValueNow = (val: T) => {
    setRunnable(false);
    setValue(val);
    setDebouncedValue(val);
    setRunnable(true);
  };

  useEffect(() => {
    if (runnable) {
      const handler = setTimeout(() => setDebouncedValue(value), delay);
      return () => clearTimeout(handler);
    }
  }, [value]);

  return [debouncedValue, setValue, setValueNow];
};
