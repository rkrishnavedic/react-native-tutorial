import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

export default function AddTodo({submitHandler}){

    const [text, setText] = useState('');

    return(
        <View>
            <TextInput style={styles.input} 
            placeholder='new todo...'
            value={text}
            onChangeText={(val)=>setText(val)}
            />
            <View style={styles.button}>
            <Button onPress={()=>submitHandler(text)} title="add todo"/> 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor:'indigo',
        textAlign:'center'
    },
    blueText:{
        color:'#1a66ff'
      },
    button:{
        borderColor:'#1a66ff',
        borderWidth: 1,
        textAlign:'center',
        borderRadius:200,
        width:200,
        alignSelf:'center'
      },
     
})