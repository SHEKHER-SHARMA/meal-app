import React from "react";
import MealList from "../components/MealList";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Header } from "react-native-elements";

import { useSelector } from "react-redux";

const FavoritesScreen = (props) => {
  const favMeals = useSelector((state) => state.meals.favoriteMeals);
  const propOwn = Object.getOwnPropertyNames(favMeals);
  if (propOwn.length <= 1 || !propOwn) {
    return (
      <>
        <Header
          backgroundColor="white"
          centerComponent={{ text: "Favourite", style: styles.heading }}
        />
        <View style={styles.container}>
          <Text>Hey! check Out some Meals to add to favourite ❤️.</Text>
        </View>
      </>
    );
  } else {
    return (
      <SafeAreaProvider>
        <Header
          backgroundColor="white"
          centerComponent={{ text: "Favourite", style: styles.heading }}
        />
        <MealList listData={favMeals} navigation={props.navigation} />
      </SafeAreaProvider>
    );
  }
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  heading: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
});
