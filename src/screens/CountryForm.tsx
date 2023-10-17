import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const CountryForm = ({navigation}) => {
  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(false);
  const [TextColor] = useState('#fff');

  const handleSubmit = async () => {
    setLoading(true);
    setCountry('');
    fetch(`https://restcountries.com/v3.1/name/${country}`)
      .then(response => response.json())
      .then(data => {
        setLoading(false);
        const {capital, population, latitude, longitude, flags} = data[0];
        navigation.navigate('CountryInfo', {
          capital,
          population,
          latitude,
          longitude,
          flag: flags.png,
        });
      })
      .catch(err => {
        console.log(`error: ${err}`);
        setLoading(false);
      });
  };

  return (
    <View style={styles.formRoot}>
      <Text style={styles.header}>Country Form</Text>
      {loading ? (
        <Text style={styles.loading}>Loading ...</Text>
      ) : (
        <View>
          <TextInput
            placeholder="Enter country Name"
            value={country}
            placeholderTextColor={TextColor}
            style={styles.textInput}
            autoFocus
            onChangeText={value => setCountry(value)}
          />
          <View style={styles.button}>
            <Button title="Submit" onPress={handleSubmit} disabled={!country} />
          </View>
        </View>
      )}
    </View>
  );
};

export default CountryForm;

const styles = StyleSheet.create({
  formRoot: {
    width: width - 40,
    height: height - 40,
    marginLeft: 10,
    marginTop: 1,
    fontFamily: 'sans-serif-condensed',
  },
  header: {
    fontSize: 30,
    height: 60,
  },
  textInput: {
    margin: 5,
    height: 40,
    backgroundColor: '#D3D3D3',
    color: '#000000',
  },
  button: {
    backgroundColor: '#23232D',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 20,
  },
  loading: {
    // flex: 1,
    top: '30%',
    left: '40%',
  },
});
