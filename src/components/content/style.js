import { StyleSheet, Dimensions } from "react-native";
const {width} = Dimensions.get('screen')

export const styles = StyleSheet.create({
    container:{
        paddingHorizontal:16,
        marginTop:32
    },
    product:{
        width: (width/2)-22,
        marginBottom:16,
        height:220,
        overflow:'hidden'
       
    },
    boxImage:{
        backgroundColor:"#F4F6F9",
        height:170,
        borderRadius:16,
    },
    productImage:{
        width: (width/2)-30,
        height:120,
        alignSelf:'center',
        marginTop:8,
      
    },
    productName:{
        fontFamily: "Formula-Medium",
        fontSize:13,
        letterSpacing:-0.5,
        marginTop:8
    },
    boxPrice:{
        marginTop:4,
        flexDirection:'row',
        gap:8
    },
    currentPrice:{
        fontFamily:'Neue-Bold',
    },
    oldPrice:{
        fontFamily:'Neue-Regular',
        color:"#A2A2A2",
        textDecorationLine:'line-through'
    },
    contentInfo:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingRight:8,
        alignItems: 'center',
    },
    mark:{
        backgroundColor:"#393939",
        padding:12,
        color:"#FFED6B",
        fontSize:10,
        fontFamily:'Neue-Bold',
        borderTopLeftRadius:16,
        borderBottomRightRadius:16,
    },
    buttonLike:{
        backgroundColor:"#ECEEF1",
        height:35,
        width:35,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        marginTop:4
    },
    content:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
        marginTop:16
    },
    title:{
        fontFamily:"Formula-Bold",
        fontSize:22,
        letterSpacing:1
    },
    
    boxTitle:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    textView:{
        fontFamily:'Neue-Medium',
        fontSize:14,
        color:'#FF5656',
    }
  
})

