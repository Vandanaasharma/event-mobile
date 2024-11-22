import { View, Text, ImageBackground, Image } from "react-native";
import Glyphs from "assets/Glyphs";
import { useTheme } from "@react-navigation/native";
import createStyles from "./styles/VerifiedStyle";
import React, { useMemo } from "react";

const VerificationScreen = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={Glyphs.LoginBackground}
        style={styles.backgroundImage}
      >
        <View style={styles.verificationContainer}>
          <Image source={Glyphs.VectorImage} />
          <Text style={styles.successText}>Verification Successful</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default VerificationScreen;
