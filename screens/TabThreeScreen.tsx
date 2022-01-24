import * as React from "react";

import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

import { Button, ThemeProvider } from "react-native-elements";

export default function TabThreeScreen() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.outputContainer}>
        <View style={styles.diceFace}>
          <Text>1</Text>
        </View>
        <View style={styles.diceFace}>
          <Text>2</Text>
        </View>
        <View style={styles.diceFace}>
          <Text>3</Text>
        </View>
        <View style={styles.diceFace}>
          <Text>4</Text>
        </View>
        <View style={styles.diceFace}>
          <Text>5</Text>
        </View>
        <View style={styles.diceFace}>
          <Text>6</Text>
        </View>
      </View>
      <View style={styles.controlsContainer}>
        <Button
          title="ROLL THE DICE"
          onPress={() => {
            alert("hey");
          }}
          buttonStyle={styles.button}
          containerStyle={{ margin: 0 }}
          titleStyle={{
            color: "#fff",
            marginHorizontal: 20,
            fontWeight: "bold",
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 10,
  },
  outputContainer: {
    flex: 4,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    flexWrap: "wrap",
    width: "100%",
  },
  controlsContainer: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  diceFace: {
    width: "26%",
    height: 100,
    margin: 4,
    backgroundColor: "rgba(214, 61, 57, 1)",
  },
  button: { backgroundColor: "rgba(214, 61, 57, 1)", width: "100%" },
});
