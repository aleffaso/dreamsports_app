import { useCallback, useState } from "react"
import { DefaultTheme } from "styled-components"
import { dark, light } from "../helpers/theme"

export const useTheme = () => {
  const [theme, setTheme] = useState<DefaultTheme>(light)
  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  },[theme, setTheme]);
  return {theme, toggleTheme}
}
