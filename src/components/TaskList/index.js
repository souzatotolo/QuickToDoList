import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function TaskList({data, handleDelete}) {
  return (
    <ScrollView>
      <Animatable.View
        
        style={styles.container}
        animation="slideInDown"
        useNativeDriver>
        <TouchableOpacity onPress={() => handleDelete(data)}>
          <Text style={styles.check}>✕</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.task}> {data.task} </Text>
        </View>
      </Animatable.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#4A6572',
    opacity: 0.6,
    padding: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 1,
      height: 3,
    },
  },
  check: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F9AA33',
  },
  task: {
    color: '#F3F3F3',
    fontSize: 18,
    paddingLeft: 15,
  },
})