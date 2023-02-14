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
import RotateBoxTest from './src/screens/RotateBoxTest';
import BlurBox from './src/screens/BlurBox';

import {StyleSheet, View, Image} from 'react-native';
import WalkingProgressTest from './src/screens/WalkingProgressTest';
import ImageSrc from './src/screens/test.png';

const App: () => Node = () => {
  return <BlurBox />;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100,
  },
});

export default App;
