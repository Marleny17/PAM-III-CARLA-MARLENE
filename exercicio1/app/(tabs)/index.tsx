import React, {useState} from 'react';
import { View, 
        Text, 
        StyleSheet, 
        ImageBackground, 
        Alert, 
        Button, 
        SafeAreaView, 
        SectionList,
        StatusBar,
        TouchableHighlight,
      } from 'react-native';

const image = {uri : 'https://s2-techtudo.glbimg.com/RxhZy0GoKiZD2GR8UmDit9a6aQI=/0x0:695x390/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/9/A/S0SNZVRxCBgbRFdwSbaQ/elden-ring-perguntas-respostas-pago-gratuito-ps5-xbox-series.jpg'};

const DATA = [
  {
    title: 'Lordes',
    data: ['Margit', 'Godrick', 'Rennala'],
  },
];

export default function HomeScreen() {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(count + 1);

  return (
    <View style={styles.container}>
      <ImageBackground source={image}  style={styles.image}>
        
        <Text style={{color: 'white',
              textAlign: 'center', 
              fontFamily: 'Cursive', 
              fontSize: '40px'}}>
              Elden Ring
              {'\n'}
              {'\n'}
              LEGAL!
          </Text>
          
        <View style={styles.secondContainer}>
          <Button
            title="SE CONCORDA CLICA" 
            onPress={() => Alert.alert('Botão pressionado')}
          />
          
          <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({item}) => (
              <View style={styles.item}>
                <Text style={styles.title}>{item}</Text>
              </View>
            )}
            renderSectionHeader={({section: {title}}) => (
              <Text style={styles.header}>{title}</Text>
            )}
          />
        </View>

        
        <View style={styles.counterContainer}>
          <TouchableHighlight onPress={onPress} style={styles.touchable}>
            <View style={styles.button}>
              <Text>você morreu?</Text>
            </View>
          </TouchableHighlight>
          <View style={styles.countContainer}>
            <Text style={styles.countText}>{count}</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  secondContainer: {
    width: '54%',
    height: 150,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
  counterContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  touchable: {
    marginTop: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#084d6e',
    padding: 10,
  },
  countContainer: {
    marginTop: 10,
    alignItems: 'center',
    padding: 10,
  },
  countText: {
    fontSize: 24,
    color: '#DDDDDD',
  },
});



