import React from "react";
import { GiftedChat, Bubble } from "react-native-gifted-chat";
import { StyleSheet, View, Platform, KeyboardAvoidingView } from "react-native";

export default class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
    };
  }
  componentDidMount() {
    let name = this.props.route.params.name;
    this.props.navigation.setOptions({ title: name });

    this.setState({
      messages: [
        {
          _id: 1,
          text: "Hey Vadim! What's up?",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "React Native",
            avatar: "https://placeimg.com/140/140/any",
          },
        },
        {
          _id: 2,
          text: `${name} has entered the ChitChat`,
          createdAt: new Date(),
          system: true,
        },
      ],
    });
  }
  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }
  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: "whitesmoke",
          },
          right: {
            backgroundColor: "#05676e",
          },
        }}
      />
    );
  }

  render() {
    // Set the background color selected from start screen
    const { color } = this.props.route.params;
    return (
      <View style={[{ backgroundColor: color }, styles.container]}>
        <View style={styles.giftedChat}>
          <GiftedChat
            renderBubble={this.renderBubble.bind(this)}
            messages={this.state.messages}
            onSend={(messages) => this.onSend(messages)}
            user={{
              _id: 1,
            }}
          />
          {Platform.OS === "android" ? (
            <KeyboardAvoidingView behavior="height" />
          ) : null}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  giftedChat: {
    flex: 1,
    width: "88%",
    paddingBottom: 10,
    justifyContent: "center",
  },
});

//Another way using function:
// import React, { useState, useEffect, useCallback } from "react";
// import { GiftedChat, Bubble } from "react-native-gifted-chat";
// import { StyleSheet, View, Platform, KeyboardAvoidingView } from "react-native";

// export default function Chat(props) {
//   let { name, color } = props.route.params;
//   const [messages, setMessages] = useState([]);

//   // Set the screen title to the user name entered in the start screen
//   useEffect(() => {
//     props.navigation.setOptions({ title: name });
//     setMessages([
//       {
//         _id: 1,
//         text: "Hello Vadim",
//         createdAt: new Date(),
//         user: {
//           _id: 2,
//           name: "React Native",
//           avatar: "https://placeimg.com/140/140/any",
//         },
//       },
//       {
//         _id: 2,
//         text: `${name}has entered the chat`,
//         createdAt: new Date(),
//         system: true,
//         // Any additional custom parameters are passed through
//       },
//     ]);
//   }, []);

//   const onSend = useCallback((messages = []) => {
//     setMessages((previousMessages) =>
//       GiftedChat.append(previousMessages, messages)
//     );
//   }, []);

//   // Customize the color of the sender bubble
//   const renderBubble = (props) => {
//     return (
//       <Bubble
//         {...props}
//         wrapperStyle={{
//           right: {
//             backgroundColor: "#000",
//           },
//         }}
//       />
//     );
//   };

//   return (
//     <View style={[{ backgroundColor: color }, styles.container]}>
//       <GiftedChat
//         renderBubble={renderBubble.bind()}
//         messages={messages}
//         onSend={(messages) => onSend(messages)}
//         user={{
//           _id: 1,
//         }}
//       />
//       {Platform.OS === "android" ? (
//         <KeyboardAvoidingView behavior="height" />
//       ) : null}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
