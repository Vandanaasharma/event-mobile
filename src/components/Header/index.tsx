import { useTheme } from "@react-navigation/native";
import AppText from "components/RNText";
import React from "react";
import { View } from "react-native";

export interface ButtonProps {
  headerTitle: string;
}

const AppHeader = (props: ButtonProps) => {
  const theme = useTheme();
  const { colors } = theme;
  return (
    <View
      style={{
        height: 64,
        backgroundColor: colors.primary,
        width: "100%",
        padding: 16,
        alignContent: "center",
      }}
    >
      <AppText fontSize={20} bold color={colors.white}>
        {props.headerTitle}
      </AppText>
    </View>
  );
};

export default AppHeader;
