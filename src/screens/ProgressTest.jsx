import {View, StyleSheet} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {Rect, G, Svg, Circle} from 'react-native-svg';

function EdgePoint({progress}) {
  const startEdgeColor = progress > 0 ? '#28E6C6' : '#f3f4f826';
  return (
    <Svg viewBox="0 0 170 114" width={170} height={140} style={styles.edge}>
      <Rect
        width={10}
        height={2}
        x={10.5}
        y={104}
        originX={10}
        originY={103}
        rotation={-26}
        fill={startEdgeColor}
      />
      <Rect
        width={10}
        height={2}
        x={160}
        y={98.5}
        originX={159}
        originY={100}
        rotation={25}
        fill="#f3f4f826"
      />
    </Svg>
  );
}

function ProgressTest({progress}) {
  return (
    <View style={styles.container}>
      <AnimatedCircularProgress
        size={170}
        width={2}
        fill={progress}
        padding={10}
        tintColor="#28E6C6"
        arcSweepAngle={216}
        rotation={-108}
        renderCap={({center}) => {
          if (progress === 0) return <></>;
          return <Circle cx={center.x} cy={center.y} r={5} fill="#28E6C6" />;
        }}
        onAnimationComplete={() => console.log('onAnimationComplete')}
        backgroundColor="#f3f4f826">
        {() => (
          <AnimatedCircularProgress
            size={140}
            width={20}
            fill={progress}
            tintColor="#28E6C6"
            arcSweepAngle={216}
            rotation={-108}
            onAnimationComplete={() => console.log('onAnimationComplete')}
            backgroundColor="#f3f4f826"
          />
        )}
      </AnimatedCircularProgress>
      <EdgePoint progress={progress} />
    </View>
  );
}

export default ProgressTest;

const styles = StyleSheet.create({
  container: {},
  edge: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
  },
});
