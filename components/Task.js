import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const Task = (props) => {
  return (
    <View>
      <Text>{props.text}</Text>
    </View>
  )
}

export default Task;