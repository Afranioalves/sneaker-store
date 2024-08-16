import { Pressable, View, Text, Animated} from "react-native"
import { FontAwesome6, Feather, AntDesign } from "@expo/vector-icons"
import { styles } from "./style"
import { Image } from "expo-image"
import { products } from "../../data/product"
//import Animated, { FadeIn, FadeInDown, SlideInDown, SlideInUp } from 'react-native-reanimated';
import { Link } from "expo-router"
import React, { useRef, useEffect } from 'react';



export const Article = ({name, currentPrice, oldPrice, text, mark, image}) =>{


    const translateYAnim = useRef(new Animated.Value(100)).current;

  useEffect(() => {
    Animated.timing(translateYAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);
    return(
        <Link href='/screen/detail' style={{marginBottom:16}}>
        <Animated.View style={[styles.product,{transform:[{translateY:translateYAnim}]}]}>
            
            <View style={styles.boxImage}>
                <View style={[styles.contentInfo, !mark && {justifyContent:'flex-end'}]}>
                    {mark && <Text style={styles.mark}>{text}</Text> }
                    <Pressable style={styles.buttonLike}>
                        <AntDesign name="hearto" size={20} color="#A2A2A2" />
                    </Pressable>
                </View>
                <Image 
                    style={styles.productImage}
                    source={image}
                    contentFit="contain"
                    transition={1000}

                    />
            </View>
            <Text style={styles.productName}>{name}</Text>
            <View style={styles.boxPrice}>
                <Text style={styles.currentPrice}>${currentPrice}</Text>
                <Text style={styles.oldPrice}>${oldPrice}</Text>
            </View>
            
           
        </Animated.View>
        </Link>
    )
}

const Content = () =>{

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
    return(
        <View style={styles.container}>
            <View style={styles.boxTitle}>
                <Text style={styles.title}>NEW ARRIVAL</Text>
                <Pressable>
                    <Text style={styles.textView}>View all</Text>
                </Pressable>
            </View>
            <View style={styles.content}>
               {renderProduct()}
            </View> 
           
        </View>
    )
}

   

export default Content