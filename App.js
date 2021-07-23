import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import Header from './src/componentes/Header';
import Content from './src/componentes/Content';
import Footer from './src/componentes/Footer';


export default function App() {
  return (

      <View style={app.container}> 
      <StatusBar style="auto"/>
        <Header/>
        <Content/>
        <Footer/>
      </View>
      
  );
}

const app = StyleSheet.create({
  container: {
    flex: 1,
  },
});