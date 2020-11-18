import { DefaultTheme } from "@react-navigation/native";
import { colors } from './UI';

// override default primary and background color for screens.
export default navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.bgGrey,
  },
};