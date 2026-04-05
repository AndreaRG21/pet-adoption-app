import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import WelcomeView from "../views/WelcomeView";
import LoginView from "../views/LoginView";
import SignUpView from "../views/SignUpView";
import ProfileView from "../views/ProfileView";
import PetDetailView from "../views/PetDetailView";
import AddPetView from "../views/AddPetView";
import SwipeView from "../views/SwipeView";
import HomeView from "../views/HomeView";
import HistorialView from "../views/HistorialView";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// 🔥 Tabs estilo diseño
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        // 🎨 barra
        tabBarStyle: {
          backgroundColor: "#fff",
          height: 65,
          borderTopWidth: 0,
          elevation: 10,
        },

        tabBarActiveTintColor: "#2F6BFF",
        tabBarInactiveTintColor: "#999",

        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 5,
        },

        // 🔥 ICONOS
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;

          if (route.name === "Swipe") {
            iconName = focused ? "heart" : "heart-outline";
          } else if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Historial") {
            iconName = focused ? "time" : "time-outline";
          }

          return <Icon name={iconName} size={22} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Swipe" component={SwipeView} />
      <Tab.Screen name="Home" component={HomeView} />
      <Tab.Screen name="Historial" component={HistorialView} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeView} />
        <Stack.Screen name="Login" component={LoginView} />
        <Stack.Screen name="SignUp" component={SignUpView} />
<Stack.Screen name="AddPet" component={AddPetView} />
        <Stack.Screen
          name="Main"
          component={MainTabs}
          options={{ headerShown: false }}
        />

        <Stack.Screen name="Profile" component={ProfileView} />
        <Stack.Screen name="PetDetail" component={PetDetailView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
