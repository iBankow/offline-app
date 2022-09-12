import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

function Order() {
  return (
    <View style={styles.container}>
      <Text>Order Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export { Order };
