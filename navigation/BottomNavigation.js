import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import DrawerNavigation from "./DrawerNavigation";
import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import FavoritesScreen from "../screens/FavoritesScreen";

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      shifting={true}
      activeColor="#caddeb"
      inactiveColor="black"
      barStyle={{ backgroundColor: "#694fad" }}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-fast-food-outline" size={24} color={color} />
          ),
        }}
        component={DrawerNavigation}
      />
      <Tab.Screen
        name="tab2"
        options={{
          title:{
            headerTitle: 'fav',
            tabBarLabel: 'fav'
          },
          headerShown: true,
          tabBarLabel: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="favorite-border" size={24} color={color} />
          ),
        }}
        component={FavoritesScreen}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
