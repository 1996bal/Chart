import React from 'react';
import { View, Text } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';

const LineMultiple = () => {


    const lineData = [
        { value: 0, dataPointText: '0' },
        { value: 80, dataPointText: '80' },
        { value: 40, dataPointText: '40' },
        { value: 80, dataPointText: '80' },
        { value: 40, dataPointText: '40' },
        { value: 80, dataPointText: '80' },
        { value: 40, dataPointText: '40' },
        { value: 80, dataPointText: '80' },
    ];

    const lineData2 = [
        { value: 80, dataPointText: '80' },
        { value: 0, dataPointText: '0' },
        { value: 40, dataPointText: '40' },
        { value: 0, dataPointText: '0' },
        { value: 40, dataPointText: '40' },
        { value: 0, dataPointText: '0' },
        { value: 40, dataPointText: '40' },
        { value: 0, dataPointText: '0' },
    ];

    const lineData3 = [
        { value: 40, dataPointText: '40' },
        { value: 40, dataPointText: '40' },
        { value: 40, dataPointText: '40' },
        { value: 40, dataPointText: '40' },
        { value: 40, dataPointText: '40' },
        { value: 40, dataPointText: '40' },
        { value: 40, dataPointText: '40' },
        { value: 40, dataPointText: '40' },
    ];
    const lineData4 = [
        { value: 60, dataPointText: '60' },
        { value: 60, dataPointText: '60' },
        { value: 60, dataPointText: '60' },
        { value: 60, dataPointText: '60' },
        { value: 60, dataPointText: '60' },
        { value: 60, dataPointText: '60' },
        { value: 60, dataPointText: '60' },
        { value: 60, dataPointText: '60' },
    ];
    const lineData5 = [
        { value: 20, dataPointText: '20' },
        { value: 20, dataPointText: '20' },
        { value: 20, dataPointText: '20' },
        { value: 20, dataPointText: '20' },
        { value: 20, dataPointText: '20' },
        { value: 20, dataPointText: '20' },
        { value: 20, dataPointText: '20' },
        { value: 20, dataPointText: '20' },
    ];

    return (
        <View style={{ marginTop: 150, marginLeft: 9 }}>
             <Text
        style={{
          color: 'black',
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
          bottom: 30
        }}>
      Line Chart Compare Two or more Data
      </Text>
            <LineChart
                data={lineData}
                data2={lineData2}
                data3={lineData3}
                data4={lineData4}
                data5={lineData5}

                height={250}
                showVerticalLines
                spacing={44}
                initialSpacing={0}
                color1="skyblue"
                color2="orange"
                color3='green'
                color4='red'
                color5='brown'
                yAxisTextStyle={{ color: 'red' }}
                xAxisTextStyle={{ color: 'red' }}
                textColor1="green"
                dataPointsHeight={6}
                dataPointsWidth={6}
                dataPointsColor1="blue"
                dataPointsColor2="red"

                textShiftY={-2}
                textShiftX={-5}
                textFontSize={13}
            />
        </View>
    );

};

export default LineMultiple;
