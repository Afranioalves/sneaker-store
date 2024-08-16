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
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:16
    },
    title:{
        fontFamily:"Formula-Bold",
        fontSize:28,
    },

    scroll:{
        paddingBottom:100
    },
    boxAnimation:{
        alignItems:'center',
        marginTop:64,
        marginBottom:40
    },
    textInfo:{
        marginTop:40,
        fontFamily:"Neue-Bold",
        fontSize:20
    },
    textDescription:{
        fontFamily:"Neue-Regular",
        color:"grey",
        marginBottom:4
    },
    email:{
        fontFamily:"Neue-Medium",
        color:"#202020",
    },
    contentOrder:{
        alignItems:'center',
        marginTop:188
    },
    textOrder:{
        fontFamily:"Neue-Regular",
        color:"grey",
    },
    textDate:{
        fontFamily:"Neue-Regular",
        color:"grey",
    },
    date:{
        fontFamily:"Neue-Medium",
        color:"#202020",
    },
    buttonContinue:{
        height:60,
        width:'85%',
        backgroundColor:"#262626",
        marginTop:24,
        borderRadius:8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContinue:{
        color:"#fff",
        fontFamily:"Formula-Medium"
    }

  
})

