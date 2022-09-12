import * as React from "react";
import { Text, StyleSheet, Pressable } from "react-native";

export default function Button(props: any) {
  const { onPress, title = "Save", color } = props;
  return (
    <Pressable
      style={{ ...styles.button, backgroundColor: color ? color : "" }}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "green",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
