import React, { useMemo } from "react";
import { View, StyleProp, ViewStyle, Pressable } from "react-native";
import { useTheme } from "@react-navigation/native";
/**
 * ? Local Imports
 */
import createStyles from "./CardItem.style";
import CustomText from "components/TextWrapper";
import RNBounceable from "libs/bounceable/RNBounceable";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface ICardItemProps {
  data: any;
  onPress: () => void;
  style?: CustomStyleProp;
}

const header = (name: string, email: string, colors: any, styles: any) => {
  return (
    <>
      <CustomText fontSize={20} bold color={colors.text}>
        {name}
      </CustomText>
      <CustomText
        fontSize={20}
        color={colors.placeholder}
        style={styles.descriptionTextStyle}
      >
        {email}
      </CustomText>
    </>
  );
};

const CardItem: React.FC<ICardItemProps> = ({ style, data, onPress }) => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);
  const { name, email } = data;

  return (
    <Pressable style={[styles.container, style]} onPress={onPress}>
      {header(name, email, colors, styles)}
      <View style={styles.contentContainer} />
    </Pressable>
  );
};

export default CardItem;
