import React, {useRef, useEffect} from 'react';
import {Pressable, StyleSheet, Animated} from 'react-native';

import Wave from 'react-native-waveview';

function WaveView() {
  const waveRef = useRef(null);

  useEffect(() => {
    const waterHeight = setTimeout(() => {
      waveRef.current.setWaterHeight(70);
    }, 3000);

    return () => clearTimeout(waterHeight);
  }, []);
  return (
    <Wave
      ref={ref => (waveRef.current = ref)}
      style={styles.waveBall}
      H={30}
      waveParams={[
        {A: 10, T: 180, fill: '#62c2ff'},
        {A: 15, T: 140, fill: '#0087dc'},
        {A: 20, T: 100, fill: '#1aa7ff'},
      ]}
      animated={true}
    />
  );
}

function LongPressButtonTest() {
  const onLongPress = () => {};

  const onPressOut = () => {};

  return (
    <Pressable style={styles.container}>
      <WaveView />
    </Pressable>
  );
}

export default LongPressButtonTest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth,
  },
  wave: {
    width: 100,
    aspectRatio: 1,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  waveBall: {
    width: 100,
    aspectRatio: 1,
    borderRadius: 50,
    overflow: 'hidden',
  },
});
