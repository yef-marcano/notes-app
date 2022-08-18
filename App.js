import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Notes from './components/Notes';
import AddNote from './components/AddNote';
import DeleteNotes from './components/DeleteNotes';

import React, { useState} from 'react';

const Stack = createNativeStackNavigator();

export default function App() {

  const [note, setNote] = useState();
  const [notes, setNotes] = useState([]);
  const [date, setDate] = useState(new Date().toUTCString());

  function handleNote() {
    let newNote = note;
    let newNotes = [newNote, ...notes];
    setNotes(newNotes);
    setNote('');
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" >
          {props => <Notes {...props} notes={notes} setNotes={setNotes}/>}
        </Stack.Screen>
        <Stack.Screen name="AddNote" >
          {props => <AddNote {...props} note={note} setNote={setNote} handleNote={handleNote} />}
        </Stack.Screen>
        
        <Stack.Screen name="DeleteNotes" >
          {props => <DeleteNotes {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}


//https://www.youtube.com/watch?v=95SVAJQvZao
// 1:05