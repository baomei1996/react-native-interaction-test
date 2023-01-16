import {useState} from 'react';
import {StyleSheet, View, Button} from 'react-native';

import Animated, {withTiming} from 'react-native-reanimated';

function RotateBoxTest() {
  const [boxVisibility, setBoxVisibility] = useState(false);
  const entering = targetValues => {
    'worklet';
    const animations = {
      transform: [{rotateY: withTiming('0deg', {duration: 2000})}],
    };
    const initialValues = {
      transform: [{rotateY: '-90deg'}],
    };
    return {
      initialValues,
      animations,
    };
  };
  const exiting = targetValues => {
    'worklet';
    const animations = {};
    const initialValues = {};
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
