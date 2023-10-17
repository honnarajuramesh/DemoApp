import React, {useState} from 'react';
import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  Button,
} from 'react-native';
import InfoCreation from '../components/InfoCreation';

const {width} = Dimensions.get('window');

//API_ACCESS_KEY will be moved to a config file and will be hidden from the user
const API_ACCESS_KEY = 'cd8a12b5a513bf72ec7914d3cdf7c705';

const CountryInfo = props => {
  const {navigation, route} = props;
  const [loadingWeather, setLoadingWeather] = useState(false);
  const {capital, population, latitude, longitude, flag} = route.params;

  const handleSearch = () => {
    setLoadingWeather(true);
    fetch(
      `http://api.weatherstack.com/current?access_key=${API_ACCESS_KEY}&query=${capital}`,
    )
      .then(response => response.json())
      .then(data => {
        const {temperature, wind_speed, weather_icons, precip} = data.current;
        navigation.navigate('WeatherReport', {
          temperature,
          wind_speed,
          weather_icons,
          precipitation: precip,
        });
        setLoadingWeather(false);
      })
      .catch(err => {
        console.log(err);
        setLoadingWeather(false);
      });
  };

  return (
    <ScrollView style={styles.root}>
      <View style={styles.ImageView}>
        <Image
          source={{uri: flag}}
          style={{width: 200, height: 100}}
          onError={() => {
            console.log('Unable to load image');
          }}
        />
      </View>
      <InfoCreation value={{capital}} style={{marginTop: '15%'}} />
      <InfoCreation value={{population}} />
      <InfoCreation
        value={{latitude_and_langitude: `${latitude}, ${longitude}`}}
      />

      <View style={styles.button}>
        <Button
          title={loadingWeather ? '◌' : 'Capital Weather'}
          onPress={handleSearch}
          disabled={loadingWeather}
        />
      </View>
    </ScrollView>
  );
};

export default CountryInfo;

const styles = StyleSheet.create({
  root: {
    width: width - 10,
    flexDirection: 'column',
  },
  ImageView: {
    flex: 1,
    top: '10%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#23232D',
    justifyContent: 'center',
    margin: '10%',
    borderRadius: 20,
  },
});
