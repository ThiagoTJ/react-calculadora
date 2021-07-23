import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    ViewHeader: {
        backgroundColor: "#000000",
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    TextHeader: {
        color: "white",
        fontWeight: "bold",
        fontSize: 30
    },
    image: {
        flex: 1,
        justifyContent: "center",
    },
    ViewContainer: {
        backgroundColor: "#1c1c1c",
        justifyContent: "center",
        alignItems: "center",
        flex: 6,
    },
    CalculadoraInteira:{
        backgroundColor: "#B22222",
        height: 300,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "#ff8c00",
        borderRadius:20
    },
    CalculadoraView: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    ButtonContent: {
        alignItems: "center",
        backgroundColor: "#800000",
        padding: 10,
        width:70,
        margin: 2,
        borderRadius:30,
        borderWidth: 1,
        borderColor: "#ff4500"
    },
    TextContent: {
        color: "white",
        fontSize: 30
    },
    ResultContent: {
        backgroundColor: "white",
        padding: 10,
        borderWidth: 2,
        fontSize: 16,
        width: 250,
        textAlign: "center",
    },
    ContentInput: {
        backgroundColor: "white",
        padding: 10,
        borderWidth: 2,
        fontSize: 20,
        width: 250,
        textAlign: "center",
        borderTopLeftRadius: 20,
        borderTopRightRadius:20
    },
    ContentInput2: {
        backgroundColor: "white",
        padding: 10,
        borderWidth: 2,
        fontSize: 16,
        width: 120,
        textAlign: "center"
    },
    ViewFooter: {
        backgroundColor: "#000000",
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    TextFooter: {
        color: "white",
        fontSize: 20
    }
})