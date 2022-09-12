import * as React from "react";
import { Button, Keyboard, StyleSheet, TextInput, View } from "react-native";
import { useAuth } from "../../contexts/AuthContexts";

function Login() {
  const { signIn } = useAuth();

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View style={styles.container} onTouchStart={Keyboard.dismiss}>
      <TextInput
        placeholder="Email"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ ...styles.input, marginTop: 8 }}
      />
      <Button title="Sign in" onPress={() => signIn(username, password)} />
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
  input: {
    borderRadius: 4,
    width: 250,
    padding: 10,
    backgroundColor: "#a8a8a8",
    color: "black",
  },
});

export { Login };
