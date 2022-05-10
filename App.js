import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.bigContainer1}>

        <View style={styles.midContainer1}>

          <View style={styles.container1}></View>
          <View style={styles.container2}></View>
          <View style={styles.container3}></View>

        </View>

        <View style={styles.midContainer2}>

          <View style={styles.container4}></View>
          <View style={styles.container5}></View>

        </View>
        <View style={styles.midContainer3}>

          <View style={styles.container6}></View>
          <View style={styles.container7}></View>

        </View>
      </View>
      <View style={styles.bigContainer2}></View>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bigContainer1: {
    flex: 1,
    flexDirection: 'row'
  },
  bigContainer2: {
    flex: 1,
    backgroundColor: "grey",
    flexDirection: 'row'
  },
  midContainer1: { 
      flex: 6,
      flexDirection: 'column',
  },
  midContainer2: {
    flex: 2,
    flexDirection: 'row',
  },
  midContainer3: {
    flex: 2,
    flexDirection: "column"
  },
  container1: {
    flex: 6,
    backgroundColor:"purple"
  },
  container2: {
    flex: 2,
    backgroundColor: "yellow"
  },
  container3: {
    flex: 2,
    backgroundColor: "pink"
  },
  container4: {
    flex: 3,
    backgroundColor: "red"
  },
  container5: {
    flex: 1,
    backgroundColor: "blue"
  },
  container6 : {
    flex: 3,
    backgroundColor: "lightblue"
  },
  container7: {
    flex: 1,
    backgroundColor: "magenta"
  }
});
