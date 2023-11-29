import React, { ReactNode } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Layout: React.FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <div dir="rtl" className="font-kufi">
      <ThemeSwitcher />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
