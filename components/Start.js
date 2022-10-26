import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  ImageBackground,
} from "react-native";
import backgroundStartImage from "../assets/img-background.png";

export default class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={backgroundStartImage} style={styles.image}>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={styles.blue}>Welcome to Chitchat!</Text>
            <TextInput
              style={{
                height: 50,
                width: 150,
                borderColor: "black",
                borderWidth: 2,
                fontWeight: "600",
                fontSize: 20,
                color: "black",
              }}
              onChangeText={(name) => this.setState({ name })}
              value={this.state.name}
              placeholder="Type here ..."
            />

            <Button
              title="Go to Chat"
              onPress={() =>
                this.props.navigation.navigate("Chat", {
                  name: this.state.name,
                })
              }
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  //The demension of the background image according to the project brief
  image: {
    flex: 1,
    resizeMode: "cover",
    flexDirection: "column",
    alignItems: "center",
  },
  blue: {
    color: "blue",
    fontSize: 23,
  },
});
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
