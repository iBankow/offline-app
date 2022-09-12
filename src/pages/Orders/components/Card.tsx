import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../../../components/Button";

interface CardProps {
  navigation: any;
}

function Card({ navigation }: CardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.label}>
        <Text style={styles.title}>Cliente:</Text>
        <Text style={styles.text}>Oscorp</Text>
      </View>
      <View style={styles.label}>
        <Text style={styles.title}>Local:</Text>
        <Text style={styles.text}>Sede</Text>
      </View>
      <View style={{ ...styles.label, marginTop: 12 }}>
        <Button title="Atender" onPress={() => navigation.navigate("Order")} />
        <Button
          color="blue"
          title="Baixar"
          onPress={() => navigation.navigate("Order")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    padding: 8,
    backgroundColor: "#c593ff",
    borderRadius: 4,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
  },
  text: {
    fontSize: 24,
    marginLeft: 4,
  },
  label: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
});

export { Card };
