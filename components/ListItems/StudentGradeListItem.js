import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { ROUTES } from "../../constants";

export const StudentGradeListItem = ({ student, onEditGrade, navigation }) => {
  const theme = useTheme();
  const styles = makeStyles(theme);

  const { name, grade: initialGrade, uid } = student;

  const [grade, setGrade] = useState(initialGrade);

  const handleNavigateToUserProfile = () =>
    navigation.navigate(ROUTES.STUDENT_PROFILE, { userUid: uid });

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.gradeContainer}>
        <TextInput
          style={styles.grade}
          value={grade.toString()}
          onChangeText={(text) => {
            setGrade(text);
            onEditGrade(uid, Number(text));
          }}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.moreContainer}>
        <TouchableOpacity onPress={handleNavigateToUserProfile}>
          <AntDesign name="rightcircleo" size={24} color={theme.colors.black} />
        </TouchableOpacity>
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
    comment: {
      fontSize: 14,
      color: colors.text,
      marginBottom: 4,
    },
    gradeContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    grade: {
      fontSize: 18,
      fontWeight: "bold",
      height: 30,
      paddingLeft: 10,
      paddingRight: 5,
      borderRadius: 6,
      backgroundColor: colors.secondary,
      display: "flex",
      justifyContent: "center",
    },
    moreContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginLeft: 16,
    },
  });
