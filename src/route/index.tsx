import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { isReadyRef, navigationRef } from "@navigation";
import { SCREENS } from "@shared-constants";
import { DarkTheme, LightTheme, palette } from "@theme/themes";
import { useSelector } from "react-redux";
import { RootState } from "redux/store/Store";
import SignInViewModel from "viewModels/SignInViewModel";
import DetailScreen from "views/detail/DetailScreen";
import NotificationScreen from "views/notification/NotificationScreen";
import ProfileScreen from "views/profile/ProfileScreen";
import SearchScreen from "views/search/SearchScreen";
import HomeScreenViewModel from "../viewModels/HomeScreenViewModel";
import OTPVerificationScreen from "views/auth/Otp";
import VerificationScreen from "views/auth/Verified";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const HomeStack = createStackNavigator();
const TabIcon = (route: any, focused: boolean) => {
  const getTabIcon = (tabRoute: any) => {
    switch (tabRoute.name) {
      case SCREENS.HOME:
        return focused ? "" : "";
      case SCREENS.SEARCH:
        return focused ? "" : "";
      case SCREENS.NOTIFICATION:
        return focused ? "" : "";
      case SCREENS.PROFILE:
        return focused ? "" : "";
      default:
        return <></>;
    }
  };
  return getTabIcon(route.name);
};

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen
        name={SCREENS.DASHBOARD}
        component={HomeScreenViewModel}
      />
      <HomeStack.Screen name={SCREENS.DETAIL} component={DetailScreen} />
    </HomeStack.Navigator>
  );
};

const RenderTabNavigation = () => {
  const isDarkMode = useSelector(
    (state: RootState) => state.themeReducer.isDarkMode,
  );
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => TabIcon(route, focused),
        tabBarActiveTintColor: palette.primary,
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: isDarkMode ? palette.black : palette.white,
        },
      })}
    >
      <Tab.Screen name={SCREENS.HOME} component={HomeStackNavigator} />
      <Tab.Screen name={SCREENS.SEARCH} component={SearchScreen} />
      <Tab.Screen name={SCREENS.NOTIFICATION} component={NotificationScreen} />
      <Tab.Screen name={SCREENS.PROFILE} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  const isDarkMode = useSelector(
    (state: RootState) => state.themeReducer.isDarkMode,
  );
  React.useEffect((): any => {
    return () => (isReadyRef.current = false);
  }, []);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}
      theme={isDarkMode ? DarkTheme : LightTheme}
    >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={SCREENS.LOGIN} component={SignInViewModel} />
        <Stack.Screen
          name={SCREENS.DASHBOARD}
          component={RenderTabNavigation}
          initialParams={{ appTheme: isDarkMode }}
        />
        <Stack.Screen
          name={SCREENS.OTP_SCREEN}
          component={OTPVerificationScreen}
        />
        <Stack.Screen
          name={SCREENS.VERIFICATION}
          component={VerificationScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
