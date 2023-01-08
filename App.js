/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';

import ProgressTest from './src/screens/ProgressTest';
import LongPressButtonTest from './src/screens/LongPressButtonTest';

import {StyleSheet, View} from 'react-native';
import WalkingProgressTest from './src/screens/WalkingProgressTest';

const App: () => Node = () => {
  return (
    <View style={styles.container}>
      <WalkingProgressTest progress={80} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100,
  },
});

export default App;
