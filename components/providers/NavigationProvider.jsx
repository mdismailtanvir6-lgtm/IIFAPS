"use client";

import { createContext, useContext, useMemo } from "react";
import { usePathname } from "next/navigation";

const NavigationContext = createContext(null);

export function NavigationProvider({ children }) {
  const pathname = usePathname();

  const value = useMemo(
    () => ({
      pathname,
      isHome: pathname === "/",
    }),
    [pathname],
  );

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);

  if (!context) {
    throw new Error("useNavigation must be used inside NavigationProvider");
  }

  return context;
}