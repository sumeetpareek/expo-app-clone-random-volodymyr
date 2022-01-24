import React, { Component } from "react";
import { View } from "react-native";

export default class MyLayout extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          width: 260,
          height: 550,
          justifyContent: "flex-end",
          alignItems: "center",
          padding: 20,
          flexWrap: "wrap",
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            flexBasis: 5,
          }}
        >
          <View
            style={{
              flex: 1,
              width: "100%",
              height: 123,
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            width: "100%",
            height: 123,
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </View>
    );
  }
}
