import { StatusBar } from 'expo-status-bar';
import { useRef, useEffect, useState } from 'react';
import { ScrollView, Animated, Text, View, Pressable, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './style';
import Jordan from '../../../../assets/products/jordan-red.png'
import JordanBlue from '../../../../assets/products/jordan-blue.png'
import { Image } from 'expo-image';
import { Link } from 'expo-router';



const Item = ({name, currentPrice, oldPrice, discount, size, image}) =>{
    const [qtd, setQtd]=useState(1)
    const translateYAnim = useRef(new Animated.Value(200)).current;
    useEffect(()=>{
        Animated.timing(translateYAnim, {
            toValue: 0,
            duration: 1500,
            useNativeDriver: true,
          }).start()
    },[])
    return(
        <Animated.View style={[styles.containerItem,{transform:[{translateY:translateYAnim}]}]}>
            <View style={styles.boxImage}>
                <Image 
                    style={styles.imageItem}
                    source={image}
                    contentFit="contain"
                    transition={2000}
                    />
            </View>
            <View style={styles.contentInfo}>
                <View style={styles.boxName}>
                    <Text style={styles.name}>{name}</Text>
                    <Pressable style={styles.buttonDel}><Feather name="trash-2" size={16} color="#FF5656" /></Pressable>
                </View>
                <Text style={styles.size}>Size: {size}</Text>
                <View style={styles.boxPrice}>
                    <Text style={styles.currentPrice}>${currentPrice}</Text>
                    <Text style={styles.oldPrice}>${oldPrice}</Text>
                    <Text style={styles.discount}>{discount}% OFF</Text>
                </View>
                <View style={styles.boxQtd}>
                    <Pressable style={[styles.buttonMinus,qtd>1&&{backgroundColor:"#262626", borderWidth:1}]} onPress={()=>setQtd(qtd-1)}><Text style={[styles.textMinus,qtd>1 && {color:"#fff"}]}>-</Text></Pressable>
                    <Text style={[styles.qtd]}>{qtd}</Text>
                    <Pressable style={styles.buttonPlus} onPress={()=>setQtd(qtd+1)}><Text style={styles.textPlus}>+</Text></Pressable>
                </View>
            </View>
        </Animated.View>
    )
}


const Cart = () => {

    const translateYAnim = useRef(new Animated.Value(200)).current;
    const opacity = useRef(new Animated.Value(0)).current;
    useEffect(()=>{
        Animated.timing(translateYAnim, {
            toValue: 0,
            duration: 1500,
            useNativeDriver: true,
          }).start()

          Animated.timing(opacity, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
          }).start()
    },[])
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Pressable>
            <Link href='/screen/detail'>
            <AntDesign name="arrowleft" size={28} color="black" />
            </Link>
            </Pressable>
            <Text style={styles.title}>SHOPPING BAG</Text>
            <Pressable>
            <Feather name="more-vertical" size={24} color="black" />
            </Pressable>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
            <Item name="NIKE JORDAN 1 RED" currentPrice={248} oldPrice={399} discount={40} size="UK9" image={Jordan}/>
            <Item name="NIKE JORDAN 1 RED" currentPrice={348} oldPrice={489} discount={35} size="UK7" image={JordanBlue}/>
            <Animated.View style={[styles.contentCode,{transform:[{translateY:translateYAnim}]}]}>
                <MaterialCommunityIcons name="ticket-percent-outline" size={24} color="#848484" />
                <TextInput style={styles.inputCode} placeholder='Enter Discount Code' placeholderTextColor="#848484"/>
                <Pressable><Text style={styles.textApply}>Apply</Text></Pressable>
            </Animated.View>

            <Animated.View style={[styles.contentDetails, {opacity, transform:[{translateY:translateYAnim}]}]}>
                <View style={styles.detail}>
                    <Text style={styles.label}>Total MRP</Text>
                    <Text style={styles.value}>$765</Text>
                </View>
                <View style={styles.detail}>
                    <Text style={styles.label}>Discount on MRP</Text>
                    <Text style={[styles.value,{color:"#48BB04"}]}>- $151</Text>
                </View>
                <View style={styles.detail}>
                    <Text style={styles.label}>Platform fee</Text>
                    <Text style={styles.value}>$2</Text>
                </View>
                <View style={styles.detail}>
                    <Text style={styles.label}>Shipping fee</Text>
                    <Text style={[styles.value,{color:"#48BB04"}]}>FREE</Text>
                </View>

                <View style={styles.boxTotal}>
                    <Text style={styles.total}>Total Amount</Text>
                    <Text style={styles.total}>$650</Text>
                </View>
            </Animated.View>
        </ScrollView>

        <View style={styles.contentButton}>
            <View>
                <Text style={styles.priceTotal}>$650</Text>
                <Text style={styles.info}>View Details</Text>
            </View>
            <TouchableOpacity style={styles.buttonContinue}>
                <Link href='/screen/ordering'>
                <Text style={styles.textContinue}>CONTINUE</Text>
                </Link>
            </TouchableOpacity>
        </View>

     
      <StatusBar style="auto" />
    </View>
  );
}

export default Cart