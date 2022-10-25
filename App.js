import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
export default class HelloWorld extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
        <View style={styles.box3}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column", //"row" "row-reverse" "column-reverse"
  },
  box1: {
    flex: 45,
    backgroundColor: "green",
  },
  box2: {
    flex: 50,
    backgroundColor: "pink",
  },
  box3: {
    flex: 50,
    backgroundColor: "white",
  },
});
// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.blue}>React Native project with Expo!</Text>
//       <Text style={styles.bigRed}>React Native project with Expo!</Text>
//       <Text style={[styles.blue, styles.bigRed]}>
//         React Native project with Expo!
//       </Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   blue: {
//     color: "blue",
//     fontWeight: "600",
//   },
//   bigRed: {
//     color: "red",
//     fontSize: 30,
//   },
//   bigRedBold: {
//     color: "red",
//     fontSize: 30,
//     fontWeight: "600",
//   },
// });
