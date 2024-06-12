
import { StyleSheet, View, Text, ScrollView, } from 'react-native';
import Barchart from './Barchart'
import Piechart from './Piechart'
import Populationpyramid from './Pyramid'
import Multiplelines from './Multiplelines'
import Minimalareachart from './Minimalareachart'
import Curvedareachart from './CurvedAreachart'
import LineMultiple from './LineMultiple';
import Animated from './Animated';
import GroupedBars from './GroupedBars'
import { useState } from 'react';
export default function Index() {
const[value, setValue] = useState('Gifted Chart')
  return (
    <View style={styles.container}>
      <Text style={{ color: 'red', textAlign: 'center', fontSize:50 }} >{value}</Text>
      <ScrollView >
        <Barchart  />
        <Piechart setValue={setValue} />
        <Populationpyramid />
        <Multiplelines />
        <Minimalareachart />
        <Curvedareachart />
        <Animated />
        <LineMultiple />
        <GroupedBars />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, marginLeft: 10, paddingTop: 25, backgroundColor: 'white' },
  head: { height: 40, backgroundColor: '#f1f8ff', },
  text: { color: 'black', textAlign: 'center' },
});
