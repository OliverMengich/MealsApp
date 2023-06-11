import React from 'react';
import {FlatList, Platform, View, Text, Pressable, StyleSheet} from 'react-native';
import { MEALS, CATEGORIES} from '../data/dummy-data';
import { useRoute} from '@react-navigation/native'
import MealItem from '../components/MealItem';
function MealsOverviewScreen({route, navigation}) {
    const categoryId = route.params.categoryId;
    const displayedMeals = MEALS.filter((meal)=>meal.categoryIds.indexOf(categoryId)>=0);
    const categoryTitle = CATEGORIES.find((category)=>category.id===categoryId).title;
    navigation.setOptions({
        title: categoryTitle,
    })
    function renderMealItem({item}){
        return (
            <MealItem item={item}/>
        );
    }
    return (
        <View style={styles.container}>
            <Text>Meals Overview Screen - {categoryId}</Text>
            {
                displayedMeals.map((meal)=>{
                    return (
                        <FlatList
                            key={meal.id}
                            data={displayedMeals}
                            keyExtractor={(item)=>item.id}
                            renderItem={renderMealItem}
                        />
                    );
                })
            }
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
})
export default MealsOverviewScreen;