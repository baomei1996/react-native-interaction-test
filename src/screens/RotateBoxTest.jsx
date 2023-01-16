import {useState} from 'react';
import {StyleSheet, View, Button} from 'react-native';

import Animated, {withTiming} from 'react-native-reanimated';

function RotateBoxTest() {
  const [boxVisibility, setBoxVisibility] = useState(false);
  const entering = targetValues => {
    'worklet';
    const animations = {
      opacity: withTiming(1, {duration: 300}),
      transform: [
        {translateX: withTiming(-200 / 2, {duration: 400})},
        {rotateY: withTiming('0deg', {duration: 400})},
        {translateX: withTiming(200 / 2, {duration: 400})},
      ],
    };
    const initialValues = {
      opacity: 0,
      transform: [
        {translateX: -200 / 2},
        {rotateY: '-80deg'},
        {translateX: 200 / 2},
      ],
    };
    return {
      initialValues,
      animations,
    };
  };

  const exiting = targetValues => {
    'worklet';
    const animations = {
      opacity: withTiming(0, {duration: 300}),
      transform: [
        {translateX: withTiming(-200 / 2, {duration: 400})},
        {rotateY: withTiming('-80deg', {duration: 400})},
        {translateX: withTiming(200 / 2, {duration: 400})},
      ],
    };
    const initialValues = {
      opacity: 1,
      transform: [
        {translateX: -200 / 2},
        {rotateY: '0deg'},
        {translateX: 200 / 2},
      ],
    };
    return {
      initialValues,
      animations,
    };
  };

  return (
    <View style={styles.container}>
      {boxVisibility && (
        <Animated.View
          style={styles.box}
          entering={entering}
          exiting={exiting}></Animated.View>
      )}
      <Button title="toggle" onPress={() => setBoxVisibility(!boxVisibility)} />
    </View>
  );
}

export default RotateBoxTest;

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 500,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  box: {
    width: 200,
    height: 200,
    borderWidth: 10,
    borderColor: 'aqua',
    borderRadius: 20,
  },
});
