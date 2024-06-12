import { View,Text } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';
const Curvedareachart = () => {
  const data = [{ value: 15 }, { value: 30 }, { value: 26 }, { value: 40 }];
  return <View style={{ alignItems: 'center', marginTop: '25%' }}><Text
  style={{
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    bottom:30
  }}>
  AreaChart - Curved
</Text><LineChart areaChart data={data} curved /></View>


};

export default Curvedareachart;
