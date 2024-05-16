import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";

export const SubjectGradeListItem = ({ subject }) => {
  const theme = useTheme();
  const styles = makeStyles(theme);

  const { name, grade } = subject;

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.gradeContainer}>
        <Text style={styles.grade}>{grade}</Text>
      </View>
    </View>
  );
};

const makeStyles = ({ colors }) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: colors.card,
      borderRadius: 8,
      shadowColor: colors.black,
      shadowOpacity: 0.2,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      padding: 16,
      marginBottom: 16,
    },
    info: {
      flex: 1,
      marginRight: 16,
    },
    name: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 4,
    },
    gradeContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    grade: {
      fontSize: 18,
      fontWeight: "bold",
      marginHorizontal: 16,
    },
  });
