import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.headerTitle}>My todos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        padding: 10,
        backgroundColor:'#4d88ff'
    },
    headerTitle:{
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center',
        color:'white'
    }
})