
import { StyleSheet, View, Text, PermissionsAndroid, } from 'react-native';


export default function App() {
  
  return (
   <View style={styles.container}>
<Text>Index</Text>
   </View>
    
   
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, marginLeft: 10, paddingTop: 25,marginTop:70},
  head: { height: 40, backgroundColor: '#f1f8ff', },
  text: { color: 'black', textAlign: 'center' },
});
