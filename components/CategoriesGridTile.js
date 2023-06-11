import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
function CategoriesGridTile({title, color}) {
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

export default CategoriesGridTile;