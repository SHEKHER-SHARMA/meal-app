import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';
import { Button } from 'react-native';

//screen imports
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen'    



const Stack = createNativeStackNavigator();

function StackNavigation({navigation}){

    return(
            <Stack.Navigator screenOptions={{
                headerTitleAlign: 'center'
            }}>
            <Stack.Screen name="MainScreen" component={CategoriesScreen} />
            <Stack.Screen name="MealScreen" component={CategoryMealScreen} />
            <Stack.Screen name="DetailScreen" component={MealDetailScreen} />
            </Stack.Navigator>
    )
}


export default StackNavigation;