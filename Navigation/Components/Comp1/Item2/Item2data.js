export const Data =[
    {
      "id":1,
      "name":"Functional Component Example:",
      "link":"https://snack.expo.dev/@ramajeyam/view-function-component-example",
      "content":`        import React from "react";
        import { View, Text } from "react-native";
        
        const ViewBoxesWithColorAndText = () => {
          return (
            <View
              style={{
                flexDirection: "row",
                height: 100,
                padding: 20
              }}
            >
              <View style={{ backgroundColor: "blue", flex: 0.3 }} />
              <View style={{ backgroundColor: "red", flex: 0.5 }} />
              <Text>Hello World!</Text>
            </View>
          );
        };
        
        export default ViewBoxesWithColorAndText;`
    },
    {
      "id":2,
      "name":"Functional Component Example:",
      "link":"https://snack.expo.dev/ejCmTQw5W",
      "content":`      import React, { useState } from "react";
      import { Text, StyleSheet } from "react-native";
      
      const TextInANest = () => {
        const [titleText, setTitleText] = useState("Bird's Nest");
        const bodyText = "This is not really a bird nest.";
      
        const onPressTitle = () => {
          setTitleText("Bird's Nest [pressed]");
        };
      
        return (
          <Text style={styles.baseText}>
            <Text style={styles.titleText} onPress={onPressTitle}>
              {titleText}
            </Text>
            <Text numberOfLines={5}>{bodyText}</Text>
          </Text>
        );
      };
      
      const styles = StyleSheet.create({
        baseText: {
          fontFamily: "Cochin"
        },
        titleText: {
          fontSize: 20,
          fontWeight: "bold"
        }
      });
      
      export default TextInANest;`
    },
    {
      "id":3,
      "name":"Functional Component Example:",
      "link":"https://snack.expo.dev/xj3tIEPYq",
      "content":`        
      import React from 'react';
      import { View, Image, StyleSheet } from 'react-native';
      
      const styles = StyleSheet.create({
        container: {
          paddingTop: 50,
        },
        tinyLogo: {
          width: 50,
          height: 50,
        },
        logo: {
          width: 66,
          height: 58,
        },
      });
      
      const DisplayAnImage = () => {
        return (
          <View style={styles.container}>
            <Image
              style={styles.tinyLogo}
              source={require('@expo/snack-static/react-native-logo.png')}
            />
            <Image
              style={styles.tinyLogo}
              source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
            />
            <Image
              style={styles.logo}
              source={{
                uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
              }}
            />
          </View>
        );
      }
      
      export default DisplayAnImage;`
    },
    {
      "id":4,
      "name":"Functional Component Example:",
      "link":"https://snack.expo.dev/Um6pch3qf",
      "content":`        import React from "react";
      import { SafeAreaView, StyleSheet, TextInput } from "react-native";
      
      const UselessTextInput = () => {
        const [text, onChangeText] = React.useState("Useless Text");
        const [number, onChangeNumber] = React.useState(null);
      
        return (
          <SafeAreaView>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="useless placeholder"
              keyboardType="numeric"
            />
          </SafeAreaView>
        );
      };
      
      const styles = StyleSheet.create({
        input: {
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
        },
      });
      
      export default UselessTextInput;`
    },
    {
      "id":5,
      "name":"Functional Component Example:",
      "link":"https://snack.expo.dev/@ramajeyam/view-function-component-example",
      "content":`        import React from "react";
        import { View, Text } from "react-native";
        
        const ViewBoxesWithColorAndText = () => {
          return (
            <View
              style={{
                flexDirection: "row",
                height: 100,
                padding: 20
              }}
            >
              <View style={{ backgroundColor: "blue", flex: 0.3 }} />
              <View style={{ backgroundColor: "red", flex: 0.5 }} />
              <Text>Hello World!</Text>
            </View>
          );
        };
        
        export default ViewBoxesWithColorAndText;`
    },
    {
      "id":6,
      "name":"Functional Component Example:",
      "link":"https://snack.expo.dev/@ramajeyam/view-function-component-example",
      "content":`        import React from "react";
        import { View, Text } from "react-native";
        
        const ViewBoxesWithColorAndText = () => {
          return (
            <View
              style={{
                flexDirection: "row",
                height: 100,
                padding: 20
              }}
            >
              <View style={{ backgroundColor: "blue", flex: 0.3 }} />
              <View style={{ backgroundColor: "red", flex: 0.5 }} />
              <Text>Hello World!</Text>
            </View>
          );
        };
        
        export default ViewBoxesWithColorAndText;`
    },
]