import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Alert,
  ImageBackground,
  Text
} from "react-native";

export const RegistrationScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");
  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);
  const loginHandler = (text) => setLogin(text);
  const onLogin = () => {
    Alert.alert("Credentials", `${email} + ${password}`);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground source={require('../images/Photo_BG.png')} style={styles.backgroundBox}>
        <View style={styles.formBox}>
            <Text style={styles.formTitle}>Реєстрація</Text>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <TextInput
            style={styles.input}
            placeholder="Логін"
            value={login}
            onChangeText={loginHandler}
          />
          <TextInput
            style={styles.input}
            placeholder="Адреса електронної пошти"
            value={email}
            onChangeText={emailHandler}
          />
          <TextInput
            style={styles.input}
            placeholder="Пароль"
            value={password}
            onChangeText={passwordHandler}
          />
            <TouchableOpacity style={styles.buttonBox} onPress={onLogin}>
                <Text style={styles.buttonText}>Зареєструватися</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
        </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundBox: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  formBox: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopEndRadius: 25,
    borderTopLeftRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  formTitle: {
    fontStyle: 'normal',
    fontSize: 30,
    fontWeight: '500',
    color: '#212121',
    marginBottom: 33,
    marginTop: 92,
  },
  input: {
    width: 343,
    height: 50,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
    marginBottom: 16,
  },
  buttonBox: {
    backgroundColor: '#FF6C00',
    borderRadius: 100,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontStyle: 'normal',
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '400',
  },
});
