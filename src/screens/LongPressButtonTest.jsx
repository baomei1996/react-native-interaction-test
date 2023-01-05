import React, {useRef, useEffect, useState} from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';

import Wave from 'react-native-waveview';

function WaveView({h}) {
  const waveRef = useRef(null);

  useEffect(() => {
    console.log(h);
  }, [h]);

  return (
    <Wave
      ref={ref => (waveRef.current = ref)}
      style={styles.waveBall}
      H={-15}
      waveParams={[
        {A: 10, T: 180, fill: 'rgb(237, 33, 81)'},
        {A: 15, T: 140, fill: 'rgba(237, 33, 81, 0.75)'},
      ]}
      animated={true}
    />
  );
}

function LongPressButtonTest() {
  const [h, setH] = useState(-15);

  const max_guage = 189 - 10;
  const min_guage = -10;

  const onPressIn = () => {
    const boostGuage = setInterval(() => {
      setH(h + 1);

      if (h === max_guage) {
        clearInterval(boostGuage);
      }
    }, 500);
  };

  const onPressOut = () => {};

  return (
    <Pressable style={[styles.button]} onPressIn={onPressIn}>
      <WaveView h={h} />
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
