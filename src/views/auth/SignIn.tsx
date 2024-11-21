
import { useTheme } from "@react-navigation/native";
import { SCREENS, STRINGS } from "@shared-constants";
import Glyphs from "assets/Glyphs";
import React, { useMemo } from "react";
import { Image, TextInput, View, ImageBackground, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import createStyles from "./styles/SignInStyle";
import { navigate } from "@navigation";

const SignInScreen = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);


  return (
    <ImageBackground
    source={Glyphs.LoginBackground} 
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Image style={styles.logoStyle} source={Glyphs.Logo} />
          <Text style={styles.headerText}>
            {STRINGS.LOGIN_PAGE_HEADING}
          </Text>
          <TextInput
            style={styles.input}
            placeholder={STRINGS.MOBILE_NUMBER_MSG}
            keyboardType="phone-pad"
          />

          <Text style={styles.orText}>or</Text>

          <TextInput
            style={styles.input}
            placeholder={STRINGS.EMAIL_MSG}
            keyboardType="email-address"
          />

          <TouchableOpacity style={styles.button} onPress={() => {navigate(SCREENS.OTP_SCREEN)}}>
            <Text style={styles.buttonText}>Send Verification Code</Text>
          </TouchableOpacity>

        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default SignInScreen;
