import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { useTheme } from "@react-navigation/native";

import { store } from "../../../store";

import {
  getStudentByUid,
  logInWithEmailAndPassword,
} from "../../../api/firebase";

import { ROLE_ROUTE_MAP } from "../../../constants";

const EMAIL_PLACEHOLDER = "Email";
const PASSWORD_PLACEHOLDER = "Password";
const LOGIN_TITLE = "Login";

export const Form = ({ navigation }) => {
  const theme = useTheme();
  const styles = makeStyles(theme);

  const { dispatch } = store;

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSaveUser = (userUid) => {
    getStudentByUid(userUid).then((userData) => {
      const { name, role, uid } = userData;
      dispatch({ type: "SIGN_IN", payload: { name, role, uid } });
      navigation.navigate(ROLE_ROUTE_MAP[role], { userUid: uid });
    });
  };

  const handleLogin = () => {
    logInWithEmailAndPassword(email, password)
      .then((response) => {
        handleSaveUser(response.user.uid);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          placeholder={EMAIL_PLACEHOLDER}
          value={email}
          onChangeText={setEmail}
          autoCorrect={false}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder={PASSWORD_PLACEHOLDER}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          autoCorrect={false}
          autoCapitalize="none"
        />
      </View>
      <View style={styles.buttonView}>
        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>{LOGIN_TITLE}</Text>
        </Pressable>
      </View>
    </>
  );
};

const makeStyles = ({ colors }) =>
  StyleSheet.create({
    inputView: {
      gap: 15,
      width: "100%",
      paddingHorizontal: 40,
      marginBottom: 5,
    },
    input: {
      height: 50,
      paddingHorizontal: 20,
      borderColor: colors.text,
      borderWidth: 1,
      borderRadius: 7,
    },
    button: {
      backgroundColor: colors.primary,
      height: 45,
      borderWidth: 1,
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
    },
    buttonText: {
      fontSize: 18,
      fontWeight: "bold",
    },
    buttonView: {
      width: "50%",
      marginTop: 40,
    },
  });
