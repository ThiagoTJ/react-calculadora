import React from "react";
import {View, Text} from "react-native";
import {styles} from "../../styles/style"

export default function Header(){
    return(
        <View style={styles.ViewHeader}>
            <Text style={styles.TextHeader}>Calculadora Mortifera</Text>
        </View>
    )
}
