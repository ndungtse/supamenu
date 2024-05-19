import { useState } from "react";
import { useColorScheme as useNativeColorScheme } from "react-native";

export const useColorScheme = () => {
  const [colorScheme, setColorScheme] = useState(
    useNativeColorScheme() ?? "light"
  );

  const toggleColorScheme = () => {
    setColorScheme(colorScheme === "light" ? "dark" : "light");
  }

  return { colorScheme, setColorScheme, toggleColorScheme };
};

export default useColorScheme;
