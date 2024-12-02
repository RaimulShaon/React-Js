import { createContext, useContext } from "react";

export const ThemeContex = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {} 
}) 


export const ThemeContextProvider = ThemeContex.Provider

export  default function useTheme () {
    return useContext(ThemeContex)
}