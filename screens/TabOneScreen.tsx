import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

import { Button, ThemeProvider } from "react-native-elements";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <ThemeProvider>
      <Button title="Hey!" />
    </ThemeProvider>

    // <View style={styles.container}>
    //   <Text style={styles.title}>Random Number TODO</Text>
    //   <View
    //     style={styles.separator}
    //     lightColor="#eee"
    //     darkColor="rgba(255,255,255,0.1)"
    //   />
    //   {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
    //   <Text>
    //     TODO .. Add button here that displays a new random number between 0 and
    //     100 everytime it is clicked.
    //   </Text>
    //   <View
    //     style={styles.separator}
    //     lightColor="#eee"
    //     darkColor="rgba(255,255,255,0.1)"
    //   />
    //   <Text>
    //     TODO .. Create min and max text fields, update random number button to
    //     show a value between them.
    //   </Text>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
});
