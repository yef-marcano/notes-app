import React from "react";
import { Text, StyleSheet, View, ScrollView, KeyboardAvoidingView,Platform,Keyboard, TouchableWithoutFeedback, TextInput, TouchableOpacity, Alert } from "react-native";
import * as Style from "../../assets/styles";
import { styles } from "./styles";


const AddNote = ({navigation, ...props}) => {
    return (
        <ScrollView>
            <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? 'padding': 'height'} >
                
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                    <View style={{padding: 20,justifyContent: 'center'}}>
        
                        <TextInput style={[styles.input]} placeholder='Escriba aqui..' multiline={true}
                        value={props.note} onChangeText={(text) => props.setNote(text)}
                        />

                        <TouchableOpacity style={styles.button} onPress={()=>{
                            if(props.note === ''){
                                Alert.alert('Erorr agregue un texto');
                            } else {
                                props.handleNote();
                                navigation.navigate('Home')
                            }
                        }}>
                            <Text style={styles.buttonText}> Agregar</Text>
                        </TouchableOpacity>
                        
                    </View>

                </TouchableWithoutFeedback>

            </KeyboardAvoidingView>
        </ScrollView>
    )
}


export default AddNote;