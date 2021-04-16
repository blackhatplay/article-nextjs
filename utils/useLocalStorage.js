import { useState, useEffect } from "react";

const hasWindow = typeof window !== "undefined";

const getSavedValue = (key, initValue) => {
  const savedValue = localStorage.getItem(key);
  if (!initValue && savedValue) {
    return savedValue;
  } else if (initValue) {
    return initValue;
  } else return "";
};

const useLocalStorage = (key, initValue) => {
  const [value, setValue] = useState(() => {
    if (hasWindow) {
      return getSavedValue(key, initValue);
    }

    return initValue;
  });

  if (hasWindow) {
    useEffect(() => {
      localStorage.setItem(key, value);
    }, [value]);
  }

  const clearValue = (key) => {
    localStorage.removeItem(key);
  };

  return [value, setValue, clearValue];
};

export default useLocalStorage;
