import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import InfoCreation from '../components/InfoCreation';
const {width} = Dimensions.get('window');

const WeatherReport = props => {
  const flag = '';
  const {navigation, route} = props;
  const {temperature, wind_speed, precipitation, weather_icons} = route.params;

  return (
    <ScrollView style={styles.root}>
      <View style={styles.ImageView}>
        <Image
          source={{uri: weather_icons[0]}}
          style={{width: 40, height: 40}}
          onError={() => {
            console.log('Unable to load image');
          }}
        />
      </View>
      <InfoCreation value={{temperature}} style={{marginTop: '0%'}} />
      <InfoCreation value={{wind_speed}} />
      <InfoCreation value={{precipitation}} />
    </ScrollView>
  );
};

export default WeatherReport;

const styles = StyleSheet.create({
  root: {
    width: width - 10,
    flexDirection: 'column',
  },
  ImageView: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#23232D',
    justifyContent: 'center',
    margin: '10%',
    borderRadius: 20,
  },
});
