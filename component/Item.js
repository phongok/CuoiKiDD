import { useContext } from 'react'
import { StyleSheet, Text, View, Image, Alert, TouchableOpacity } from 'react-native';
import { MyData } from '../Context'
import { NavigationContext } from '../Screen_02';


export default function Item({ id, name, url, donGia }) {

    const { products, dispatch } = useContext(MyData)
    const {navigation} = useContext(NavigationContext)

   
    const itemOnPress = () => {
        const productsNew = products.filter((product) => id === product.id)
        navigation.navigate('Screen_03', {productsNew})
    }

    return (
        <View style={{paddingHorizontal:10}}>
           
            <TouchableOpacity  onPress={itemOnPress}>
                <Image source={{ uri: url }} style={{ width: 130, height: 130 }} />
                <Text >{name}</Text>
                <Text >{donGia}</Text>
            </TouchableOpacity>
            <View >
              
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: '1%'
    },
});
