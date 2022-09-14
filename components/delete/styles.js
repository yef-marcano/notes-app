import { StyleSheet } from "react-native";

import * as Style from "../../assets/styles";

export const style = StyleSheet.create({
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
