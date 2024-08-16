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
        paddingBottom:100
    },
    imageItem:{
        width:120,
        height:100,
        //transform:[{rotate:'-10deg'}],
        marginLeft:-10
    },
    boxImage:{
        backgroundColor:"#F4F6F9",
        width:130,
        height:120,
        padding:12,
        borderRadius:16
    },
    containerItem:{
        flexDirection:'row',
        gap:12,
        marginBottom:16
    },
    boxName:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:"center",
    },
    contentInfo:{
        flex:1
    },
  
    boxQtd:{
        flexDirection:'row',
        alignItems:"center",
        gap:12,
        marginTop:8,
    },
    buttonMinus:{
        width:35,
        height:35,
        borderWidth:1,
        borderColor:"#D3D3D3",
        borderRadius:6,
        justifyContent:'center',
        alignItems: 'center',
    },
    buttonPlus:{
        width:35,
        height:35,
        backgroundColor:"#262626",
        borderRadius:6,
        justifyContent:'center',
        alignItems: 'center',
    },
    textPlus:{
        color:"#fff",
        fontSize:16,
        fontFamily:"Neue-Medium",
    },

    textMinus:{
        color:"#000",
        fontSize:16,
        fontFamily:"Neue-Medium",
    },

    qtd:{
        fontFamily:"Neue-Medium",
        fontSize:16,
    },
    name:{
        fontFamily:"Neue-Medium",
        color:"#000"
    },
    buttonDel:{
        backgroundColor:"#FFE8E8",
        width:30,
        height:30,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:100
    },
    size:{
        fontFamily:"Neue-Medium",
        color:"grey",
        fontSize:15,
        marginBottom:4
    },

    boxPrice:{
        flexDirection:'row',
        alignItems:"center",
        gap:8
    },
    currentPrice:{
        fontFamily:"Neue-Medium",
        fontSize:16
    },

    oldPrice:{
        fontFamily:"Neue-Regular",
        fontSize:15,
        color:"grey",
        textDecorationLine:"line-through"
    },
    discount:{
        fontFamily:"Neue-Bold",
        color:"#FF5656",
        fontSize:12
    },

    contentCode:{
        borderWidth:1,
        flexDirection:'row',
        paddingHorizontal:16,
        gap:16,
        height:55,
        alignItems:'center',
        marginTop:24,
        borderRadius:8,
        borderColor:"#f1f1f1"
    },
    inputCode:{
        flex:1,
        fontFamily:"Neue-Regular",
        fontSize:15
    },
    textApply:{
        color:"#FF5656",
        fontFamily:"Neue-Medium",
        fontSize:16
    },
    contentDetails:{
        marginTop:24,
        gap:16
    },
    detail:{
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    label:{
        fontFamily:"Neue-Regular",
        fontSize:15
    },
    value:{
        fontFamily:"Neue-Medium",
        fontSize:15
    },
    total:{
        fontFamily:"Neue-Medium",
        fontSize:16
    },
    boxTotal:{
        borderTopWidth:1,
        borderTopColor:"#f1f1f1",
        paddingTop:12,
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    contentButton:{
        flexDirection:'row',
        justifyContent: 'space-between',
        height:70,
        gap:24
    },
    buttonContinue:{
        backgroundColor:"#262626",
        height:55,
        flex:1,
        borderRadius:6,
        alignItems:'center',
        justifyContent:'center'
    },
    textContinue:{
        color:"#fff",
        fontFamily:"Formula-Medium"
    },
    priceTotal:{
        fontFamily:"Neue-Bold",
        fontSize:24
    },
    info:{
        color:"#848484",
        fontFamily:"Neue-Medium",
    },
  
    


  
})

