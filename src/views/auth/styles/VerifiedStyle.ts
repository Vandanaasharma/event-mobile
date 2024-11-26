import { ViewStyle, StyleSheet, TextStyle } from "react-native";
import { ExtendedTheme } from "@react-navigation/native";

interface Style {
  container: ViewStyle;
  backgroundImage: ViewStyle;
  verificationContainer: ViewStyle;
  successText: TextStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
    },
    backgroundImage: {
      
      width: "100%",
      height: "100%",
      backgroundColor: colors.transparent,
    },
    verificationContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      width: "100%",
      borderRadius: 700
    },

    successText: {
      marginTop: 20,
      fontSize: 18,
      color: "#333",
      fontWeight: "600",
    },
  });
};
