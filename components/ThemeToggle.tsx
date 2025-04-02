"use client";

"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent hydration mismatch

  const currentTheme = theme === "system" ? systemTheme : theme;

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };

  return (
    <Button onClick={toggleTheme} variant="outline" size="icon">
      {currentTheme === "light" ? (
        <Sun className="w-5 h-5" />
      ) : currentTheme === "dark" ? (
        <Moon className="w-5 h-5" />
      ) : (
        <Monitor className="w-5 h-5" />
      )}
    </Button>
  );
}
