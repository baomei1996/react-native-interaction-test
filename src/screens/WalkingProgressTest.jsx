import {View, StyleSheet} from 'react-native';
import {Rect, G, Svg, Path} from 'react-native-svg';
import {svgPathProperties} from 'svg-path-properties';

import Animated, {
  withTiming,
  useAnimatedProps,
  useSharedValue,
} from 'react-native-reanimated';

const AnimatedPath = Animated.createAnimatedComponent(Path);

function WalkingProgressTest({progress}) {
  let fullPath =
    'M 118.3 83.8 L 45.6 83.8 C 24.5 83.8 7.3 66.7 7.3 45.5 C 7.3 24.4 24.4 7.2 45.6 7.2 L 262.6 7.2 C 283.7 7.2 300.9 24.3 300.9 45.5 C 300.9 66.6 283.8 83.8 262.6 83.8 L 189.9 83.8';
  const pathProperty = new svgPathProperties(fullPath);
  const pathTotalLength = pathProperty.getTotalLength();
  // stroke-dasharray 603
  const guage = useSharedValue(0);

  const animatedProps = useAnimatedProps(() => {
    guage.value = pathTotalLength - (progress / 100) * pathTotalLength;
    return {
      strokeDashoffset: withTiming(guage.value, {
        duration: 1500,
      }),
    };
  }, [progress]);

  return (
    <Svg style={styles.container}>
      <Path
        d={fullPath}
        stroke="rgba(243, 244, 248, 0.25)"
        strokeWidth={10}
        strokeLinecap="round"
      />
      <AnimatedPath
        animatedProps={animatedProps}
        d={fullPath}
        stroke="rgb(40, 230, 198)"
        strokeWidth={10}
        strokeLinecap="round"
        strokeDasharray={pathTotalLength}
      />
    </Svg>
  );
}

export default WalkingProgressTest;

const styles = StyleSheet.create({
  container: {},
});
