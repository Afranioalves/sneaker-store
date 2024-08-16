import { View, Text, Animated } from "react-native"
import { styles } from "./style"
import LottieView from 'lottie-react-native';
import React, { useRef, useEffect } from 'react';
import { Image } from "expo-image";
import { router } from "expo-router";
import box from "./box.gif"
import Jordan from '../../../../assets/products/jordan-red.png'



const Ordering = () =>{

    const marginTop = useRef(new Animated.Value(-200)).current;
    const width = useRef(new Animated.Value(200)).current;
    const height = useRef(new Animated.Value(130)).current;

    useEffect(() => {

        Animated.parallel([
       
        Animated.timing(marginTop, {
            toValue: 20,
            duration: 1000,
            useNativeDriver: false,
          }),
          Animated.timing(width, {
            toValue: 40, 
            duration: 1500,
            useNativeDriver: false,
          }),
          Animated.timing(height, {
            toValue: 40, 
            duration: 1500,
            useNativeDriver: false,
          }),
          
        ]).start();

        setTimeout(()=>{
           router.push('/screen/status')
        },3000)

      }, [])

    return(
        <View style={styles.container}>
            <Animated.Image 
                    style={[styles.product, {marginTop, width, height}]}
                    source={Jordan}
                    contentFit="cover"
                    transition={2000}
                    />
             <Image 
                    style={styles.image}
                    source={box}
                    contentFit="contain"
                    transition={2000}
                    />
                    
        </View>
    )
}

export default Ordering