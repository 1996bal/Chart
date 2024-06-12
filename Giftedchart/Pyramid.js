import React from 'react';
import { View, Text } from 'react-native';
import { PopulationPyramid } from 'react-native-gifted-charts';

const Populationpyramid = () => {
  const data = [
    { left: 15, right: 15 },
    { left: 25, right: 35 },
    { left: 35, right: 35 },

  ];

  return (
    <View style={{ height: 250, marginTop: '25%', }}>
       <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            bottom:30
          }}>
        Population Pyramid Charts
        </Text>
      <PopulationPyramid
        data={data}
        showSurplus
        showValuesAsBarLabels
        height={100}
      />
    </View>
  );
};

export default Populationpyramid;
