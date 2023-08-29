import { StyleSheet } from "react-native";


const styles= StyleSheet.create({

    container: {
        flex:1,
        backgroundColor: '#141a29',
        alignItems:'center',
        width:'100%',
        height:'100%'
        
      },

    containerJogos:{
        paddingTop:20,
        paddingBottom:16,
        paddingRight:16,
        width:140,
        heigh:28
    },

    titulo:{
        color: 'white',
        fontSize:18,
        paddingTop:8  
    },

    textNota:{
        fontSize:15,
        color:'white',
        paddingLeft:4
    },

    

    images:{
        width:'100%',
        height:170,
        borderRadius: 8     
    },

    textDescricao:{
        fontSize:10,
        color:'white',
        paddingLeft:4

    },

})

export default styles