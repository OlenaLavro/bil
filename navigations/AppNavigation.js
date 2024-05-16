import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StudentScreen } from "../screens/StudentScreen";
import { LoginScreen } from "../screens/LoginScreen";
import { TeacherScreen } from "../screens/TeacherScreen";
import { StudentProfileScreen } from "../screens/StudentProfileScreen";

import { store } from "../store";

import { ROLE_ROUTE_MAP, ROUTES } from "../constants";

const Stack = createNativeStackNavigator();

const MyTheme = {
  dark: false,
  colors: {
    primary: "rgb(128, 182, 255)",
    secondary: "rgb(255, 171, 75)",
    background: "rgb(242, 242, 242)",
    card: "rgb(255, 255, 255)",
    text: "rgb(28, 28, 30)",
    border: "rgb(199, 199, 204)",
    notification: "rgb(255, 69, 58)",
    black: "rgb(0,0,0)",
    white: "rbg(255,255,255)",
  },
};

export const AppNavigation = () => {
  const { getState } = store;
  const isSignedIn = getState().isSignedIn;

  const initialRouteName = isSignedIn
    ? ROLE_ROUTE_MAP[getState().role]
    : ROUTES.LOGIN;

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName={initialRouteName}>
        <Stack.Screen name={ROUTES.STUDENT} component={StudentScreen} />
        <Stack.Screen name={ROUTES.TEACHER} component={TeacherScreen} />
        <Stack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
        <Stack.Screen
          name={ROUTES.STUDENT_PROFILE}
          component={StudentProfileScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
