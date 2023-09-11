import {Svg, Polyline} from 'react-native-svg';

function MapPolyline() {
  const coords = [
    [6.56674, 45.39881],
    [6.56682, 45.399],
    [6.56701, 45.39959],
    [6.56727, 45.40006],
    [6.56738, 45.4003],
    [6.56745, 45.40041],
    [6.56757, 45.40053],
  ];

  //calculate coordinate range for a scale factor
  let xArr = coords.map(val => {
    return val[0];
  });
  let xMin = Math.min(...xArr);
  let xMax = Math.max(...xArr);
  let yArr = coords.map(val => {
    return val[1];
  });
  let yMin = Math.min(...yArr);
  let yMax = Math.max(...yArr);

  //scale coordinates
  coords.forEach(function (coord) {
    let [x, y] = [coord[0], coord[1]];
    coord[0] = x;
    coord[1] = y;
  });

  return (
    <Svg width={200} height={200} style={{backgroundColor: 'red'}}>
      <Polyline points={coords.join()} stroke="blue" strokeWidth={6} />
    </Svg>
  );
}

export default MapPolyline;
