import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        paddingHorizontal:16,
        gap:16,
        paddingBottom:12
    },
    content:{
        flexDirection:'row',
        justifyContent:'space-between',
        gap:16
    },
    boxSearch:{
        borderColor:"#B9B9B9",
        borderWidth:1,
        flex:1,
        borderRadius:8,
        height:50,
        flexDirection:'row',
        gap:12,
        alignItems: 'center',
        paddingHorizontal:16
    },
    boxBag:{
        width:50,
        height:50,
        borderColor:"#B9B9B9",
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8,
        position:'relative'
    },
    qtd:{
        backgroundColor:'#FF5656',
        display:'flex',
        width:18,
        height:18,
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        top:4, right:6,
        zIndex:1
    },
    greeting:{
        fontFamily:"Neue-Medium"
    },
    username:{
        fontFamily:"Neue-Bold",
        fontSize:16
    },
    textSearch:{
        color:"#B9B9B9",
        fontFamily:"Neue-Medium"
    },
    textQtd:{
        color:"#fff",
        fontSize:12,
        fontFamily:"Neue-Bold"
    }
})

