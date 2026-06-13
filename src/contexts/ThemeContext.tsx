import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  useLightUI: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check localStorage first, then system preference, default to dark
    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored && (stored === "light" || stored === "dark")) {
      return stored;
    }
    
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    }
    
    return "dark";
  });

  // Light UI uses completely different UI components (Stitch-generated)
  const useLightUI = theme === "light";

  useEffect(() => {
    console.log("Theme useEffect triggered, theme:", theme);
    // Apply theme to document
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      console.log("Applied dark mode classes");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      console.log("Applied light mode classes");
    }
    
    // Save to localStorage
    localStorage.setItem("theme", theme);
    console.log("Theme saved to localStorage:", theme);
  }, [theme]);

  const toggleTheme = () => {
    console.log("Theme toggle clicked, current theme:", theme);
    const newTheme = theme === "dark" ? "light" : "dark";
    console.log("Setting new theme:", newTheme);
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, useLightUI }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}