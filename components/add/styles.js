
export const styles = StyleSheet.create({
    addNoteContainer: {
        paddingHorizontal: 20,
        marginTop: 20,
        alignItems: "center",
        justifyContent: "center"    
    },
    input:{
        height: 300,
        paddingHorizontal: 20,
        width: '100%',
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
    button:{
        backgroundColor: Style.color,
        width: "40%",
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        alignSelf: 'flex-end',
        marginTop: 20
    },
    buttonText:{
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
    }
});
