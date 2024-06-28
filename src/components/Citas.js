import React from 'react';
import { StyleSheet, Text, View } from "react-native";
const Citas=({item})=>{
  const {paciente,fecha}=item;

  const formatearFecha=fecha=>{
    const nuevaFecha= new Date(fecha);
    const opciones={
      weekday:'long',
      year:'numeric',
      month:'long',
      day:'numeric'
    }
    return nuevaFecha.toLocaleDateString('es-ES',opciones)
  }

  return(
    <View style={styles.container}>
      <Text style={styles.nombres}>{paciente}</Text>
      <Text>{formatearFecha(fecha)}</Text>
    </View>

  )
}

export default Citas;
const styles=StyleSheet.create({
  container:{
    marginHorizontal:20,
    marginTop:20,
  },
  nombres:{
    fontSize:21,
    color:'#000',
    fontWeight:'400',
    textTransform:'uppercase',
  }
})
