import { View, StyleSheet, Text } from "react-native";
import { useTheme } from "@react-navigation/native";

export const Title = ({ text, style }) => {
  const theme = useTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.titleContainer}>
      <Text style={[styles.title, style]}>{text}</Text>
    </View>
  );
};

const makeStyles = ({ colors }) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.primary,
      flex: 1,
      paddingTop: 16,
    },
    titleContainer: {
      display: "flex",
      justifyContent: "center",
    },
    title: {
      fontSize: 30,
      fontWeight: "bold",
      textAlign: "center",
      color: colors.text,
    },
  });
