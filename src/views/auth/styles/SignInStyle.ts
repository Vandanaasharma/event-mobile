import { ViewStyle, StyleSheet, TextStyle, ImageStyle } from "react-native";
import { ExtendedTheme } from "@react-navigation/native";

interface Style {
  buttonContainer: ViewStyle;
  container: ViewStyle;
  fieldsContainer: ViewStyle;
  fieldsSubContainer: ViewStyle;
  forgotPasswordText: TextStyle;
  input: TextStyle;
  logoContainer: ViewStyle;
  logoStyle: ImageStyle;
  password: TextStyle;
  submitButton: TextStyle;
  submitText: TextStyle;
  backgroundImage: ViewStyle;
  headerText: TextStyle;
  orText: TextStyle;
  button: ViewStyle;
  buttonText: TextStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    headerText: {
      fontSize: 16,
      color: "#333333",
      textAlign: "center",
      marginBottom: 20,
    },
    container: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
      backgroundColor: "white",
      flex: 1,
      width: "100%",
      borderRadius: 700
    },
    backgroundImage: {
      flex: 1,
      resizeMode: "cover",
    },
    orText: {
      fontSize: 16,
      color: "#aaa",
      marginVertical: 10,
    },
    button: {
      marginTop: 20,
      width: 300,
      height: 60,
      backgroundColor: "#d32f2f",
      borderRadius: 30,
      justifyContent: "center",
      alignItems: "center",
    },
    buttonText: {
      color: "#ffffff",
      fontSize: 16,
      fontWeight: "bold",
    },
    logoStyle: {
      height: 80,
      width: 80,
      marginBottom: 20,
    },
    fieldsContainer: {
      flex: 1,
      flexDirection: "row",
    },
    fieldsSubContainer: {
      flex: 1,
      flexDirection: "column",
      padding: 30,
    },
    input: {
      height: 60,
      borderWidth: 1,
      borderColor: colors.text,
      borderRadius: 5,
      padding: 10,
      marginBottom: 20,
      width: 300,
      color: colors.textFieldBorder,
    },
    password: {
      height: 45,
      borderWidth: 1,
      borderColor: colors.text,
      borderRadius: 5,
      padding: 10,
      color: colors.text,
    },
    forgotPasswordText: {
      textAlign: "right",
    },
    buttonContainer: {
      flex: 1,
      flexDirection: "row",
      paddingHorizontal: 30,
    },
    submitButton: {
      flex: 1,
      height: 50,
      backgroundColor: colors.primary,
      justifyContent: "center",
      alignItems: "center",
    },
    submitText: {
      color: colors.white,
    },
  });
};
