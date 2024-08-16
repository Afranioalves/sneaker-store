import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import Tab from '../../../components/tab';
import { AntDesign, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './style';
import { products } from '../../../data/product';
import { Article } from '../../../components/content';

const Product = () => {

    const renderProduct = () =>{
        return products.map((product)=>{
            return <Article 
                    key={product.id}
                    name={product.name}
                    oldPrice={product.oldPrice}
                    currentPrice={product.currentPrice}
                    text={product.text}
                    image={product.image}
                    mark={product.mark}
            />
        }  )
    }
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Pressable><AntDesign name="arrowleft" size={28} color="black" /></Pressable>
            <Text style={styles.title}>AIR JORDAN</Text>
            <View style={{flexDirection:'row', gap:16}}>
                <Pressable><Feather name="search" size={24} color="black" /></Pressable>
                <Pressable><MaterialCommunityIcons name="image-filter-center-focus" size={24} color="black" /></Pressable>
            </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
            {renderProduct()}
        </ScrollView>

    
      <StatusBar style="auto" />
    </View>
  );
}

export default Product