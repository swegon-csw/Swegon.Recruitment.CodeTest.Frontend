import { useState, useEffect } from 'react';
import { getFromLocalStorage, setInLocalStorage } from '@/utils/storage/localStorage';

/**
 * Hook to manage state synchronized with localStorage
 */
export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    const item = getFromLocalStorage<T>(key);
    return item !== null ? item : initialValue;
  });

  const setValue = (value: T) => {
    setStoredValue(value);
    setInLocalStorage(key, value);
  };

  useEffect(() => {
    const item = getFromLocalStorage<T>(key);
    if (item !== null) {
      setStoredValue(item);
    }
  }, [key]);

  return [storedValue, setValue];
}
