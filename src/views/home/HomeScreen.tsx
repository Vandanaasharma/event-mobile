import { useTheme } from "@react-navigation/native";
import React, { useMemo } from "react";
import { FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import createStyles from "./HomeScreen.style";
import CardItem from "./components/card-item/CardItem";

import { User } from "models/UserModel";
import AppHeader from "components/Header";

interface HomeScreenProps {
  handleItemPress: () => void;
  userData: User;
}

const List = (props: any) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={props.userData.userData}
      renderItem={({ item }) => (
        <CardItem data={item} onPress={props.handleItemPress} />
      )}
    />
  );
};

const HomeScreen = (props: HomeScreenProps) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    <SafeAreaView style={styles.container}>
      <AppHeader headerTitle="Successive RN Boilerplate" />
      <View style={styles.listContainer}>{List(props)}</View>
    </SafeAreaView>
  );
};

export default HomeScreen;
