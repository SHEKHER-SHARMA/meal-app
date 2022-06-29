import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, Platform } from 'react-native';


import Colors from '../constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from '../store/actions/meals';


const FilterSwitch = props => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ true: Colors.primaryColor }}
        thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const FiltersScreen = (props) => {

  const { navigation } = props;

  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const dispatch = useDispatch();
 
    React.useEffect(() => {
    console.log(isGlutenFree)
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian
    };

    dispatch(setFilters(appliedFilters));
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch]);


  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerTitle: 'Filter Meals',
      headerTitleAlign: 'center',
      headerLeft:() => (
        <FontAwesome style={{paddingLeft:"10%"}} name="bars" size={24} color="black" onPress={() => props.navigation.dispatch(DrawerActions.openDrawer())} />
      ),
    });
  }, [props.navigation]);



  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        label="Gluten-free"
        state={isGlutenFree}
        onChange={() => setIsGlutenFree(previousState => !previousState)}
      />
      <FilterSwitch
        label="Lactose-free"
        state={isLactoseFree}
        onChange={ () =>setIsLactoseFree(previousState => !previousState)}
      />
      <FilterSwitch
        label="Vegan"
        state={isVegan}
        onChange={() =>setIsVegan(previousState => !previousState)}
      />
      <FilterSwitch
        label="Vegetarian"
        state={isVegetarian}
        onChange={ () => setIsVegetarian(previousState => !previousState)}
      />
    </View>
  );
};



const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center'
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 15
  }
});

export default FiltersScreen;
