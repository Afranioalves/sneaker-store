import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Pressable, TouchableOpacity } from 'react-native';
import Tab from '../../../components/tab';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './style';
import LottieView from 'lottie-react-native';
import { Link } from 'expo-router';




const Status = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
           <Text style={styles.title}>ORDER PLACED</Text>  
        </View>

        <View style={styles.boxAnimation}>
            <LottieView
                autoPlay
                duration={3000}
                loop={false}
                style={{
                width: 120,
                height: 120,
                }}
                source={require('./success.json')}
        />
        <Text style={styles.textInfo}>Order confirmed!</Text>
        <Text style={styles.textDescription}>We will be sending you an email confirmation to </Text>
        <Text style={styles.email}>afranio777alves@gmail.com</Text>

        </View>

        <View style={styles.contentOrder}>
            <Text style={styles.textOrder}>Order ID:4785963214</Text>
            <View style={{flexDirection:'row',gap:4}}>
                <Text style={styles.textDate}>Expected Delivery Date</Text>
                <Text style={styles.date}>25 April</Text>
            </View>

            <TouchableOpacity style={styles.buttonContinue}>
                <Link href='/'>
                    <Text style={styles.textContinue}>CONTINUE SHOPPING</Text>
                </Link>
            </TouchableOpacity>
           
        </View>
      
     
      <StatusBar style="auto" />
    </View>
  );
}

export default Status