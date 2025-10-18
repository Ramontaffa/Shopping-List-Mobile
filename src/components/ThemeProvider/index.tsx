import React from "react";
import { ThemeProvider } from "styled-components/native";
import theme from "../../styles/theme";

interface ThemeProviderViewProps {
  children: React.ReactNode;
}

export default function ThemeProviderView({
  children,
}: ThemeProviderViewProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
