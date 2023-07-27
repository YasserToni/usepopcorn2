import { useState, useEffect } from "react";

export function useLocalStorageState(intialState, key) {
  const [value, setValue] = useState(function () {
    let storageValue = localStorage.getItem(key);

    return storageValue ? JSON.parse(storageValue) : intialState;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );
  return [value, setValue];
}
