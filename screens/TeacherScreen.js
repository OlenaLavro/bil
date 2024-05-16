import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";

import { Filters } from "../components/Screens/TeacherScreen/Filters";
import { StudentGradeList } from "../components/Lists/StudentGradeList";

import { getGroups } from "../api/firebase";

import { MATHEMATICS_ID } from "../constants";

export const TeacherScreen = ({ navigation }) => {
  const theme = useTheme();
  const styles = makeStyles(theme);

  const [studentGroups, setStudentsGroups] = useState([]);

  const [subjectFilter, setSubjectFilter] = useState(MATHEMATICS_ID);
  const [groupFilter, setGroupFilter] = useState(null);

  const setStudentGrade = (students, studentId, grade) =>
    students.map((student) =>
      student.uid === studentId
        ? {
            ...student,
            subjects: student.subjects.map((subject) =>
              subject.id === subjectFilter
                ? { ...subject, grade }
                : { ...subject }
            ),
          }
        : { ...student }
    );

  const handleEditGrade = (studentId, grade) => {
    setStudentsGroups((prevStudentsGroup) =>
      prevStudentsGroup.map((group) =>
        group.groupId === groupFilter
          ? {
              ...group,
              students: setStudentGrade(group.students, studentId, grade),
            }
          : { ...group }
      )
    );
  };

  useEffect(() => {
    getGroups().then((studentsData) => {
      setStudentsGroups(studentsData);
      setGroupFilter(studentsData[0].groupId);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Filters
        groups={studentGroups}
        subjectFilter={subjectFilter}
        setSubjectFilter={setSubjectFilter}
        groupFilter={groupFilter}
        setGroupFilter={setGroupFilter}
      />
      <StudentGradeList
        navigation={navigation}
        studentGroups={studentGroups}
        subjectFilter={subjectFilter}
        groupFilter={groupFilter}
        onEditGrade={handleEditGrade}
      />
    </View>
  );
};

const makeStyles = ({ colors }) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.primary,
      flex: 1,
      padding: 16,
    },
    filtersContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "flex-start",
    },
    filter: {
      width: "50%",
    },
  });
