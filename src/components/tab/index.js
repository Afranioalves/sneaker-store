import { Pressable, View, Text, Animated} from "react-native"
import { FontAwesome6, Feather } from "@expo/vector-icons"
import { styles } from "./style"
import home_black from '../../../assets/icon/home-black.png'
import home_white from '../../../assets/icon/home-white.png'
import category_black from '../../../assets/icon/category-black.png'
import category_white from '../../../assets/icon/category-white.png'
import heart_white from '../../../assets/icon/heart-white.png'
import user_white from '../../../assets/icon/user-white.png'
import { Image } from "expo-image"
import Reanimated, { useSharedValue, withSpring } from 'react-native-reanimated';
import { useEffect, useRef } from "react"
import { Link } from "expo-router"

const Tab = ({router}) =>{

    const translateY = useRef(new Animated.Value(100)).current;
  
    useEffect(()=>{
        Animated.timing(translateY, {
            toValue: 0,
            duration: 800,
            useNativeDriver: true,
            }).start()
  
    },[router])



    return(
        <Animated.View style={[styles.container, {transform:[{translateY}]}]}>
            <Link href='/'>
                <Animated.View style={router == "HOME" && styles.content}>
                        <Image 
                            style={styles.icon}
                            source={router !="HOME" ?home_white : home_black}
                            contentFit="none"
                            transition={1000}
                        />
                    {router == "HOME" && <Text style={styles.tabTitle}>HOME</Text>}
                </Animated.View>
            </Link>

            <Link href='/screen/category'>
                <Animated.View style={[ router == "CATEGORY" && styles.content]}>
                        <Image 
                            style={styles.icon}
                            source={router != "CATEGORY" ?category_white :category_black}
                            contentFit="contain"
                            transition={1000}

                            />
                    {router == "CATEGORY" && <Text style={styles.tabTitle}>CATEGORY</Text>}
                </Animated.View>
            </Link>


          <Pressable>
        
                <Image 
                    style={styles.icon}
                    source={heart_white}
                    contentFit="contain"
                    transition={1000}

                    />
             
          </Pressable>
          <Pressable>
                <Image 
                    style={styles.icon}
                    source={user_white}
                    contentFit="contain"
                    transition={1000}

                    />
          </Pressable>
          

        </Animated.View>
    )
}

export default Tab