"use client";

import { ThemeProvider } from "./ThemeProvider";
import { ScrollProvider } from "./ScrollProvider";
import { NavigationProvider } from "./NavigationProvider";

export function Providers({ children }) {
  return (
    <ThemeProvider>
      <NavigationProvider>
        <ScrollProvider className="h-screen">
          {children}
        </ScrollProvider>
      </NavigationProvider>
    </ThemeProvider>
  );
}