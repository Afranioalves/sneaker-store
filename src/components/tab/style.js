import { StyleSheet, Dimensions } from "react-native";
const {width} = Dimensions.get('screen')

export const styles = StyleSheet.create({
    container:{
        paddingHorizontal:24,
        marginTop:32,
        backgroundColor:"#262626",
        height:70,
        width:width-70,
        alignSelf:'center',
        borderRadius:70,
        position:'absolute',
        bottom:12,
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:'center',
    },
    icon:{
        width:32,
        height:32
    },
    content:{
        backgroundColor:"#fff",
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:6,
        paddingHorizontal:16,
        gap:8,
        borderRadius:20
    },
    tabTitle:{
        fontFamily:"Formula-Light",
        fontSize:16
    }
   
})

