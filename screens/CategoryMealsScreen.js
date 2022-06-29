import React from 'react';
import { useSelector } from 'react-redux'; 

import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealScreen = props => {
  
  const {categoryId} = props.route.params;
  const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId);
  const availableMeals = useSelector(state => state.meals.filteredMeals);

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      title: selectedCategory.title
    })
  }, [props.navigation])

  const displayedMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0
  );

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};


export default CategoryMealScreen;
