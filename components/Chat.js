import React from "react";
import { View, Text, Button } from "react-native";

export default class Chat extends React.Component {
  componentDidMount() {
    let name = this.props.route.params.name;
    this.props.navigation.setOptions({ title: name });
  }
  render() {
    return (
      <View style={[{ backgroundColor: color }, styles.container]}>
        <Text style={styles.text}>Hello Chat!</Text>

        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Button
            title="Go to Start"
            onPress={() => this.props.navigation.navigate("Start")}
          />
        </View>
      </View>
    );
  }
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
});
