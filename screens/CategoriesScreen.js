import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import HeaderButtons from '../components/HeaderButtons';
import { FontAwesome } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';



import HeaderButton from '../components/HeaderButtons';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = props => {

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      title: "Meals",
      headerLeft: () => (
        <FontAwesome name="bars" size={24} color="black" onPress={() => props.navigation.dispatch(DrawerActions.openDrawer())} />
      ),
    });
  }, [props.navigation]);

  const renderGridItem = itemData => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate(
            'MealScreen',
           {
              categoryId: itemData.item.id
            }
          );
        }}
      />
    );
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

CategoriesScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Meal Categories',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton} />      
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoriesScreen;
