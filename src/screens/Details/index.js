import React from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import styles from '../../components/cardFilmes/style';
import Stars from 'react-native-stars';
import { useRoute } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons'; 
export default function Details(){

const routes = useRoute();
    return(

        <View style={styles.container}>

          <View style={styles.containerJogos}>
          
            <Image style={styles.images} source ={require(`../../Img/${routes.params.imagem}`)} />
            <Text style ={styles.titulo}> {routes.params.titulo} </Text>

            <Text style ={styles.textNota}> {routes.params.nota} </Text>
            <Text style ={styles.textDescricao}> {routes.params.descricao} </Text>

            <Stars
                default={routes.params.nota}
                count={10}
                half={true}
                //starSize={[style.fullStar.size, style.fullStar.size]}
                disabled={true}
                fullStar={<FontAwesome name="star" size={25} color={'#FFD700'} />}
                emptyStar={<FontAwesome name="star-o" size={25} color={'#fff'} />}
                halfStar={<FontAwesome name="star-half-empty" size={25} color={'orange'} />}
            />

          </View>

        </View>
  
        

      
  
    
        );


}