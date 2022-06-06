import { useFonts } from "expo-font";
import OnBoarding from "./screens/OnBoarding";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./screens/Welcome";
import Login from "./screens/Login";

export default function App() {
  const [loaded] = useFonts({
    Inter: require("./assets/fonts/Inter-Regular.otf"),
    InterBold: require("./assets/fonts/Inter-Bold.otf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.otf"),
    GTAmerica: require("./assets/fonts/GT-America-Regular.otf"),
    GTAmericaBold: require("./assets/fonts/GT-America-Bold.otf"),
  });

  if (!loaded) {
    return null;
  }
  const Stack = createNativeStackNavigator();
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="OnBoarding" component={OnBoarding} />
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
