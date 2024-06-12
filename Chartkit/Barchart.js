import { BarChart } from 'react-native-chart-kit';
import { Dimensions, Text, View, StyleSheet } from 'react-native';
const screenWidth = Dimensions.get('window').width;

const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43]
      }
    ]
  };
export default function Barchart(){
return(
    <View>
<Text style={{marginLeft:"35%", color:'black'}}>BarChart</Text>
<BarChart
  
  data={data}
  width={screenWidth}
  height={220}
  yAxisLabel="$"
  chartConfig={chartConfig}
  verticalLabelRotation={30}
 
/>
    </View>
  
)
}

const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

