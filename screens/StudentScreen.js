import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";

import { SubjectGradeList } from "../components/Lists/SubjectGradeList";
import { Title } from "../components/Title";

import { getStudentByUid } from "../api/firebase";

import { store } from "../store";

const TITLE_TEXT = "Hello";

export const StudentScreen = () => {
  const theme = useTheme();
  const styles = makeStyles(theme);

  const { getState } = store;
  const { uid, name } = getState();

  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    getStudentByUid(uid).then((studentData) =>
      setSubjects(studentData?.subject)
    );
  }, []);

  return (
    <View style={styles.container}>
      <Title text={`${TITLE_TEXT}, ${name}`} />

      <SubjectGradeList subjects={subjects} />
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
