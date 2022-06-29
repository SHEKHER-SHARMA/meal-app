import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import 'react-native-gesture-handler';
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { combineReducers, createStore } from "redux";
import mealsReducer from "./store/reducers/meals";
import { Provider } from "react-redux";


//navigator imports
import StackNavigation from "./navigation/StackNavigation";
import DrawerNavigation from "./navigation/DrawerNavigation";
import MyTabs from "./navigation/BottomNavigation";
 
const rootReducer = combineReducers({
  meals: mealsReducer
});

const store = createStore(rootReducer);

export default function App() {

    const [loaded] = useFonts({
      "open-sans-bold": require('./assets/fonts/OpenSans-Bold.ttf'),
      "open-sans": require("./assets/fonts/OpenSans-Regular.ttf")
    });
    
    if (!loaded) {
      return <AppLoading />;
    }
  return (
    <Provider store={store}>
    <SafeAreaProvider>
      <StatusBar />
      <NavigationContainer>
      <MyTabs />
      </NavigationContainer>
    </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }
});
