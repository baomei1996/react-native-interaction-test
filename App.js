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

const App: () => Node = () => {
  return (
    <View style={styles.container}>
      <ProgressTest progress={60} />
      <LongPressButtonTest />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
