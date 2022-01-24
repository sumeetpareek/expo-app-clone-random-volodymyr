import * as React from "react";

import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

import { Button, ThemeProvider } from "react-native-elements";

import { ScrollView } from "react-native";
import { ButtonGroup, withTheme } from "react-native-elements";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const [count, setCount] = React.useState<number>(0);

  const showRandomNumber = () => {
    let min = 0;
    let max = 1000;
    let rand = Math.floor(min + Math.random() * (max - min));
    setCount(rand);
  };

  return (
    <ThemeProvider>
      <View style={styles.mainContainer}>
        <View style={styles.outputContainer}>
          <Text style={styles.bigOutput}>{count}</Text>
        </View>
        <View style={styles.controlsContainer}>
          <Button
            title="NEW RANDOM NUMBER"
            onPress={showRandomNumber}
            buttonStyle={styles.button}
            containerStyle={{ margin: 0 }}
            titleStyle={{
              color: "white",
              textAlign: "center",
              fontWeight: "bold",
            }}
          />
          <View
            style={styles.separator}
            lightColor="#eee"
            darkColor="rgba(255,255,255,0.1)"
          />
        </View>

        {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
      </View>
    </ThemeProvider>
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
  button: { backgroundColor: "rgba(214, 61, 57, 1)" },
});
