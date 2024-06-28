import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { TextInput, Button, Switch, Text, Appbar } from 'react-native-paper';
import Task from '../components/Task';
import { styles } from './HomeScreenStyle';

export default function HomeScreen() {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskStatus, setTaskStatus] = useState(false);

  const addTask = () => {
    if (taskTitle.trim() !== '') {
      setTasks([...tasks, { id: Date.now().toString(), title: taskTitle, status: taskStatus }]);
      setTaskTitle('');
      setTaskStatus(false);
    }
  };

  const toggleTaskStatus = (taskId) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, status: !task.status } : task));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Appbar.Header style={styles.header}>
          <Appbar.Content title="My Todos" />
        </Appbar.Header>
      </View>
      <View style={styles.content}>
        <TextInput
          label="Title"
          value={taskTitle}
          onChangeText={setTaskTitle}
          style={styles.input}
        />
        <View style={styles.statusContainer}>
          <Text>Status: {taskStatus ? 'Done' : 'Due'}</Text>
          <Switch
            value={taskStatus}
            onValueChange={setTaskStatus}
          />
        </View>
        <Button mode="contained" onPress={addTask} disabled={taskTitle.trim() === ''} style={styles.addButton}>
          Add Task
        </Button>
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <Task
              task={item}
              toggleTaskStatus={toggleTaskStatus}
              deleteTask={deleteTask}
            />
          )}
          keyExtractor={item => item.id}
          style={styles.taskList}
        />
      </View>
    </View>
  );
}