// import React from "react";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from "react-native";
import BackgroundImage from "../assets/img-background.png";

// Create background colors for Chat Screen
const colors = {
  blue: "#3e70c0",
  green: "#6dddae",
  purple: "#474056",
  yellow: "#f6f65f",
};

export default function Start(props) {
  let [name, setName] = useState();
  let [color, setColor] = useState();

  // export default class Start extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = { name: "" };
  //   }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={BackgroundImage}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.title}>Welcome to ChitChat</Text>

        <View style={styles.box}>
          {/* Input box to set user name passed to chat screen */}
          <TextInput
            onChangeText={(name) => setName(name)}
            value={name}
            style={styles.input}
            placeholder="Type your name..."
          />

          {/* Allow user to choose a background color for the chat screen */}
          <Text style={styles.text}>Choose Background Color:</Text>
          <View style={styles.colorContainer}>
            <TouchableOpacity
              style={[{ backgroundColor: colors.blue }, styles.colorbutton]}
              onPress={() => setColor(colors.blue)}
            />
            <TouchableOpacity
              style={[{ backgroundColor: colors.green }, styles.colorbutton]}
              onPress={() => setColor(colors.green)}
            />
            <TouchableOpacity
              style={[{ backgroundColor: colors.purple }, styles.colorbutton]}
              onPress={() => setColor(colors.purple)}
            />
            <TouchableOpacity
              style={[{ backgroundColor: colors.yellow }, styles.colorbutton]}
              onPress={() => setColor(colors.yellow)}
            />
          </View>

          {/* Open chatroom, passing user name and background color as props */}
          <Pressable
            onPress={() =>
              props.navigation.navigate("Chat", { name: name, color: color })
            }
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "#357b70" : "#489c79",
              },
              styles.button,
            ]}
          >
            <Text style={styles.buttontext}>Let's ChitChat</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  title: {
    fontSize: 45,
    fontWeight: "600",
    color: "#ffffff",
  },

  box: {
    width: "88%",
    backgroundColor: "white",
    alignItems: "center",
    height: "44%",
    justifyContent: "space-evenly",
  },

  input: {
    height: 50,
    width: "88%",
    fontSize: 16,
    fontWeight: "300",
    color: "#757083",
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
  },

  text: {
    color: "#757083",
    fontSize: 16,
    fontWeight: "300",
  },

  colorContainer: {
    width: "88%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  colorbutton: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },

  button: {
    height: 50,
    width: "88%",
    justifyContent: "center",
    alignItems: "center",
  },

  buttontext: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
});
