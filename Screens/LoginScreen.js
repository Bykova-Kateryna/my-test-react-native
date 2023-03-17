import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
  Alert
} from "react-native";

export const LoginScreen = () =>  {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);
  const onLogin = () => {
    Alert.alert("Credentials", `${email} + ${password}`);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <TextInput
            style={styles.input}
            placeholder="Type email"
            value={email}
            onChangeText={emailHandler}
          />
          <TextInput
            style={styles.input}
            placeholder="Type password"
            value={password}
            onChangeText={passwordHandler}
          />
          <Button title={"Login"} style={styles.input} onPress={onLogin} />
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 30,
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
  },
});
