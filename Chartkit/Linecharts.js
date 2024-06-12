import { LineChart } from 'react-native-chart-kit';
import { Dimensions, Text, View } from 'react-native';
const screenWidth = Dimensions.get('window').width;

const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43]
    }
  ]
};
export default function Linecharts(){
return(
    <View>
<Text style={{marginLeft:"35%", color:'black'}}>LineChart</Text>
<LineChart
  data={data}
  width={screenWidth}
  height={220}
  chartConfig={{
    backgroundColor: "#e26a00",
    backgroundGradientFrom: "#fb8c00",
    backgroundGradientTo: "#ffa726",
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16
    }
  }}
  style={{
    marginVertical: 8,
    borderRadius: 16
  }}
/>
    </View>
  
)
}

