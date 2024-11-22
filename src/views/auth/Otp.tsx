import Glyphs from "assets/Glyphs";
import React, { useMemo, useState } from "react";
import createStyles from "./styles/OtpVerificationStyle";
import { useTheme } from "@react-navigation/native";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { SCREENS, STRINGS } from "@shared-constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { navigate } from "@navigation";

const OTPVerificationScreen = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const [otp, setOtp] = useState(["", "", "", "", ""]);

  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;

    if (value.length === 1 && index < otp.length - 1) {
      inputs[index + 1]?.focus();
    }

    setOtp(newOtp);
  };

  const inputs = [];

  return (
    <ImageBackground
      source={Glyphs.LoginBackground}
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Image style={styles.logoStyle} source={Glyphs.Logo} />

          <Text style={styles.heading}>{STRINGS.OTP_MSG}</Text>

          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={(input) => (inputs[index] = input)}
                style={styles.otpBox}
                keyboardType="numeric"
                maxLength={1}
                value={digit}
                onChangeText={(value) => handleOtpChange(value, index)}
              />
            ))}
          </View>

          <Text style={styles.timerText}>
            <Text style={styles.resendText}>{STRINGS.RESEND}</Text>{" "}
            {STRINGS.VERIFY_MSG}
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigate(SCREENS.VERIFICATION);
            }}
          >
            <Text style={styles.buttonText}>{STRINGS.VERIFY}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default OTPVerificationScreen;
