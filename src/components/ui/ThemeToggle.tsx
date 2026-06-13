import { motion } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      className="relative flex h-9 w-16 items-center rounded-full border border-line bg-bg-2/50 p-1 transition-colors hover:bg-bg-2 dark:border-line dark:bg-bg-2/50 dark:hover:bg-bg-2 light:border-light-line light:bg-light-bg-2/50 light:hover:bg-light-bg-2"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-2 text-sm shadow-[0_2px_8px_rgba(34,211,238,0.25)] dark:from-accent dark:to-accent-2 light:from-light-accent light:to-light-accent-2"
        animate={{
          x: isDark ? 0 : 28,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {isDark ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-bg">
            <path
              fill="currentColor"
              d="M12 3a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1zM21 12a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1zM6 12a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1zM12 18a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1zM5.636 5.636a1 1 0 0 1 1.414 0l1.415 1.414a1 1 0 0 1-1.415 1.414L5.636 7.05a1 1 0 0 1 0-1.414zM16.95 16.95a1 1 0 0 1 1.414 0l1.415 1.414a1 1 0 0 1-1.415 1.414L16.95 18.364a1 1 0 0 1 0-1.414zM16.95 5.636a1 1 0 0 1 0 1.414L15.536 8.464a1 1 0 0 1-1.415-1.414l1.415-1.414a1 1 0 0 1 1.414 0zM7.05 16.95a1 1 0 0 1 0 1.414L5.636 19.778a1 1 0 0 1-1.414-1.414L5.636 16.95a1 1 0 0 1 1.414 0zM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"
            />
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-white">
            <path
              fill="currentColor"
              d="M12 2.25a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75zM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0zM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59zM21.75 12a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75zM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591zM12 18a.75.75 0 0 1 .75.75V20.25a.75.75 0 0 1-1.5 0V18.75A.75.75 0 0 1 12 18zM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59zM6 12a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 6 12zM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591z"
            />
          </svg>
        )}
      </motion.div>
      
      {/* Background icons */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2 text-xs opacity-40">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-muted dark:text-muted light:text-light-muted">
          <path
            fill="currentColor"
            d="M12 2.25a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75zM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0zM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59zM21.75 12a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75zM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591zM12 18a.75.75 0 0 1 .75.75V20.25a.75.75 0 0 1-1.5 0V18.75A.75.75 0 0 1 12 18zM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59zM6 12a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 6 12zM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591z"
          />
        </svg>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-muted dark:text-muted light:text-light-muted">
          <path
            fill="currentColor"
            d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162z"
          />
        </svg>
      </div>
    </motion.button>
  );
}