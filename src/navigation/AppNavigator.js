import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeView from "../views/WelcomeView";
import SwipeView from "../views/SwipeView";
import HomeView from "../views/HomeView";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      {" "}
      {/* 🔥 ESTE FALTABA */}
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeView} />
        <Stack.Screen name="Swipe" component={SwipeView} />
        <Stack.Screen name="Home" component={HomeView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
