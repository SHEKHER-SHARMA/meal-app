import React, { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Image,
  Text,
  Button,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from "react-native";

import {
  useSelector,
  useDispatch,
  connect,
  MapDispatchToProps,
} from "react-redux";
import HeaderButtons from "../components/HeaderButtons";
import DefaultText from "../components/DefaultText";
import { toggleFavorite } from "../store/actions/meals";

import { AntDesign } from "@expo/vector-icons";

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const MealDetailScreen = (props) => {
  const availableMeals = useSelector((state) => state.meals.meals);
  const dispatch = useDispatch();
  const { mealId } = props.route.params;

  const [currentFavoriteMeal, setcurrentFavoriteMeal] = useState(
    useSelector((state) =>
      state.meals.favoriteMeals.some((meal) => meal.id === mealId)
    )
  );

  function change(){
    if(currentFavoriteMeal){
      setcurrentFavoriteMeal(false)
    }else{
      setcurrentFavoriteMeal(true)
    }
  }


  const toggleFavoriteHandler = React.useCallback(() => {
    dispatch(toggleFavorite(mealId));
    change();
  }, [dispatch, mealId]);

  const selectedMeal = availableMeals.find((meal) => meal.id === mealId);

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      title: selectedMeal.title,
      headerTitleAlign: "center",
      headerRight: () => (
        <TouchableOpacity  onPress={toggleFavoriteHandler}>
          <AntDesign
            name={currentFavoriteMeal ? 'star' : 'staro'}
            size={24}
            color="black"
          />
        </TouchableOpacity>
      ),
    });
  }, [props.navigation, currentFavoriteMeal, toggleFavoriteHandler]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});

export default connect(MapDispatchToProps)(MealDetailScreen);
