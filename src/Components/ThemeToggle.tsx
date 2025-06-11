import { useContext } from "react";
import { ThemeContext } from "../App";

export default function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="mb-3">
      <div>Day 5</div>
      <button
        className={
          theme === "light"
            ? "toggle-button toggle-button--active"
            : "toggle-button"
        }
        onClick={() => {
          setTheme("light");
        }}
      >
        Light
      </button>
      <button
        className={
          theme === "dark"
            ? "toggle-button toggle-button--active"
            : "toggle-button"
        }
        onClick={() => {
          setTheme("dark");
        }}
      >
        Dark
      </button>
    </div>
  );
}
