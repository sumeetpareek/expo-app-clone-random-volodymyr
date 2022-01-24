import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

import { Button, ThemeProvider } from "react-native-elements";

import { ScrollView } from "react-native";
import { ButtonGroup, withTheme } from "react-native-elements";

export default function TabFourScreen({
  navigation,
}: RootTabScreenProps<"TabFour">) {
  return (
    <ThemeProvider>
      <View style={styles.contentView}>
        {/* <Text>
          TODO .. Add fields for MIN and MAX values. Show random numbers only
          within those bounds.
        </Text> */}
        <View style={{ alignItems: "center" }}>
          <View style={styles.buttonsContainer}>
            <Button
              title={"React Native Elements"}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
            />
            <Button
              title="Basic Button"
              buttonStyle={{
                backgroundColor: "rgba(78, 116, 289, 1)",
                borderRadius: 3,
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
            />
            <Button
              title="Dark"
              buttonStyle={{ backgroundColor: "rgba(39, 39, 39, 1)" }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              titleStyle={{ color: "white", marginHorizontal: 20 }}
            />

            <Button
              title="Log in"
              loading={false}
              loadingProps={{ size: "small", color: "white" }}
              buttonStyle={{
                backgroundColor: "rgba(111, 202, 186, 1)",
                borderRadius: 5,
              }}
              titleStyle={{ fontWeight: "bold", fontSize: 23 }}
              containerStyle={{
                marginHorizontal: 50,
                height: 50,
                width: 200,
                marginVertical: 10,
              }}
              onPress={() => console.log("aye")}
            />
            <Button
              title="Secondary"
              buttonStyle={{ backgroundColor: "rgba(127, 220, 103, 1)" }}
              containerStyle={{
                height: 40,
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              titleStyle={{
                color: "white",
                marginHorizontal: 20,
              }}
            />
            <Button
              title="Warning"
              containerStyle={{
                height: 40,
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              buttonStyle={{ backgroundColor: "rgba(255, 193, 7, 1)" }}
              titleStyle={{
                color: "white",
                marginHorizontal: 20,
              }}
            />
            <Button
              title="Danger"
              buttonStyle={{ backgroundColor: "rgba(214, 61, 57, 1)" }}
              containerStyle={{
                height: 40,
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              titleStyle={{ color: "white", marginHorizontal: 20 }}
            />
            <Button
              title="Request an agent"
              titleStyle={{ fontWeight: "500" }}
              buttonStyle={{
                backgroundColor: "rgba(199, 43, 98, 1)",
                borderColor: "transparent",
                borderWidth: 0,
              }}
              containerStyle={{
                width: 200,
                height: 45,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
            />
          </View>

          <View style={styles.buttonsContainer}>
            <Button
              title="LOG IN"
              buttonStyle={{
                backgroundColor: "black",
                borderWidth: 2,
                borderColor: "white",
                borderRadius: 30,
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              titleStyle={{ fontWeight: "bold" }}
            />
            <Button
              title="HOME"
              icon={{
                name: "home",
                type: "font-awesome",
                size: 15,
                color: "white",
              }}
              iconContainerStyle={{ marginRight: 10 }}
              titleStyle={{ fontWeight: "700" }}
              buttonStyle={{
                backgroundColor: "rgba(90, 154, 230, 1)",
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 30,
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
            />
            <Button
              title="PROFILE"
              icon={{
                name: "user",
                type: "font-awesome",
                size: 15,
                color: "white",
              }}
              iconRight
              iconContainerStyle={{ marginLeft: 10 }}
              titleStyle={{ fontWeight: "700" }}
              buttonStyle={{
                backgroundColor: "rgba(199, 43, 98, 1)",
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 30,
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
            />
          </View>

          <View style={styles.buttonsContainer}>
            <Button
              title="SIGN UP"
              disabled={true}
              titleStyle={{ fontWeight: "700" }}
              buttonStyle={{
                backgroundColor: "rgba(92, 99,216, 1)",
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 5,
              }}
              containerStyle={{
                width: 200,
                height: 45,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
            />
            <Button
              title="Outline Button"
              buttonStyle={{
                borderColor: "rgba(78, 116, 289, 1)",
              }}
              type="outline"
              titleStyle={{ color: "rgba(78, 116, 289, 1)" }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
            />
            <Button
              title="Raised Button"
              buttonStyle={{
                borderColor: "rgba(78, 116, 289, 1)",
              }}
              type="outline"
              raised
              titleStyle={{ color: "rgba(78, 116, 289, 1)" }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
            />
            <Button
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              title="Clear Button"
              type="clear"
              titleStyle={{ color: "rgba(78, 116, 289, 1)" }}
            />
            <Button
              title="Light"
              buttonStyle={{
                backgroundColor: "rgba(244, 244, 244, 1)",
                borderRadius: 3,
              }}
              containerStyle={{
                height: 40,
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              titleStyle={{ marginHorizontal: 20, color: "black" }}
            />
          </View>

          <View style={styles.buttonsContainer}>
            <Button
              title="HOME"
              loading
              titleStyle={{ fontWeight: "700" }}
              buttonStyle={{
                backgroundColor: "rgba(111, 202, 186, 1)",
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 5,
                paddingVertical: 5,
              }}
              containerStyle={{
                width: 200,
                height: 40,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
            />
            <Button
              title="SIGN UP"
              loading={true}
              loadingProps={{
                size: "small",
                color: "rgba(111, 202, 186, 1)",
              }}
              titleStyle={{ fontWeight: "700" }}
              buttonStyle={{
                backgroundColor: "rgba(92, 99,216, 1)",
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 5,
                paddingVertical: 10,
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
            />
          </View>
        </View>
      </View>
    </ThemeProvider>

    // <View style={styles.container}>
    //   <Text style={styles.title}>Random Number TODO</Text>
    //   <View
    //     style={styles.separator}
    //     lightColor="#eee"
    //     darkColor="rgba(255,255,255,0.1)"
    //   />
    //   {/* <EditScreenInfo path="/screens/TabFourScreen.tsx" /> */}
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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: "80%",
//   },
// });

const styles = StyleSheet.create({
  contentView: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginVertical: 20,
  },
});
