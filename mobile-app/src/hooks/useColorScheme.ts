import { useColorScheme as useNativeColorScheme  } from "react-native";

export const useColorScheme = () => {
  return useNativeColorScheme() ?? "light";
};

export default useColorScheme;
