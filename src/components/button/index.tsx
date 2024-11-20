import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { debounceHOC } from "hocs/debounceHOC";
import { getTestID } from "utils";
import { useTheme } from "@react-navigation/native";
import RNText from "components/RNText";

const TouchableOpacityMultipleTapHandler = debounceHOC(
  TouchableWithoutFeedback,
);
export interface ButtonProps {
  buttonColor?: string;
  onPress: () => Promise<void>;
  style?: string;
  text: string;
}

const Button = (props: ButtonProps) => {
  const theme = useTheme();
  const { colors } = theme;
  return (
    <TouchableOpacityMultipleTapHandler
      accessibilityRole="button"
      onPress={props.onPress}
      testID={getTestID(props.text.replace(/ /g, ""))}
    >
      <View style={styles(colors).btnContainerStyle}>
        <RNText color={colors.buttonTextColor} fontSize={20}>
          {props.text}
        </RNText>
      </View>
    </TouchableOpacityMultipleTapHandler>
  );
};

const styles = (colors?: string) =>
  StyleSheet.create({
    // eslint-disable-next-line react-native/no-unused-styles
    btnContainerStyle: {
      backgroundColor: colors?.buttonColor,
      alignItems: "center",
      justifyContent: "center",
      alignContent: "center",
      borderRadius: 15,
      margin: 15,
      width: "90%",
      paddingVertical: 14.5,
      opacity: 1,
    },
  });

export default Button;
