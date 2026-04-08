import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import WelcomeView from "../views/WelcomeView";
import LoginView from "../views/LoginView";
import SignUpView from "../views/SignUpView";

import HomeView from "../views/HomeView";
import SwipeView from "../views/SwipeView";
import HistorialView from "../views/HistorialView";
import ProfileView from "../views/ProfileView";
import AddPetView from "../views/AddPetView";
import PetDetailView from "../views/PetDetailView";
import SolicitudesView from "../views/SolicitudesView";

import { PetsProvider } from "../context/PetsContext";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        // 🔥 TAB BAR AZUL
        tabBarStyle: {
          backgroundColor: "#2F6BFF",
          height: 65,
          borderTopWidth: 0,
          elevation: 10,
        },

        // 🔥 COLORES ICONOS
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#C7D2FE",

        tabBarIcon: ({ color, focused }) => {
          let iconName;

          if (route.name === "Swipe")
            iconName = focused ? "heart" : "heart-outline";
          if (route.name === "Home")
            iconName = focused ? "home" : "home-outline";
          if (route.name === "Historial")
            iconName = focused ? "time" : "time-outline";
          if (route.name === "Profile")
            iconName = focused ? "person" : "person-outline";
          if (route.name === "Solicitudes")
            iconName = focused ? "mail" : "mail-outline";

          return (
            <Icon
              name={iconName}
              size={24}
              color={color}
              style={focused && { transform: [{ scale: 1.2 }] }} // 🔥 animación
            />
          );
        },
      })}
    >
      <Tab.Screen name="Swipe" component={SwipeView} />
      <Tab.Screen name="Home" component={HomeView} />
      <Tab.Screen name="Historial" component={HistorialView} />
      <Tab.Screen name="Solicitudes" component={SolicitudesView} />
      <Tab.Screen name="Profile" component={ProfileView} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <PetsProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            name="Welcome"
            component={WelcomeView}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginView}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUpView}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="AddPet"
            component={AddPetView}
            options={{ title: "Agregar mascota" }}
          />
          <Stack.Screen
            name="PetDetail"
            component={PetDetailView}
            options={{ title: "Detalle" }}
          />

          <Stack.Screen
            name="Main"
            component={MainTabs}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PetsProvider>
  );
}
