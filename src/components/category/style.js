import { StyleSheet, Dimensions } from "react-native";
const {width} = Dimensions.get('screen')

export const styles = StyleSheet.create({
    container:{
        paddingLeft:24,
        backgroundColor:"#F6f6f6",
        height:140,
        borderRadius:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:width-70,
        marginBottom:24
    },

    categoryImage:{
        width: 190,
        height:120,
        marginRight:-30,
        alignSelf:'center',
        marginTop:8,
        transform:[{rotate:'-8deg'}]
      
    },
    categoryTitle:{
        fontFamily:"Neue-Bold",
        fontSize:20,
        letterSpacing:1
    },
   

    

  
})

