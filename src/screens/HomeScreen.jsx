import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapPolyline from './components/MapPolyline';

function HomeScreen() {
  return (
    <View style={styles.rootContainer}>
      <MapPolyline />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
