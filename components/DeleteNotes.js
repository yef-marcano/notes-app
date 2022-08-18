import react from  'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import * as Style from "../assets/styles";
import { styles } from "./Notes";

const DeleteNotes = () => {
     return (
        <ScrollView>
            <View style={styles.notesContainer}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <TouchableOpacity style={style.empyButton}>
                        <Text style={style.empyButtonText}>Eliminar</Text>
                    </TouchableOpacity>
                    <Text style={{fontWeight: '700', fontSize: 18, color: Style.color}}>
                        Total
                    </Text>
                    <TouchableOpacity style={style.empyButton}>
                        <Text style={style.empyButtonText}>Vacio</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.divider}></View>

                
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