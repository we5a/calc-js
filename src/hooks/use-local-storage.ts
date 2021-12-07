import { useEffect, useState } from "react";

export default function useLocalStorage(key: string, defaultValue: number = 0) {
  const [state, setState] = useState<any>(() => +JSON.parse(window.localStorage.getItem(key) || "0") || defaultValue);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}