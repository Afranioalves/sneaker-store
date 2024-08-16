import { useCallback, useEffect} from 'react';
import { View } from 'react-native';
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';


SplashScreen.preventAutoHideAsync();

const Layout = () =>{

    const [fontsLoaded, error] = useFonts({
    "Neue-Regular": require("../../assets/fonts/NeueMontreal-Regular.otf"),
    "Neue-Medium": require("../../assets/fonts/NeueMontreal-Medium.otf"),
    "Neue-Bold": require("../../assets/fonts/NeueMontreal-Bold.otf"),
    "Formula-Bold":  require("../../assets/fonts/FormulaCondensed-Bold.otf"),
    "Formula-Light":  require("../../assets/fonts/FormulaCondensed-Light.otf"),
    "Formula-Medium":  require("../../assets/fonts/Formula-Medium.otf"),
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (fontsLoaded) { SplashScreen.hideAsync();}
  }, [fontsLoaded]);


  if (!fontsLoaded) return null;
  
  return <RootLayout />;

  
}
export default Layout


const RootLayout = () =>{
  return(
      
    <Stack
    initialRouteName='screen/detail/index'
    screenOptions={{ headerShown:false}}
    >     
        <Stack.Screen name="index"/>
        <Stack.Screen name="screen/category/index"/>
        <Stack.Screen name="screen/product/index"/>
        <Stack.Screen name="screen/detail/index"/>
        <Stack.Screen name="screen/cart/index"/>
        <Stack.Screen name="screen/ordering/index"/>
        <Stack.Screen name="screen/status/index"/>
    </Stack>
  
)
}