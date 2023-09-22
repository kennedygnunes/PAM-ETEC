import React from 'react';
import {Image,Text,TouchableOpacity} from 'react-native';
import styles from './style';
import { useNavigation } from "react-navigation/core";

export default function CardSeries({Nome, Imagem, Nota, Temporada}) {

    const navigation = useNavigation ();

    return(

        <TouchableOpacity onPress = { () => navigation.navigate('Details', {imagem:imagem,titulo:titulo,nota:nota,descricao:descricao})} style = {styles.ContainerSeries}>

            <Image style = {styles.ImagemSeries} source = {require (`../../Img/${Imagem}`)}/>
            <Text style = {styles.TituloSeries}>{Nome}</Text>
            <Text style = {styles.NotaSeries}>{Nota}</Text>
            <Text style = {styles.TemporadasSeries}>{Temporada}</Text>

        </TouchableOpacity>


    );

}