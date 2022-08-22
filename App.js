import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Notes from './components/Notes';
import AddNote from './components/AddNote';
import DeleteNotes from './components/DeleteNotes';
import EditNote from './components/EditNote';
import AsyncStorage from '@react-native-async-storage/async-storage';

import React, { useState, useEffect} from 'react';

const Stack = createNativeStackNavigator();

export default function App() {

  const [note, setNote] = useState();
  const [notes, setNotes] = useState([]);
  const [date, setDate] = useState(new Date().toUTCString());
  const [moveToBin, setMoveToBin] = useState([]);


  function handleNote() {
    let newNote = note;
    let newNotes = [newNote, ...notes];
    setNotes(newNotes);
    setNote('');

    AsyncStorage.setItem('storedNotes', JSON.stringify(newNotes)).then(() => {
      setNotes(newNotes);
    }).catch(error => console.error(error));

    AsyncStorage.setItem('date', JSON.stringify(date)).then(() => {
      setDate(date);
    }).catch(error => console.error(error));
  }

  useEffect(() => {
    loadNotes();
  })

  function loadNotes() {
    AsyncStorage.getItem('storedNotes').then(data => {
      if (data !== null) {
        setNotes(JSON.parse(data));
      }
    }).catch(error => console.error(error));
    
    AsyncStorage.getItem('deletedNotes').then(data => {
      if (data !== null) {
        setMoveToBin(JSON.parse(data));
      }
    }).catch(error => console.error(error));

    AsyncStorage.getItem('notes')
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" >
          {props => <Notes {...props} notes={notes} setNotes={setNotes} moveToBin={moveToBin} setMoveToBin={setMoveToBin} note={note} setNote={setNote} date={date} setDate={setDate} />}
        </Stack.Screen>
        <Stack.Screen name="AddNote" >
          {props => <AddNote {...props} note={note} setNote={setNote} handleNote={handleNote} />}
        </Stack.Screen>
        
        <Stack.Screen name="DeleteNotes" >
          {props => <DeleteNotes {...props} moveToBin={moveToBin} setMoveToBin={setMoveToBin} notes={notes} setNotes={setNotes} date={date} />}
        </Stack.Screen>

        <Stack.Screen name="EditNote" >
          {props => <EditNote {...props} notes={notes} setNotes={setNotes}  />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}


//https://www.youtube.com/watch?v=95SVAJQvZao
// 1:05