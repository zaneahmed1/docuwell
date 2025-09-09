import { useEffect, useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const [data, setData] = useState(() => {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : initialValue;
  });
  useEffect(() => localStorage.setItem(key, JSON.stringify(data)), [key, data]);
  return [data, setData];
}
