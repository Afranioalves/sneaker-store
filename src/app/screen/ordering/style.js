import { StyleSheet, Dimensions } from "react-native";
const {width} = Dimensions.get('screen')

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"center",
    },
    image:{
        width:250,
        height:130,
        position:"absolute",
    },

    product:{
        width:200,
        height:142,
        transform:[{rotate:'-15deg'}]
    }
})

