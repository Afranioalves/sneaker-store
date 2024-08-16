import { Image } from "expo-image"
import { Text, View } from "react-native"
import { styles } from "./style"
import { Link } from "expo-router"
import { Animated } from "react-native"
import React, { useRef, useEffect } from 'react';
//import Animated, { FlipInXDown, FadeInDown, FadeInLeft, FadeInRight, SlideInDown, SlideInUp, LightSpeedInRight, SlideInRight } from 'react-native-reanimated';

const CardCategory = ({image, text1, text2}) =>{

    const translateXAnim = useRef(new Animated.Value(100)).current;

  useEffect(() => {
    Animated.timing(translateXAnim, {
      toValue: 0,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, []);

    return(
        <Link href="/screen/product" style={{marginBottom:24}}>
            <Animated.View style={[styles.container,{transform:[{translateX:translateXAnim}]}]}>
                <Text style={styles.categoryTitle}>{text1}{`\n`}{text2}</Text>
                <Image 
                    style={styles.categoryImage}
                    source={image}
                    contentFit="contain"
                    transition={2000}
                    />
        
            </Animated.View>
        </Link>
    )
}

export default CardCategory