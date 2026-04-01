import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeView from "../views/WelcomeView";
import SwipeView from "../views/SwipeView";
import HomeView from "../views/HomeView";
import LoginView from "../views/LoginView";
import SignUpView from "../views/SignUpView";
import ProfileView from "../views/ProfileView";
import PetDetailView from "../views/PetDetailView";
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
        <Stack.Screen name="Login" component={LoginView} />
        <Stack.Screen name="SignUp" component={SignUpView} />
        <Stack.Screen name="Profile" component={ProfileView} />
        <Stack.Screen name="PetDetail" component={PetDetailView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
