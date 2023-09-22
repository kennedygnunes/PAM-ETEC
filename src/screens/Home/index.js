
import { StyleSheet, Text, View ,FlatList} from 'react-native';
import BannerMovies from '../../components/bannerFilmes';
import CardMovies from '../../components/cardFilmes';
import Header from '../../components/header';
import SearchBar from '../../components/searchbar';
import Filmes from '../../data/movies'

export default function App() {

  const [movies,setMovies] = useState([]);


      useEffect(()=> {
         
            async function getMovies(){

                  try{
                  const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=c779df891263abb52e98bb7f97cf7466&language=pt-BR");
                  const data = await response.json();

                  console.log(data.results)
                  setMovies(data.results)
                  }
                  catch(error){
                    console.error("REQUISIÇÂO FALHOU",error)
                  }
            }

            getMovies();
      },[] )

      const [series,setSeries] = useState([]);


      useEffect(()=> {
         
            async function getSeries(){

                  try{
                  const response = await fetch("https://api.themoviedb.org/3/tv/popular?api_key=c779df891263abb52e98bb7f97cf7466&language=pt-BR");
                  const data = await response.json();

                  console.log(data.results)
                  setSeries(data.results)
                  }
                  catch(error){
                    console.error("REQUISIÇÂO FALHOU",error)
                  }
            }

            getSeries();
      },[] )
      
  return (
    <View style={styles.container}>
     <Header></Header>

     <SearchBar></SearchBar>

     <BannerMovies></BannerMovies>
     
    
     <View style = {{width :"90%"}}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={Filmes}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              
              <CardMovies
                titulo={item.nome}
                imagem={item.imagem}
                nota={item.nota}
                descricao={item.descricao}
              />
            )}
          />
        </View>
    
  

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#141a29',
    alignItems:'center'
    
    
  },
});
