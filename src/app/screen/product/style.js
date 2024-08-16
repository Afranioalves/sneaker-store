import { StyleSheet, Dimensions } from "react-native";
const {width} = Dimensions.get('screen')

export const styles = StyleSheet.create({
    container:{
        paddingHorizontal:16,
        paddingTop:48,
        flex:1,
        backgroundColor:"#fff"
    },

    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingBottom:16
    },
    title:{
        fontFamily:"Formula-Bold",
        fontSize:28,
    },

    scroll:{
        paddingBottom:16,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
        marginTop:16
    }

  
})

