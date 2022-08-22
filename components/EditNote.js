import React, { useState } from "react";
import { Text, StyleSheet, View, ScrollView, KeyboardAvoidingView,Platform,Keyboard, TouchableWithoutFeedback, TextInput, TouchableOpacity, Alert } from "react-native";
import { styles } from './AddNote';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditNote = ({navigation, route, ...props}) => {
    
    const {i, n} = route.param;
    const [newEdit, SetNewEdit] = useState(n);


    function editNote() {
            let edited = [...props.notes]

            edited[i] = newEdit;

            if(newEdit === ''){
                Alert.alert('Erorr agregue un texto');
            }

            props.setNoptes(edited);
            navigation.navigate('Home')

            AsyncStorage.setItem('storedNotes', JSON.stringify(edited)).then(() => {
                props.setNotes(edited);
              }).catch(error => console.error(error));
          
        
    }

    return (
        <ScrollView>
            <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? 'padding': 'height'} >
                
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                    <View style={{padding: 20,justifyContent: 'space-around'}}>
        
                        <TextInput style={[styles.input]} placeholder='Escriba aqui..' multiline={true}
                        value={newEdit.toString()} onChangeText={(text) => SetNewEdit(text)}
                        />

                        <TouchableOpacity style={styles.button} onPress={() => editNote()}>
                            <Text style={styles.buttonText}> Editar</Text>
                        </TouchableOpacity>
                        
                    </View>

                </TouchableWithoutFeedback>

            </KeyboardAvoidingView>
        </ScrollView>
    )
}


export default EditNote;