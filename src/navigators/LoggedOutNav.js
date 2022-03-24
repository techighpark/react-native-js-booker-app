import { createStackNavigator } from "@react-navigation/stack";
import { loggedOutNavName } from "../navConstants";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Welcome from "../screens/Welcome";

const Stack = createStackNavigator();

export default function LoggedOutNav() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: "screen",
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name={loggedOutNavName.welcome}
        component={Welcome}
      ></Stack.Screen>
      <Stack.Screen
        name={loggedOutNavName.login}
        component={Login}
      ></Stack.Screen>
      <Stack.Screen
        name={loggedOutNavName.signup}
        component={Signup}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
