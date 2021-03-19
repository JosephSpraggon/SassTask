import React, { useState } from 'react';
import { Keyboard, Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import TaskList from './screens/TaskList';
import {Container,Content} from 'native-base';
import Swiper from 'react-native-swiper';
import Monster from './screens/Monster';
import TaskPage from './screens/TaskPage';

export default function App() {
  const [completedTasks, setCompletedTasks] = useState([]);
  const [incompleteTasks, setIncompletedTasks] = useState([]);

  return (
    <Container style={styles.EntireApp}>
      <Swiper
      loop ={false}
      showsPagination={false}
      index={1}>
        <Monster />
        <TaskList setCompletedTasks={setCompletedTasks} 
                  setIncompletedTasks={setIncompletedTasks} 
                  completedTasks={completedTasks} 
                  incompleteTasks={incompleteTasks} />
        <TaskPage completedTasks={completedTasks} incompleteTasks={incompleteTasks} />
      </Swiper> 
    </Container>
  );
}

const styles = StyleSheet.create({
  EntireApp:{
    flex: 1,
    backgroundColor: 'lightsalmon'
  }
});
