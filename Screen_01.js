import { StyleSheet, View, Button , Text, Image} from 'react-native';
export default function  StartApp({ navigation }) {
    return (
      <View style={styles.container}>
        <Text style={{color:'black', fontWeight:'bold', fontSize:15, textAlign:'center', marginTop:30}}>A premium online store for sport and their stylish choice</Text>
        <Image style={{ marginTop: 10, height: 300, width: 300, marginLeft: 25, marginBottom: 20 , borderRadius:10}} source={require('./images/Screen011.jpg')} />
          <Text style={{color:'black', fontWeight:'bold', fontSize:30, textAlign:'center'}}>POWER BIKE</Text>
          <Text style={{color:'black', fontWeight:'bold', fontSize:30, textAlign:'center'}}> SHOP</Text>
          <View style={{marginTop:20}}>
          <Button title='Get Stated'  color={"red"} style={{}}  onPress={()=>{navigation.navigate('Screen_02')}}></Button>
          </View>
        
      </View>
    );
    }

const styles = StyleSheet.create({
  container: {
    marginTop: '5%',
    padding: '1%', 
   
    flex:1
  },
});
