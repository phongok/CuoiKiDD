import { StyleSheet, View, Image, Text, Button } from 'react-native';
export default function Screen_03 ({route}) {
    return (
        <View style={styles.container}>
            <View>
                <Image source={{uri: route.params.productsNew[0].url}} style={{ width: '40%', height: '40%', marginLeft: '30%', marginTop: '20%' }}></Image>
            </View>
           <View style={styles.conten1}>
              
              <Text style={{fontSize:20, marginTop:20, marginLeft:15, fontWeight:'bold'}}>{route.params.productsNew[0].name}</Text>
              <View style={{flexDirection:'row', marginTop:10}}>
              <Text style={{textAlign: 'center', fontSize:20, marginLeft:30, marginTop:10}}>15% OFF </Text>
              <Text style={{textAlign: 'center', fontSize:20,marginLeft:30, marginTop:10}}>{route.params.productsNew[0].donGia}</Text>
              </View>
              <View style={{width:'94%', marginLeft:'3%', marginTop:'20%'}}><Button title='Add to card' ></Button></View>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
       
        flex:1
    },
    conten1: {
        
       
        height:500
       
    },
   
  });