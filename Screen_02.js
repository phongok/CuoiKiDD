import React, { useContext, createContext, useEffect } from 'react'
import { StyleSheet, View, FlatList, Text, TextInput, Image, Button } from 'react-native';
import Item from './component/Item';
import Context from './Context';
import { MyData } from './Context';
import axios from 'axios'

export const NavigationContext = createContext()

function Screen_02_1() {

  const { products, dispatch } = useContext(MyData)

  const renderItem = ({ item }) => {
    return (
      <Item id={item.id} name={item.name} url={item.url} donGia={item.donGia}></Item>
    )
  }

  useEffect(() => {

    axios.get('https://634fff2478563c1d82b5fa10.mockapi.io/api/product')
      .then(function (data) {
        console.log(data.data);
        dispatch({ type: 'GET', products: data.data })
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.content1}>
       
        <Text style={{ paddingLeft: 20, fontWeight:'bold', color:'red', fontSize:25 }}>The world's Best Bike</Text>
      </View>
      <View style={{ marginTop: '10%', marginLeft: '7%' }}>
        <FlatList data={products} renderItem={renderItem} numColumns={2}></FlatList>
      </View>
    </View>
  );
}

export default function Screen_02({ navigation }) {
  return (
    <Context>
      <NavigationContext.Provider value={{ navigation }}>
        <Screen_02_1 />
      </NavigationContext.Provider>
    </Context>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: '5%',
    padding: '1%'
  },
  content1: {
    flexDirection: 'row',
  }
});
