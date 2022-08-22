import react from  'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import * as Style from "../assets/styles";
import { styles } from "./Notes";
import AsyncStorage from '@react-native-async-storage/async-storage';

const DeleteNotes = ({...props}) => {

    console.log(props.moveToBin.lenght);

    function emptyBin(params) {
        Alert.alert(
            'Eliminar todas las notas',
            'Esta seguro de eliminar todas las notas?',
                [
                    { 
                        text: 'No',
                        onPress: () => console.log('no eliminar'),
                        style: 'cancel' 
                    },
                    { 
                        text: 'Si', 
                        onPress: () => {
                            let emptyArray = {...props.moveToBin};
                            emptyArray = [];
                            props.setMoveToBin(emptyArray);

                            AsyncStorage.setItem('deletedNotes', JSON.stringify(emptyArray)).then(() => {
                               props.setMoveToBin(emptyArray);
                            }).catch(error => console.error(error));
                        
                        }

                    }
                ]
        )
    }

    function undoAllNotes() {
        let deletedNotes = [...props.moveToBin];
        let notes = [...props.notes];
        deletedNotes.forEach(
            (note, index) => {
                notes.push(note)
            })
        props.setMoveToBin([]);
        props.setNotes(deletedNotes)

        AsyncStorage.setItem('storedNotes', JSON.stringify(notes)).then(() => {
           props.setNotes(notes);
        }).catch(error => console.error(error));
        AsyncStorage.setItem('deletedNotes', JSON.stringify([])).then(() => {
           props.setMoveToBin([]);
        }).catch(error => console.error(error));
    }

    function undoNote(index) {
        let getBack = props.moveToBin[index];
        let array = [getBack, ...props.notes];
        props.setNotes(array);
        
        let NewArray = [...props.moveToBin];
        NewArray.splice(index, 1);
        props.setMoveToBin(NewArray);

        AsyncStorage.setItem('storedNotes', JSON.stringify(array)).then(() => {
            props.setNotes(array);
         }).catch(error => console.error(error));

         AsyncStorage.setItem('deletedNotes', () => {
            return;
         })
        
    }
    function permanentlyDelete(index) {
        Alert.alert(
            'Eliminar nota',
            'Esta seguro de eliminar esta nota?',
                [
                    { 
                        text: 'No',
                        onPress: () => console.log('no eliminar'),
                        style: 'cancel' 
                    },
                    { 
                        text: 'Si', 
                        onPress: () => {
                            let newArray = [...props.moveToBin];
                            newArray.splice(index, 1);
                            props.setMoveToBin(newArray);

                            AsyncStorage.setItem('deletedNotes', JSON.stringify(newArray)).then(() => {
                                props.setMoveToBin(newArray);
                             }).catch(error => console.error(error));
                        }

                    }
                ]
        )
    }


     return (
        <ScrollView>
            <View style={styles.notesContainer}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <TouchableOpacity style={style.empyButton} onPress={() => undoAllNotes()}>
                        <Text style={style.empyButtonText}>Volver todo</Text>
                    </TouchableOpacity>
                    <Text style={{fontWeight: '700', fontSize: 18, color: Style.color}}>
                        Total {props.moveToBin.length}
                    </Text>
                    <TouchableOpacity style={style.empyButton} onPress={() => emptyBin()}>
                        <Text style={style.empyButtonText}>Vaciar</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.divider}></View>

                {props.moveToBin.length === 0
                ?
                <View style={styles.emptyNoteContainer}>
                    <Text style={styles.emptyNoteText}>
                        No hay notas eliminadas.
                    </Text>
                </View>
                :
                props.moveToBin.map((item, index) =>

                    <View style={styles.item} key={index}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <View style={styles.note}>

                                <Text style={styles.index}>{index + 1}.</Text>
                                <Text style={styles.text}>{item}</Text>
                            </View>
                            
                            <TouchableOpacity onPress={() => undoNote(index)}>
                                <Text style={styles.delete}>Regresar</Text>
                            </TouchableOpacity>

                        </View>
                                        
                            <View style={styles.dateContainer}>
                                    <Text>Fecha: {props.date}</Text>
                                <TouchableOpacity onPress={() => permanentlyDelete(index)}>
                                    <Text style={styles.delete}>Eliminar</Text>
                                </TouchableOpacity>
                            </View>
                    </View>
                

                )
            }
            </View>
        </ScrollView>
     )
}
const style = StyleSheet.create({
    empyButton: {
        backgroundColor: Style.color,
        width: "25%",
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        height: 35,
        marginBottom: 5
    },
    empyButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: "700",
    }
})

export default DeleteNotes;