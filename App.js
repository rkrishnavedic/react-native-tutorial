import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import AddTodo from './components/addTodo';
import Header from './components/header';
import TodoItem from './components/todoItem';

export default function App() {

  const [data, setData] = useState([
    {id:'1',text:'Buy mac'},
    {id:'2',text:'Set up mac'},
    {id:'3',text:'Start Coding'},
  ]);

  const pressHandler=(id)=>{
    setData((prevData)=>{
      return prevData.filter(todo=>todo.id != id)
    })
  }

  const submitHandler=(text)=>{
    setData((prevData)=>{
      return [
        {id: Math.random().toString(), text:text},
        ...prevData
      ]
    })
  }

  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler}/>
        <View style={styles.list}>
          <FlatList
          data={data}
          renderItem={({item})=>{
            return(
            <TodoItem pressHandler={pressHandler} item={item}/>
            )
          }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
  },
  content:{
    padding: 20,
  },
  list:{

  },
  blueText:{
    color:'#1a66ff'
  },
});
