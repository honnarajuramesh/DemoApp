import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthorizedRoutes from './src/Routes';

const App = () => {
  return (
    <NavigationContainer>
      <AuthorizedRoutes />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
  },
});

export default App;
