import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export const useDebouncedState = <T,>(
  initialValue: T,
  delay: number,
): [T, Dispatch<SetStateAction<T>>] => {
  const [value, setValue] = useState(initialValue);
  const [debouncedValue, setDebouncedValue] = useState(initialValue);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value]);

  return [debouncedValue, setValue];
};
