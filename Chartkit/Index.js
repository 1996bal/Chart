import {View, ScrollView,Text} from 'react-native'
import Barchart from './Barchart'
import Bezierlinechart from './Bezierlinechart'
import Contributiongraph from './Contributiongraph'
import Linecharts from './Linecharts'
import Piechart from './Piechart'
import Progressring from './Progressring'
import Stackedbarchart from './Stackedbarchart'
export default function Index() {
    return(
        <View >
             <Text style={{ color: 'red', textAlign: 'center' }} > Chart-Kit</Text>
            <ScrollView>

            <Barchart />
            <Bezierlinechart />
            <Contributiongraph />
            <Linecharts />
            <Piechart />
            <Progressring />
            <Stackedbarchart />

            </ScrollView>
            
            </View>
    )
}