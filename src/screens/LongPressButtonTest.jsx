import React, {useRef, useEffect, useState} from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';

import Wave from 'react-native-waveview';

function WaveView({h}) {
  const waveRef = useRef(null);

  useEffect(() => {
    waveRef.current.setWaterHeight(h);
  }, [h]);

  return (
    <Wave
      ref={ref => (waveRef.current = ref)}
      style={styles.waveBall}
      H={-15}
      easing="ease-in-out"
      waveParams={[
        {A: 10, T: 200, fill: 'rgb(237, 33, 81)'},
        {A: 15, T: 140, fill: 'rgba(237, 33, 81, 0.75)'},
      ]}
      animated={true}
    />
  );
}

function LongPressButtonTest() {
  const [waveHeight, setWaveHeight] = useState(-10);
  const [onPress, setOnPress] = useState(false);
  const max_guage = 179;
  const min_guage = -10;

  useEffect(() => {
    if (!onPress) {
      return;
    }
    const raiseGuage = setInterval(() => {
      setWaveHeight(waveHeight + 10);

      if (waveHeight > max_guage) {
        setWaveHeight(max_guage);
        clearInterval(raiseGuage);
      }
    }, 200);
    return () => clearInterval(raiseGuage);
  }, [waveHeight, onPress]);

  useEffect(() => {
    if (onPress) {
      return;
    }

    const lowerGuage = setInterval(() => {
      setWaveHeight(waveHeight - 10);

      if (waveHeight < min_guage) {
        setWaveHeight(min_guage);
        clearInterval(lowerGuage);
      }
    }, 200);
    return () => clearInterval(lowerGuage);
  }, [waveHeight, onPress]);

  const onPressIn = () => {
    setOnPress(true);
  };

  const onPressOut = () => {
    setOnPress(false);
  };

  return (
    <Pressable
      style={[styles.button]}
      onPressIn={onPressIn}
      onPressOut={onPressOut}>
      <WaveView h={waveHeight} />
      <Text style={styles.text}>STOP</Text>
    </Pressable>
  );
}

export default LongPressButtonTest;

const styles = StyleSheet.create({
  button: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'rgba(243, 244, 248, 0.1)',
    backgroundColor: 'rgba(243, 244, 248, 0.1)',
    width: 189,
    height: 45,
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    position: 'absolute',
    alignSelf: 'center',
    paddingTop: 10,
  },
  waveBall: {
    width: 45,
    height: 189,
    borderRadius: 15,
    overflow: 'hidden',
    transform: [{rotate: '90deg'}, {translateX: -72}, {translateY: -72}],
  },
});
