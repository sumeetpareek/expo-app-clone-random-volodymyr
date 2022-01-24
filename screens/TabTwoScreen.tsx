import * as React from "react";
import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

import { Button, ThemeProvider } from "react-native-elements";

export default function TabTwoScreen() {
  const [randNum, setRandNum] = React.useState<number>(0);
  const [showYes, setShowYes] = React.useState<boolean>(true);

  const showYesOrNo = () => {
    let min = 0;
    let max = 1000;
    let rand = Math.floor(min + Math.random() * (max - min));
    if (rand % 2) {
      setShowYes(false);
    } else {
      setShowYes(true);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.outputContainer}>
        {showYes && <Text style={styles.bigOutput}>YES</Text>}
        {!showYes && <Text style={styles.bigOutput}>NO</Text>}
      </View>
      <View style={styles.controlsContainer}>
        <Button
          title="YES or NO"
          onPress={showYesOrNo}
          buttonStyle={styles.button}
          containerStyle={{ margin: 0 }}
          titleStyle={{
            color: "black",
            marginHorizontal: 20,
            fontWeight: "bold",
          }}
        />
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
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
  },
  controlsContainer: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  bigOutput: {
    fontSize: 60,
    fontWeight: "bold",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 10,
    height: 4,
    width: "80%",
  },
  button: { backgroundColor: "rgba(255, 193, 7, 1)", width: "100%" },
});
