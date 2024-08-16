import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from '../components/header';
import Brand from '../components/brand';
import Content from '../components/content';
import Tab from '../components/tab';

export default function App() {

  
  return (
    <View style={styles.container}>
        <Header />
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
            <Brand />
            <Content />
        </ScrollView>
        <Tab router="HOME"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:40,
    flex: 1,
    backgroundColor: '#fff',
  },
  scroll:{
    paddingBottom:76
  },
  text:{
    fontFamily:'Formula-Bold',
    fontSize:24,
    color:"#000"
  }
});
