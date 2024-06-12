import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';

const Barchart = () => {
  const data = [
    { value: 20, label: 'M', labelTextStyle: styles.redText },
    { value: 30, label: 'T', labelTextStyle: { color: 'red' } },
    { value: 40, label: 'W', labelTextStyle: { color: 'gold' } },
    { value: 30, label: 'F', labelTextStyle: { color: 'grey' } },
  ];

  return (
    <View style={styles.container} >
       <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          BarChart
        </Text>
      <BarChart
        width={300}
        data={data}
        frontColor="red"
        yAxisTextStyle={{ color: 'green' }}
        maxValue={70}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

    alignItems: 'center',
  },
  redText: {
    color: 'green',
  },
});

export default Barchart;
