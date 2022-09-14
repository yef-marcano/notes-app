import { StyleSheet } from "react-native";

import * as Style from "../../assets/styles";

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
  

