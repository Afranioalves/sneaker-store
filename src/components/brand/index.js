import { Pressable, View, Text, ScrollView} from "react-native"
import { FontAwesome6, Feather } from "@expo/vector-icons"
import { styles } from "./style"
import { Image } from "expo-image"
import { brands } from "../../data/brand"
import Animated, { FadeInRight } from 'react-native-reanimated';


const Brand = ({logo}) =>{
    return(
        <Animated.View style={styles.brand} entering={FadeInRight.duration(2000)}>
            <Image 
                style={styles.logo}
                source={logo}
                contentFit="cover"
                transition={1000}

                />
        </Animated.View>
    )
}

const Brands = () =>{

    const renderBrand = () =>{
        return brands.map(brand=> <Brand key={brand.id} logo={brand.logo} /> )
    }
    return(
        <View style={styles.container}>
           <Text style={styles.title}>BRANDS</Text>
           <ScrollView horizontal
           showsHorizontalScrollIndicator={false} 
           contentContainerStyle={styles.scroll}>  
            {renderBrand()}
           </ScrollView>
           
        </View>
    )
}

export default Brands