import React, {useState} from "react";
import { Text, StyleSheet, view, View, TouchableOpacity,Alert, TextInput, ScrollView, Keyboard } from "react-native";
import { Entypo, FontAwesome   } from '@expo/vector-icons'; 
import * as Style from "../../assets/styles";
import { ApplicationProvider,IconRegistry, Layout, Icon } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Notes = ({navigation, ...props})  => {


    const [searchNote, setSerchNote] = useState();

    function deleteNote(index) {
        let newArray = [...props.notes];
        let movedNote = newArray.splice(index, 1);
        props.setNotes(newArray);
        props.setMoveToBin(movedNote);

        let bin = [movedNote, ...props.moveToBin]
        props.setMoveToBin(bin);

        AsyncStorage.setItem('storedNotes', JSON.stringify(newArray)).then(() => {
            props.setNotes(newArray);
          }).catch(error => console.error(error))
          
        AsyncStorage.setItem('deletedNotes', JSON.stringify(bin)).then(() => {
            props.setMoveToBin(bin);
          }).catch(error => console.error(error))
    }



    function search() {
        if(searchNote === ''){
            Alert.alert('Ingrese una nota a buscar...')
        }else if(searchNote !== ''){
            props.notes.forEach((item, index) => {
                if(item.includes(searchNote)){
                    let searchItem = [...props.notes];
                    let firstElOfArray = searchItem[0];
                    let index = [...props.notes].indexOf(item);
                    searchItem[0] = item;
                    searchItem[index] = firstElOfArray
                    props.setNotes(searchItem)
                }
            });
        }
        setSerchNote('');
        Keyboard.dismiss();
    }

    function clearAllNotes() {
        let emptyArray = [...props.notes];
        let deletedCompArray = [...props.moveToBin];
        emptyArray.forEach((item, index) =>{
            deletedCompArray.push(item);
        })
        emptyArray = [];
        props.setNotes(emptyArray);
        props.setMoveToBin(deletedCompArray);


        AsyncStorage.setItem('storedNotes', JSON.stringify(emptyArray)).then(() => {
            props.setNotes(emptyArray);
          }).catch(error => console.error(error))
          
        AsyncStorage.setItem('deletedNotes', JSON.stringify(deletedCompArray)).then(() => {
            props.setMoveToBin(deletedCompArray);
          }).catch(error => console.error(error))
    }

    return (
        <View style={[styles.notesContainer]}>
            <View style={styles.headingContainer}>
                <Text style={styles.heading}>Tus notas..</Text>
            
            
            <View style={{flexDirection: 'row'}}>

                <TouchableOpacity style={[styles.button, {marginLeft: 40}]} onPress={ () => navigation.navigate('DeleteNotes')}>
                    <IconRegistry icons={EvaIconsPack} />
                    <ApplicationProvider {...eva} theme={eva.light}>
                        {/*<Icon name="facebook" fill="white" style={{with: 25,height: 50}} />*/}
                        <Entypo name="trash" size={30} color="white" style={{marginTop:8}} />
                    </ApplicationProvider>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button]} onPress={ () => navigation.navigate('AddNote')}>
                    <IconRegistry icons={EvaIconsPack} />
                    <ApplicationProvider {...eva} theme={eva.light}>
                        {/*<Icon name="plus-outline" style={{with: 25,height: 50}} />*/}
                        <Entypo name="plus" size={30} color="white" style={{marginTop:8}} />
                    </ApplicationProvider>
                </TouchableOpacity>
             </View>
             </View>
             
             <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{fontWeight: '700', fontSize: 18, color:Style.color}}>
                        Total: {props.notes.length}
                    </Text>
                </View>       
 
                <View style={styles.divider}></View>
                
                <View style={styles.searchContainer}>
                    <TextInput style={[styles.input, {borderWidth:3}]} placeholderTextColor={Style.color}  placeholder="Buscar..." 
                    value={searchNote} onChangeText={((text) => setSerchNote(text))} />
                        
                
                    <TouchableOpacity style={[styles.searchButton, {width: 50}]} onPress={(() => search())} >
                        <IconRegistry icons={EvaIconsPack} />
                        <ApplicationProvider {...eva} theme={eva.light}>
                            {/*<Icon name="plus-outline" style={{with: 25,height: 50}} />*/}
                            <FontAwesome name="search" size={30} color="white" style={{marginTop:2}} />
                        </ApplicationProvider>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.searchButton} onPress={(() => clearAllNotes())}>
                        <Text style={styles.searchButtonText}> Limpiar </Text>
                    </TouchableOpacity>
                
                </View>

                <ScrollView style={styles.scrollView} showsHorizontalScrollIndicator={false}>
                    {
                        props.notes.lenght === 0 
                        ?
                        <View style={styles.emptyNoteContainer}>
                            <Text style={styles.emptyNoteText}>
                                No hay notas cargadas.
                            </Text>
                        </View>
                        :
                        props.notes.map((item, index) => 
                            <View style={styles.item} key={index}>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <View style={styles.note}>
                                        <Text style={styles.index}>
                                            {index + 1}.
                                        </Text>
                                        <Text style={styles.text}>
                                            {item}
                                        </Text>
                                    </View>
                                        <TouchableOpacity onPress={() => deleteNote(index)}>
                                            <Text style={styles.delete}>X</Text>
                                        </TouchableOpacity>
                                </View>
                                        
                                    <View style={styles.dateContainer}>
                                            <Text>Fecha: {props.date}</Text>
                                        <TouchableOpacity onPress={() => navigation.navigate('EditNote', {
                                            i: index,
                                            n: item
                                        })}>
                                            <Text style={styles.delete}>Editar</Text>
                                        </TouchableOpacity>
                                    </View>
                            </View>

                        )
                    }
                </ScrollView>

        </View>

    )

}



export default Notes;