import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

type InfoCreationType = {
  value: {[objKey: string]: string | number};
  style?: any;
};

function InfoCreation({value, style}: InfoCreationType): JSX.Element {
 
  const [keyName] = useState(Object.keys(value)[0]);
  return (
    <View style={[styles.info, style]}>
      <Text style={styles.infoKey}>{keyName} : </Text>
      <Text style={styles.infoValue}>
        {value[keyName] ?? `unable to find ${keyName}!!`}
      </Text>
    </View>
  );
}

export default InfoCreation;

const styles = StyleSheet.create({
  info: {
    flex: 1,
    flexDirection: 'row',
    marginTop: '5%',
  },
  infoKey: {
    fontSize: 25,
    marginRight: 10,
    marginLeft: 5,
  },
  infoValue: {
    textAlignVertical: 'bottom',
    fontSize: 20,
  },
});
