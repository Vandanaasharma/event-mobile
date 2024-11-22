import { ViewStyle, StyleSheet, TextStyle, ImageStyle } from "react-native";
import { ExtendedTheme } from "@react-navigation/native";

interface Style {
  container: ViewStyle;
  logo: ImageStyle;
  heading: TextStyle;
  otpContainer: ViewStyle;
  otpBox: ViewStyle;
  timerText: TextStyle;
  resendText: TextStyle;
  button: ViewStyle;
  buttonText: TextStyle;
  backgroundImage: ViewStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
      backgroundColor: "transparent",
    },
    logo: {
      height: 80,
      width: 80,
      marginBottom: 20,
    },
    backgroundImage: {
      flex: 1,
      resizeMode: "cover",
    },
    heading: {
      fontSize: 18,
      fontWeight: "400",
      color: "#666",
      marginBottom: 20,
    },
    otpContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginVertical: 20,
      marginHorizontal: 10,
      width: "80%",
    },
    otpBox: {
      width: 50,
      height: 60,
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 8,
      textAlign: "center",
      fontSize: 18,
      backgroundColor: "#f9f9f9",
      marginHorizontal: 6,
    },
    timerText: {
      fontSize: 14,
      color: "#666",
      marginBottom: 30,
    },
    resendText: {
      fontWeight: "bold",
      color: "#000",
    },
    button: {
      width: 300,
      height: 60,
      backgroundColor: "#d32f2f",
      borderRadius: 30,
      justifyContent: "center",
      alignItems: "center",
    },
    buttonText: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "600",
    },
  });
};
