import React from "react";
import {View, ImageBackground} from "react-native";
import {styles} from "../../styles/style"
import Calculadora from "./Calculadora";

const image = {uri:"https://acegif.com/wp-content/gifs/fire-102.gif"}

export default function Content(){
    return(
        <View style={styles.ViewContainer}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Calculadora/>
            </ImageBackground>
        </View>
    )
}