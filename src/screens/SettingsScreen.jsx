import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function SettingsScreen() {
  return (
    <View style={styles.rootContainer}>
      <Text>HomeScreen</Text>
    </View>
  );
}

export default SettingsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
});
