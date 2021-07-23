import React from "react";
import {View, Text} from "react-native";
import {styles} from "../../styles/style";

export default function Footer(){
    return(
        <View style={styles.ViewFooter}>
            <Text style={styles.TextFooter}>Dev: Thiago TJ</Text>
        </View>
    )
}