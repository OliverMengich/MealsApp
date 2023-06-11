import {FlatList, Platform, View, Text, Pressable, StyleSheet} from 'react-native';

import {CATEGORIES} from '../data/dummy-data';
import {useNavigation} from '@react-navigation/native'
import React from 'react';
function CategoriesScreen({navigation}) {
    function renderCategoryItem({item}) {
        const {title, color, id} = item;
        function onPress() {
            navigation.navigate('MealsOverview', {
                categoryId: id
            });
        }
        return (
            <View style={[styles.gridItem ]}>
                <Pressable onPress={onPress} android_ripple={{color:'#ccc'}} 
                    style={(pressed)=>[styles.button, pressed? styles.buttonPressed:'']}>
                    <View style={[styles.innerContainer,{backgroundColor: color}]}>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                </Pressable>
            </View>
        );
    }
    return (
        <FlatList 
            data={CATEGORIES} 
            keyExtractor={(item)=>item.id} 
            renderItem={renderCategoryItem}
            numColumns={2} 
        />
    );
}
const styles = StyleSheet.create({
    gridItem:{
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 10,
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        overflow: Platform.OS === 'android'?'hidden':'visible', // for Android ripple effect removing
        backgroundColor: 'white', // fo iOS add this to disable shadow
    },
    button:{
        flex: 1,
    },
    buttonPressed:{
        opacity: 0.5,
    },
    innerContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        borderRadius: 10,
    },
    title:{
        fontWeight: 'bold',
        fontSize: 22,

    },
})
export default CategoriesScreen;