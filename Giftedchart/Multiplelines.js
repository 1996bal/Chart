import { View,Text } from 'react-native'
import { LineChart } from "react-native-gifted-charts"
const Multiplelines = () => {
    const lineData = [{ value: 80 }, { value: 60 }, { value: 40 }, { value: 60 }, { value: 80 }, { value: 60 }, { value: 40 }, { value: 60 }, { value: 80 }];
    const lineData2 = [{ value: 40 }, { value: 60 }, { value: 80 }, { value: 60 }, { value: 40 }, { value: 60 }, { value: 80 }, { value: 60 }, { value: 40 }];
    const lineData3 = [{ value: 60 }, { value: 60 }, { value: 60 }, { value: 60 }, { value: 60 }, { value: 60 }, { value: 60 }, { value: 60 },{value:60},]
    return (
        <View style={{ alignItems: 'center', }}>
            <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            bottom:30
          }}>
          AreaChart Multiple
        </Text>
            <LineChart
                areaChart
                curved
                data={lineData}
                data2={lineData2}
                data3={lineData3}
                height={180}
                showVerticalLines
                spacing={44}
                initialSpacing={0}
                color1="skyblue"
                color2="orange"
                color3="green"
                textColor1="green"
                hideDataPoints
                dataPointsColor1="blue"
                dataPointsColor2="red"
                startFillColor1="skyblue"
                startFillColor2="orange"
                startOpacity={0.8}
                endOpacity={0.3}
            />
        </View>
    );
};

export default Multiplelines;
