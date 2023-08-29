import React from 'react'
import {View,Image,Text,TouchableOpacity} from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

export default function CardMovies({titulo,nota,imagem,descricao}){

    const navigation = useNavigation();

    return(
     
        <TouchableOpacity onPress = { () => navigation.navigate('Details',{imagem:imagem,titulo:titulo,nota:nota,descricao:descricao}) } style={styles.containerJogos} >

        <Image style={styles.images} source ={require(`../../Img/${imagem}`)} />
        <Text style ={styles.titulo}>{titulo} </Text> 
        <Text style ={styles.textNota}> {nota} </Text>
        <Text style ={styles.textDescricao}> {descricao} </Text>
       
       
    </TouchableOpacity>

  

    );


}