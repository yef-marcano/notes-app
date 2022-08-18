import React from "react";
import { Text, StyleSheet, view, View, TouchableOpacity, TextInput, ScrollView } from "react-native";
//import Ionicons from '@expo/vector-icons/Ionicons';
import { Entypo, FontAwesome   } from '@expo/vector-icons'; 
import * as Style from "../assets/styles";
import { ApplicationProvider,IconRegistry, Layout, Icon } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

const Notes = ({navigation, ...props})  => {

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
                        Total:
                    </Text>
                </View>       
 
                <View style={styles.divider}></View>
                
                <View style={styles.searchContainer}>
                    <TextInput style={[styles.input, {borderWidth:3}]} placeholderTextColor={Style.color}  placeholder="Buscar..." />    
                
                    <TouchableOpacity style={[styles.searchButton, {width: 50}]}>
                        <IconRegistry icons={EvaIconsPack} />
                        <ApplicationProvider {...eva} theme={eva.light}>
                            {/*<Icon name="plus-outline" style={{with: 25,height: 50}} />*/}
                            <FontAwesome name="search" size={30} color="white" style={{marginTop:2}} />
                        </ApplicationProvider>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.searchButton}>
                        <Text style={styles.searchButtonText}> Limpiar </Text>
                    </TouchableOpacity>
                
                </View>

                <ScrollView style={styles.scrollView} showsHorizontalScrollIndicator={false}>
                    {
                        props.notes.lenght === 0 ?
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
                                        <TouchableOpacity>
                                            <Text style={styles.delete}>X</Text>
                                        </TouchableOpacity>
                                </View>
                                        
                                    <View style={styles.dateContainer}>
                                            <Text>Fecha:</Text>
                                        <TouchableOpacity>
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


export const styles = StyleSheet.create({
    notesContainer: {
        paddingTop: 10,
        paddingHorizontal: 20,
        marginBottom: 70,
        opacity: 0.9,
    },
    heading:{
        fontSize: 30,
        fontWeight: "700",
        color: Style.color,
    },
    divider:{
        width: "100%",
        height: 2,
        backgroundColor: Style.color,
        marginTop: 5,
        marginBottom: 5,
    },
    item:{
        marginBottom: 20,
        padding: 20,
        color: 'black',
        opacity: 0.5,
        marginTop: 10,
        shadowColor: Style.color,
        shadowOpacity: 0.5,
        shadowOffset: {
            width:0,
            height: 4,
        },
        shadowRadius: 8,
        elevation: 5,
        backgroundColor: 'white',
        borderColor: Style.color,
        borderWidth: 2,
        borderRadius: 5,
        borderLeftWidth: 15,
    },
    index:{
        fontSize: 20,
        fontWeight: "800",
    },
    headingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button:{
        backgroundColor: Style.color,
        width: 50,
        borderRadius: 100,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        height: 50
    },
    buttonText:{
        color: 'white',
        fontSize: 32,
        fontWeight: '800',
    },
    scrollView:{
        marginBottom: 70
    },
    note:{
        flexDirection: 'row',
        width: '75%'
    },
    text:{
        fontWeight: '700',
        fontSize: 17,
        alignSelf: 'center'
    },
    delete:{
        color: Style.color,
        fontWeight: '700',
        fontSize: 15,
    },
    input:{
        height: 40,
        paddingHorizontal: 20,
        width: '65%',
        fontSize: 19,
        color: 'black',
        fontWeight: '600',
        opacity: 0.8,
        shadowColor: Style.color,
        shadowOpacity: 0.4,
        shadowOffset: {
            width:0,
            height: 4,
        },
        shadowRadius: 8,
        elevation: 5,
        backgroundColor: 'white',
        borderColor: Style.color,
        borderWidth: 2,
        borderRadius: 5,
    },
    

    searchContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 8
    },
    searchButton:{
        backgroundColor: Style.color,
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        borderRadius: 5,
        height: 40,

    },
    searchButtonText:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12,
    },
    emptyNoteContainer: {
        alignItems: 'center',
        marginTop: 240,
    },
    emptyNoteText: {
     color: Style.color,
     fontWeight: '600',
     fontSize: 15,
    },
    dateContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    }
  });
  


export default Notes;