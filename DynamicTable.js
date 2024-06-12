import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView,ActivityIndicator } from 'react-native';
import {
  Table,
  Row,
  Cols,
} from 'react-native-table-component';

export default function DynamicTable() {
  const [data, setData] = useState([]);
  const[indicator, setIndicator] = useState(false)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  const dataUserId = data.map((s) => {
    return s.userId;
  });
  const dataId = data.map((s) => {
    return s.id;
  });
  const dataTitle = data.map((s) => {
    return s.title;
  });
  const dataStatus = data.map((s) => {
    return s.completed ? 'true' : 'false';
  });

  const state = {
    tableHead: ['UserId', 'Id', 'Title', 'Completed'],
    tableData: [dataUserId, dataId, dataTitle, dataStatus],

  }; 

  return (
    <View style={styles.container}>
      <Text style={{ textAlign: 'center', color: 'black', padding: 5 }}>TableComponent</Text>
        <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
          <Row
            data={state.tableHead}
            style={styles.head}
            textStyle={styles.text}
            widthArr={[50, 50, 225, 71]}
          />
        </Table>
      {
        data.length == 200 ?<View>
        <ScrollView  >
          <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
            <Cols data={state.tableData} height={55} widthArr={[50, 50, 225, 71]} textStyle={{ color: 'black', textAlign: 'center' }} />
          </Table>
        </ScrollView></View>:<View style={{alignItems:'center', justifyContent:'center', flex:1}}><ActivityIndicator color='green' size="large" /></View>
      }
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, marginLeft: 10, paddingTop: 25, backgroundColor: 'white' },
  head: { height: 40, backgroundColor: '#f1f8ff', },
  text: { color: 'black', textAlign: 'center' },
});
