import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function Chat(props) {
  let { name, color } = props.route.params;
  props.navigation.setOptions({ title: name });

  return (
    <View style={[{ backgroundColor: color }, styles.container]}>
      <Text style={styles.text}>Hey ChitChat!</Text>

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button
          title="Go back to Start"
          onPress={() => props.navigation.navigate("Start")}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: "#ffffff",
  },
  button: {
    color: "#ffffff",
  },
});
