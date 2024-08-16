import { Pressable, View, Text } from "react-native"
import { FontAwesome6, Feather } from "@expo/vector-icons"
import { styles } from "./style"

const Header = () =>{
    return(
        <View style={styles.container}>
            <View style={{flexDirection:'row', gap:8}}>
                <Text style={styles.greeting}>Hi !</Text>
                <Text style={styles.username}>Afrânio</Text>
            </View>
            <View style={styles.content}>
                <Pressable style={styles.boxSearch}>
                    <Feather name="search" size={24} color="#B9B9B9" />
                    <Text style={styles.textSearch}>Search by brand, type, style...</Text>
                </Pressable>
                <Pressable style={styles.boxBag}>
                <View style={styles.qtd}><Text style={styles.textQtd}>1</Text></View>
                <FontAwesome6 name="basket-shopping" size={19} color="black" />
                </Pressable>
            </View>

        </View>
    )
}

export default Header