import { ContributionGraph } from 'react-native-chart-kit';
import { Dimensions, Text, View } from 'react-native';
const screenWidth = Dimensions.get('window').width;


const commitsData = [
    { date: "2017-01-02", count: 1 },
    { date: "2017-01-03", count: 2 },
    { date: "2017-01-04", count: 3 },
    { date: "2017-01-05", count: 4 },
    { date: "2017-01-06", count: 5 },
    { date: "2017-01-30", count: 2 },
    { date: "2017-01-31", count: 3 },
    { date: "2017-03-01", count: 2 },
    { date: "2017-04-02", count: 4 },
    { date: "2017-03-05", count: 2 },
    { date: "2017-02-30", count: 4 }
  ];
export default function Contributiongraph(){
return(
    <View>
<Text style={{marginLeft:"35%"}}>ContributionGraph</Text>
<ContributionGraph
  values={commitsData}
  endDate={new Date("2017-04-01")}
  numDays={105}
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
    color: (opacity = 1) => `rgba(266, 295, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

