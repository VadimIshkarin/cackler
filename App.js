// import React, { Component } from "react";
// import the screens
import Start from "./components/Start";
import Chat from "./components/Chat";
// import react native gesture handler
import "react-native-gesture-handler";
// import react Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import { StyleSheet, View } from "react-native";

// Create the navigator
const Stack = createStackNavigator();

// export default class App extends React.Component {
// constructor(props) {
//   super(props);
//   this.state = { text: "" };
// }
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Chat" component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "column", "row" "row-reverse" "column-reverse"
//   },
//   box1: {
//     flex: 45,
//     backgroundColor: "green",
//   },
//   box2: {
//     flex: 50,
//     backgroundColor: "pink",
//   },
//   box3: {
//     flex: 50,
//     backgroundColor: "white",
//   },
// });
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
