import { StyleSheet, Dimensions } from "react-native";
const {width} = Dimensions.get('screen')

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff"
    },

    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingBottom:16,
        paddingHorizontal:16,
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
    },
    content:{
        backgroundColor:'#F4F6F9',
        paddingTop:48,
        height:430,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        overflow:'hidden'
    },
    imgPreview:{
        width:270,
        height:180,
        transform:[{rotate:'-20deg'}]
    },
    imgPrev:{
        width:140,
        height:110,
        //marginRight:-80,
        transform:[{rotate:'-30deg'}]
    },
    imgNext:{
        width:140,
        height:110,
        marginLeft:40,
        transform:[{rotate:'-30deg'}]
    },
    boxPreview:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        gap:24
    },

    boxShoesOption:{
        paddingHorizontal:16,
        marginTop:56,
        flexDirection:'row',
        gap:12
    },

    imgOption:{
        width:60,
        height:30,
        transform:[{rotate:'-20deg'}]
    },

    buttonOption:{
        width:65,
        height:65,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent: 'center',
        borderRadius:14,
        borderWidth:1,
        borderColor:"#E8E8E8"
       
    },
   

    contentInfo:{
        paddingHorizontal:16,

    },
    contentName:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    productName:{
        fontFamily:"Formula-Bold",
        fontSize:26,
        //letterSpacing:1
    },
    buttonShare:{
        width:45,
        height:45,
        backgroundColor:"#F9F9F9",
        borderRadius:100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxPrice:{
        flexDirection:'row',
        alignItems: 'center',
        marginTop:16,
        gap:16
    },
    currentPrice:{
        backgroundColor:"#B6F236",
        paddingVertical:4,
        paddingHorizontal:12,
        fontFamily:"Neue-Bold",
        fontSize:24,
        transform:[{rotate:'-2deg'}]
    },
    ondPrice:{
        fontFamily:"Neue-Regular",
        color:"#262626",
        fontSize:20,
        textDecorationLine:'line-through'
    },
    contentSize:{
        marginTop:24,
        gap:12
    },
    boxSize:{
        flexDirection:'row',
        justifyContent:'space-between'
    },

    titleSize:{
        fontFamily:"Neue-Medium",
    },
    buttonSize:{
        borderWidth:1,
        borderColor:'#E8E8E8',
        width:65,
        height:50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:24
    },
    size:{
        fontFamily:"Neue-Medium",
    },
    description:{
        fontFamily:"Neue-Regular",
        color:"#262626"
    },
    boxDescription:{
        marginTop:16
    },
    contentButton:{
        flexDirection:"row",
        paddingHorizontal:16,
        marginTop:16,
        justifyContent:'space-between',
        backgroundColor:"#fff",
        position:'absolute',
        paddingTop:12,
        bottom:10,
        right:0,
        left:0
    },
    buttonFavorite:{
        borderWidth:1,
        borderColor:"#262626",
        width:'40%',
        height:52,
        borderRadius:6,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:12
    },
    buttonAdd:{
        width:'56%',
        backgroundColor:'#262626',
        height:52,
        borderRadius:6,
        alignItems:'center',
        justifyContent:'center',
    },
    buttonText:{
        fontFamily:"Formula-Medium",
        fontSize:15
    },
    buttonLine:{
        height:40,
        paddingTop:24,
        alignItems:'center'
    },
   
    line:{
        width:60,
        backgroundColor:"#E8E8E8",
        height:6,
        borderRadius:8
    },
    boxBag:{
        width:50,
        height:50,
        backgroundColor:"#fff",
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
    textQtd:{
        color:"#fff",
        fontSize:12,
        fontFamily:"Neue-Bold"
    }
   
})

