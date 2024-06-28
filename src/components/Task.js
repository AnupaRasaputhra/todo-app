import React from 'react';
import { List, Checkbox, IconButton } from 'react-native-paper';
import { styles } from './TaskStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function Task({ task, toggleTaskStatus, deleteTask }) {
  return (
    <List.Item
      title={task.title}
      description={task.status ? 'done' : 'due'}
      left={() => (
        <Checkbox
          status={task.status ? 'checked' : 'unchecked'}
          onPress={() => toggleTaskStatus(task.id)}
          color="green"
        />
      )}
      right={() => (
        <Icon
          name="trash-can"
          size={24}
          onPress={() => deleteTask(task.id)}
          style={styles.trashIcon}
        />
      )}
      style={styles.task}
    />
  );
}