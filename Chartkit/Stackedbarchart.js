import { StackedBarChart } from 'react-native-chart-kit';
import { Dimensions, Text, View } from 'react-native';
const screenWidth = Dimensions.get('window').width;

const data = {
    labels: ["Test1", "Test2"],
    legend: ["L1", "L2", "L3"],
    data: [
      [60, 60, 60],
      [30, 30, 60]
    ],
    barColors: ["#dfe4ea", "#ced6e0", "#a4b0be"]
  };
export default function Stackedbarchart(){
return(
    <View>
<Text style={{marginLeft:"35%", color:'black'}}>StackedBarChart</Text>

<StackedBarChart
 
  data={data}
  width={screenWidth}
  height={220}
  chartConfig={chartConfig}
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

