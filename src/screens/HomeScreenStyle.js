import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
  },
  header: {
    backgroundColor: '#f0eeeb',
    elevation: 3
  },
  content: {
    flex: 1,
    padding: 20,
    marginTop: 20,
  },
  input: {
    marginBottom: 10,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  addButton: {
    marginBottom: 20,
  },
  taskList: {
    marginTop: 20,
  },
});