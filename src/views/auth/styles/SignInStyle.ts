import { ViewStyle, StyleSheet, TextStyle, ImageStyle } from "react-native";
import { ExtendedTheme } from "@react-navigation/native";

interface Style {
  buttonContainer: ViewStyle;
  container: ViewStyle;
  fieldsContainer: ViewStyle;
  fieldsSubContainer: ViewStyle;
  forgotPasswordText: ViewStyle;
  input: ViewStyle;
  logoContainer: ViewStyle;
  logoStyle: ImageStyle;
  password: ViewStyle;
  submitButton: TextStyle;
  submitText: ViewStyle;
  backgroundImage:ViewStyle
  headerText:TextStyle
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    headerText: {
      fontSize: 16,
      color: '#333333',
      textAlign: 'center',
      marginBottom: 20,
    },
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.background,
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover', 
    },
    logoContainer: {
      flex: 1,
      justifyContent: "center",
    },
    logoStyle: {
      height: 80,
      width: 80,
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
      height: 45,
      borderWidth: 1,
      borderColor: colors.text,
      borderRadius: 5,
      padding: 10,
      marginBottom: 20,
      color: colors.text,
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
