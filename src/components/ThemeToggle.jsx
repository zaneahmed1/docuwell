import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  // Apply theme to body
  useEffect(() => {
    if (dark) {
      document.body.classList.add("bg-dark", "text-light");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("bg-dark", "text-light");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="btn btn-outline-secondary ms-auto"
    >
      {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}
