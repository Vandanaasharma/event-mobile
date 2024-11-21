import Glyphs from 'assets/Glyphs';
import React, { useMemo, useState } from 'react';
import createStyles from "./styles/OtpVerificationStyle";
import { useTheme } from "@react-navigation/native";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';


const OTPVerificationScreen = () => {
  const theme = useTheme();
    const styles = useMemo(() => createStyles(theme), [theme]);
  const [otp, setOtp] = useState(['', '', '', '', '']); 

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
    <View style={styles.container}>
      <Image style={styles.logoStyle} source={Glyphs.Logo} />

      <Text style={styles.heading}>Please enter verification code</Text>

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
        <Text style={styles.resendText}>Resend</Text> verification code in 45 seconds
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};


export default OTPVerificationScreen;
