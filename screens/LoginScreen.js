import { View, StyleSheet, Image } from "react-native";
import { useTheme } from "@react-navigation/native";

const logo = require("../assets/logo.png");

import { Form } from "../components/Screens/LoginScreen/Form";
import { Title } from "../components/Title";

const TITLE_TEXT = "Login";

export const LoginScreen = ({ navigation }) => {
  const theme = useTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.image} resizeMode="contain" />
      <Title text={TITLE_TEXT} style={styles.title} />
      <Form navigation={navigation} />
    </View>
  );
};

const makeStyles = ({ colors }) =>
  StyleSheet.create({
    container: {
      alignItems: "center",
      paddingTop: 70,
    },
    image: {
      height: 160,
      width: 170,
    },
    title: {
      fontSize: 30,
      fontWeight: "bold",
      textTransform: "uppercase",
      textAlign: "center",
      paddingVertical: 40,
      color: colors.text,
    },
  });
