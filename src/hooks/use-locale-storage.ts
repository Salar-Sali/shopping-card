import { useEffect, useState } from "react";

export const useLocaleStorage = <T>(
  name: string,
  initialValue: T | (() => T)
) => {
  const [value, setValue] = useState<T>(() => {
    const jsonValue = localStorage.getItem(name);
    if (jsonValue !== null) return JSON.parse(jsonValue);

    if (typeof initialValue === "function") return (initialValue as () => T)();
    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(name, JSON.stringify(value));
  }, [name, value]);

  return [value, setValue] as [typeof value, typeof setValue];
};
