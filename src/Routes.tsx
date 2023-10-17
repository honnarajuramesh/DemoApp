import * as React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import CountryForm from './screens/CountryForm';
import CountryInfo from './screens/CountryInfo';
import WeatherReport from './screens/WeatherReport';

// Navigation parameters go here
export type RootStackParamList = {
  Home: undefined;
  CountryInfo: {
    capital: string;
    population: number;
    latitude: number;
    Longitude: number;
    flag: string;
  };
  WeatherReport: {
    temperature: number;
    wind_speed: number;
    weather_icons: [string];
    precipitation: number;
  };
};

const Stack = createStackNavigator<RootStackParamList>();

const AuthorizedRoutes = () => {
  return (
    <Stack.Navigator initialRouteName={'Home'}>
      <Stack.Screen
        name="Home"
        component={CountryForm}
        options={{...TransitionPresets.SlideFromRightIOS}}
      />
      <Stack.Screen
        name="CountryInfo"
        component={CountryInfo}
        options={{...TransitionPresets.SlideFromRightIOS}}
      />
      <Stack.Screen
        name="WeatherReport"
        component={WeatherReport}
        options={{...TransitionPresets.SlideFromRightIOS}}
      />
    </Stack.Navigator>
  );
};

export default AuthorizedRoutes;
