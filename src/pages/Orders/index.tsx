import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Card } from "./components/Card";

function Orders({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Card navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});

export { Orders };
