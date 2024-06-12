
import { View, Text } from 'react-native';
import { PieChart } from 'react-native-gifted-charts';
import { useState } from 'react';
const Piechart = () => {
    const [value, setValue] = useState('');
  const pieData = [
    { value: value, color: '#177AD5', text: `${value}%` },
    { value: 60-value, color: '#79D2DE', text: `${60-value}%` },
   
  ];

  setInterval(() => {
    let k = new Date();
    setValue(k.getSeconds());
  }, 1000);
  return (
    <View style={{ alignItems: 'center', marginTop: '25%' }} >
      <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            bottom:20
          }}>
          Donut Chart
        </Text>
      <PieChart
        showText
        textColor="black"
        radius={150}
        textSize={20}
        showTextBackground
        textBackgroundRadius={26}
        data={pieData}
    
        donut
      />
      <App1 />
    </View>
  );
};

export default Piechart;


const App1 = () => {
  const [value, setValue] = useState('');
  const pieData = [
    { value: value, color: '#177AD5' },
    { value: 60 - value, color: 'lightgray' },
  ];

  setInterval(() => {
    let k = new Date();
    setValue(k.getSeconds());
  }, 1000);

  
  return (
    <View style={{marginTop:50}}>
      <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            bottom:20
          }}>
        Center Label Component
        </Text>
      <PieChart
        donut
        innerRadius={115}
        data={pieData}
        centerLabelComponent={() => {
          return <Text style={{ fontSize: 30, color:"black" }}>{value}%</Text>;
        }}
      />
    </View>
  );
};

