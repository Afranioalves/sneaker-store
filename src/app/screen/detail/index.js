import { StatusBar } from 'expo-status-bar';
import React, { useRef, useEffect, useState } from 'react';
import { ScrollView, Animated, StyleSheet, Text, View, Pressable, TouchableOpacity} from 'react-native';
import Tab from '../../../components/tab';
import { AntDesign, Feather, MaterialCommunityIcons, FontAwesome6 } from '@expo/vector-icons';
import { styles } from './style';
import { products } from '../../../data/product';
import { Article } from '../../../components/content';
import { Image } from 'expo-image';
import image from '../../../../assets/products/jordan-red.png'
import image2 from '../../../../assets/products/jordan-orange.png'
import image3 from '../../../../assets/products/jordan-pink.png'
import { Link } from 'expo-router';
import Reanimated, {FadeInDown, FadeOut, SlideInDown, SlideInLeft, SlideInRight, SlideInUp, SlideOutRight} from 'react-native-reanimated';


const ShoesOption = ({image, action, select}) =>{

   return(
    <Pressable style={[styles.buttonOption,  select && {borderColor: "#000", borderWidth: 2}]} onPress={()=>action()}>
    <Image 
        style={styles.imgOption}
        source={image}
        contentFit="cover"
        />
  </Pressable>
   )
}

const Preview = (index, animation) =>{
    return(
        <Reanimated.Image 
            style={[styles.imgPreview]}
            source={products[index].image}
            entering={animation}
            exiting={FadeOut.duration(1800)}
            contentFit="contain"
            key={index}
        />
    )
}

const Info = (index)=>{
    return(
        <View key={index}>
            <View style={styles.contentName}>
              <Reanimated.Text style={styles.productName} entering={FadeInDown.duration(800)}>
                {products[index].name}
              </Reanimated.Text>
              <Pressable style={styles.buttonShare}>
                  <Feather name="share" size={22} color="black" />
              </Pressable>
            </View>

            <View style={styles.boxPrice}>
                <Text style={styles.currentPrice}>${products[index].currentPrice}</Text>
                <Text style={styles.ondPrice}>${products[index].oldPrice}</Text>
            </View>
        </View>
    )
}

const Detail = () => {
    const [show, setShow] = useState(false)
    const height = useRef(new Animated.Value(430)).current;
    const [prevIndex, setPrevIndex] = useState(1)
    const [CurrentIndex, setCurrentIndex] = useState(0)
    const [nextIndex, setNextIndex] = useState(2)
    const [animation, setAnimation] = useState(SlideInRight.duration(1000))

    const [cartItem, setCartItem] = useState(1)
   

    const translateYAnim = useRef(new Animated.Value(200)).current;
    const opacity = useRef(new Animated.Value(0)).current;
    const translateXAnim = useRef(new Animated.Value(100)).current;
    const translateButton = useRef(new Animated.Value(100)).current;

    const qtdSize = useRef(new Animated.Value(18)).current;
    const [size, setSize] = useState(4)


    const bagAnimated = () =>{

      
            Animated.timing(qtdSize, {
                toValue: 35,
                duration: 500,
                useNativeDriver: false,
                }).start(()=>{  
              Animated.timing(qtdSize, {
                toValue: 18,
                duration: 500,
                useNativeDriver: false,
                }).start()
        })
      
    }

    const addItemToCart = () =>{
        bagAnimated()
        setCartItem(cartItem+1)
    }

    useEffect(() => {

        Animated.timing(translateXAnim, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
          }).start(()=>{
                Animated.timing(translateYAnim, {
                    toValue: 0,
                    duration: 1200,
                    useNativeDriver: true,
                  }).start()

                  Animated.timing(opacity, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                    }).start()
             })

        Animated.timing(translateButton, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
              }).start()
      
      }, []);

    const handleSelect = (index) =>{

        if(index > CurrentIndex){
            setAnimation(SlideInLeft.duration(800))
            setNextIndex(CurrentIndex)
            setCurrentIndex(index)
         
        }else{
            setAnimation(SlideInRight.duration(800))
            setPrevIndex(CurrentIndex)
            setCurrentIndex(index)
        } 
        
      
    }


    const handleRenderOption = () =>{
        return products.slice(0.5).map((option, index)=>{
            return(
                <ShoesOption 
                key={option.id}
                select={index == CurrentIndex} 
                image={option.image}
                action={()=>handleSelect(index)}
                />
            )
        })
       
    }

    


    const handleViewMore = () =>{
        if(show){
            Animated.timing(height, {
                toValue: 430, 
                duration: 1000,
                useNativeDriver: false,
              }).start();
            setShow(false)
        }else{
            Animated.timing(height, {
                toValue: 250, 
                duration: 1000,
                useNativeDriver: false,
              }).start();
            setShow(true)
        }
       
    }
  return (
    <View style={styles.container}>
        <Animated.View style={[styles.content,{height}]}>
            <View style={styles.header}>
            <Pressable>
            <Link href='/'>
                <AntDesign name="arrowleft" size={28} color="black" />
            </Link>
            </Pressable>
           
            <Pressable style={styles.boxBag}>
              
                    <Animated.View style={[styles.qtd,{width:qtdSize, height:qtdSize}]}>
                        <Text style={styles.textQtd}>{cartItem}</Text>
                    </Animated.View>
                <Link href='/screen/cart' style={{padding:8}}>
                <FontAwesome6 name="basket-shopping" size={19} color="black" />
                </Link>
            </Pressable>
           
           
            </View>

            <View style={styles.boxPreview}>
                <Image 
                    style={styles.imgPrev}
                    source={products[prevIndex].image}
                    contentFit="contain"
                    blurRadius={4}
                    />
               {Preview(CurrentIndex, animation)}
                    <Image 
                    style={styles.imgNext}
                    source={products[nextIndex].image}
                    contentFit="contain"
                    blurRadius={4}
                    />
            </View>
            <Animated.View style={[styles.boxShoesOption,{transform:[{translateX:translateXAnim}]}]}>
                {handleRenderOption()}
            </Animated.View>
        </Animated.View>

        <Animated.View style={[styles.contentInfo, {transform:[{translateY:translateYAnim}], opacity}]}>
            <Pressable style={styles.buttonLine} onPressOut={()=>handleViewMore()}>
                <View style={styles.line} />
            </Pressable>
            {Info(CurrentIndex)}

            <View style={styles.contentSize}>
                <Text style={styles.titleSize}>Select Size</Text>
                <View style={styles.boxSize}>
                  <Pressable onPress={()=>setSize(1)} style={[styles.buttonSize,size == 1 && {backgroundColor:"#262626"}]}><Text style={[styles.size,size==1&&{color:"#fff"}]}>UK 6</Text></Pressable>
                  <Pressable onPress={()=>setSize(2)} style={[styles.buttonSize,size == 2 && {backgroundColor:"#262626"}]}><Text style={[styles.size,size==2&&{color:"#fff"}]}>UK 7</Text></Pressable>
                  <Pressable onPress={()=>setSize(3)} style={[styles.buttonSize,size == 3 && {backgroundColor:"#262626"}]}><Text style={[styles.size,size==3&&{color:"#fff"}]}>UK 8</Text></Pressable>
                  <Pressable onPress={()=>setSize(4)} style={[styles.buttonSize,size == 4 && {backgroundColor:"#262626"}]}><Text style={[styles.size,size==4&&{color:"#fff"}]}>UK 9</Text></Pressable>
                  <Pressable onPress={()=>setSize(5)} style={[styles.buttonSize,size == 5 && {backgroundColor:"#262626"}]}><Text style={[styles.size,size==5&&{color:"#fff"}]}>UK 10</Text></Pressable>
                
                </View>
            </View>

            <View style={styles.boxDescription}>
                <Text style={styles.description}>
                New colours and fresh textures give you an updated AJ1 without losing its iconic silhouette and familiar feel.
                  New colours and fresh textures give you an updated AJ1 without losing its iconic silhouette and familiar feel.
                </Text>
            </View>
           
        </Animated.View>

        <Animated.View style={[styles.contentButton,{transform:[{translateY:translateButton}]}]}>
            <TouchableOpacity style={styles.buttonFavorite}>
                <AntDesign name="hearto" size={22} color="black" />
                <Text style={styles.buttonText}>FAVORITE</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonAdd} onPress={()=>addItemToCart()}>
                <Text style={[styles.buttonText,{color:"#fff"}]}>{cartItem > 1 ? 'GO TO BAG' :'ADD TO BAG'} </Text>
            </TouchableOpacity>
        </Animated.View>
       

      

    
      <StatusBar style="auto" />
    </View>
  );
}

export default Detail