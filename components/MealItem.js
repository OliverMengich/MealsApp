import React from 'react';
import { View, Text,Platform, StyleSheet, Pressable, Image } from 'react-native';
function MealItem({item}) {
    return (
        <View style={styles.mealItem}>
            <Pressable 
                style={({pressed})=> pressed? styles.buttonPressed:null}
                android_ripple={{color: '#ccc'}}>
                <View style={styles.innerContainer}>
                    <View>
                        <Image style={styles.image} source={{uri: item.imageUrl}}/>
                        <Text style={styles.title}>{item.title}</Text>
                    </View>
                    <View style={styles.meal_detail}>
                        <Text style={styles.meal_detail_item}>Duration: {item.duration} mins</Text>
                        <Text style={styles.meal_detail_item}>Complexity: {item.complexity.toUpperCase()}</Text>
                        <Text style={styles.meal_detail_item}>Affordability: {item.affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    );
}
const styles = StyleSheet.create({
    image:{
        width: '100%',
        height: 200,
    },
    title:{
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },
    buttonPressed:{
        opacity: 0.5,
    },
    innerContainer:{
        borderRadius: 8,
        overflow: Platform.OS === 'android'?'hidden':'visible', // for Android ripple effect removing
    },
    mealItem:{
        margin: 16,
        borderRadius: 10,
        overflow: Platform.OS === 'android'?'hidden':'visible', // for Android ripple effect removing
        overflow: 'hidden',
        backgroundColor: '#fff',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.35,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
    },
    meal_detail:{
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 8,
        alignItems: 'center',
    },
    meal_detail_item:{
        marginHorizontal: 4,
        fontSize: 12,
    }
})
export default MealItem;