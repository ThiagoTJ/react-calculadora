import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import {styles} from "../../styles/style";

// Baseado no que foi visto até o momento, construa um app de calculadora que 
//realize as seguinte operações: soma, subtração, multiplicação, divisão, 
//resto da divisão, exponencial de dois valores lidos nos campos ( a e b ). 
//Mostrando o resultado na tela. Os valores a, b e resultado deverão ser estados 
//e os valores serão atualizados à medida que as coisas ocorrem.

// Os requisitos são:

// Componente Header com o Nome do App.
// Componente Content com a aplicação em si.
// Utilizar estilo para deixar o app com um design bonito, use sua criatividade.
// Utilizar states para controlar os campos de TextInput.a
// Cada operação deverá ser um botão que ao ser pressionado, mostrará o resultado 
//da operação escolhida.
// Mostrar o teclado numérico quando o usuário tentar inserir uma informação no 
//input.

export default function Calculadora(){
    
    const[numero, setNumero] = useState({
        valorA:0,
        valorB:0,
        resultado:0
    })

    const handleInputChange = (prop, value) => {
        setNumero({
            ...numero, [prop]: value
        })
    }

    const calcularSoma = () => {
        setNumero({
            ...numero, resultado: (numero.valorA + numero.valorB)
        })
    }

    const calcularSubtracao = () => {
        setNumero({
            ...numero, resultado: (numero.valorA - numero.valorB)
        })
    }

    const calcularMultiplicacao = () => {
        setNumero({
            ...numero, resultado: (numero.valorA * numero.valorB)
        })
    }

    const calcularDivisao = () => {
        setNumero({
            ...numero, resultado: (numero.valorA / numero.valorB)
        })
    }

    const calcularResto = () => {
        setNumero({
            ...numero, resultado: (numero.valorA % numero.valorB)
        })
    }

    const calcularPotencia = () => {
        setNumero({
            ...numero, resultado: (numero.valorA ** numero.valorB)
        })
    }

    return(

        <View style={styles.CalculadoraInteira}>

            <View>       
                <Text style={styles.ContentInput}
                > {numero.resultado} </Text>

                <View style={styles.CalculadoraView}>
                    <TextInput style={styles.ContentInput2}
                    placeholder="Valor A"
                    onChangeText={
                        (valor)=>handleInputChange("valorA", Number(valor))
                    }keyboardType="numeric"/>

                    <TextInput style={styles.ContentInput2}
                    placeholder="Valor B"
                    onChangeText={
                        (valor)=>handleInputChange("valorB", Number(valor))
                    }keyboardType="numeric"/>
                </View>

            </View>
                
            <View>

                <View style={styles.CalculadoraView}>
                    <TouchableOpacity
                    style={styles.ButtonContent}
                    onPress={calcularSoma}>
                    <Text style={styles.TextContent}>+</Text></TouchableOpacity>

                    <TouchableOpacity
                    style={styles.ButtonContent}
                    onPress={calcularSubtracao}>
                    <Text style={styles.TextContent}>-</Text></TouchableOpacity>

                    <TouchableOpacity
                    style={styles.ButtonContent}
                    onPress={calcularMultiplicacao}>
                    <Text style={styles.TextContent}>*</Text></TouchableOpacity>
                </View>

                <View style={styles.CalculadoraView}>
                    <TouchableOpacity
                    style={styles.ButtonContent}
                    onPress={calcularDivisao}>
                    <Text style={styles.TextContent}>/</Text></TouchableOpacity>

                    <TouchableOpacity
                    style={styles.ButtonContent}
                    onPress={calcularResto}>
                    <Text style={styles.TextContent}>%</Text></TouchableOpacity>
                
                    <TouchableOpacity
                    style={styles.ButtonContent}
                    onPress={calcularPotencia}>
                    <Text style={styles.TextContent}>**</Text></TouchableOpacity>
                </View>
            
            </View>

        </View>
    )
}