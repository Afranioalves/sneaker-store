import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import Tab from '../../../components/tab';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './style';
import CardCategory from '../../../components/category';
import Jordan from '../../../../assets/category/jordan.png'
import Basket from '../../../../assets/category/basket.png'
import Running from '../../../../assets/category/running.png'
import Casual from '../../../../assets/category/casual.png'
import { Link } from 'expo-router';


const Category = () => {
  
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Pressable>
            <Link href='/'>
              <AntDesign name="arrowleft" size={28} color="black" />
            </Link>
          
            </Pressable>
            <Text style={styles.title}>CATEGORY</Text>
            <Pressable />
        </View>

        <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
            <CardCategory image={Jordan} text1='Air' text2='Jordan'/>
            <CardCategory image={Basket} text1='Basketball' text2='Shoes'/>
            <CardCategory image={Running} text1='Running' text2='Shoes'/>
            <CardCategory image={Casual} text1='Casual' text2='Shoes'/>
        </ScrollView>

        <Tab router='CATEGORY' />
     
      <StatusBar style="auto" />
    </View>
  );
}

export default Category