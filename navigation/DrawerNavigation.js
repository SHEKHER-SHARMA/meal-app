import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Button } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';

import StackNavigation from "./StackNavigation";
import FiltersScreen from '../screens/FiltersScreen';

const Drawer = createDrawerNavigator();

function DrawerNavigation({ navigation }) {
  return (
    <Drawer.Navigator defaultScreenOptions={{
      headerTitleAlign: 'center'
    }}>
      <Drawer.Screen
        name="Meals"
        options={{
          headerShown: false,
          drawerIcon: () => (<MaterialIcons name="set-meal" size={24} color="#52cafa" />)
        }}
        component={StackNavigation}
      />
      <Drawer.Screen name="Filter" options={{
        drawerIcon: () => (<Ionicons name="filter" size={24} color="black" />)
      }} component={FiltersScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
