"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

interface ThemeComponentProps {
  children: React.ReactNode;
}

function ThemeComponent({ children }: ThemeComponentProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent rendering until mounted

  return (
    <div className={theme}>
      <div className="bg-white text-gray-700 dark:text-gray-200 dark:bg-[rgb(16,23,42)] min-h-screen">
        {children}
      </div>
    </div>
  );
}

export default ThemeComponent;
