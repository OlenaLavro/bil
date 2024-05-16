import { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useTheme } from "@react-navigation/native";

import { StudentInfo } from "../components/Screens/StudentProfileScreen/StudentInfo";

import { getStudentByUid } from "../api/firebase";

const SECTION_TITLE = "Subjects";

export const StudentProfileScreen = ({ route }) => {
  const theme = useTheme();
  const styles = makeStyles(theme);

  const [student, setStudent] = useState(null);

  useEffect(() => {
    const userUid = route.params?.userUid;

    if (userUid) {
      getStudentByUid(userUid).then((userData) => setStudent(userData));
    }
  }, []);

  return (
    <View style={styles.container}>
      <StudentInfo student={student} />

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>{SECTION_TITLE}</Text>
        </View>
      </View>
    </View>
  );
};

const makeStyles = ({ colors }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
    section: {
      paddingHorizontal: 16,
      marginVertical: 5,
    },
    sectionHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    },
    sectionTitle: {
      fontSize: 18,
    },
    sectionBody: {
      marginTop: 10,
    },
  });
