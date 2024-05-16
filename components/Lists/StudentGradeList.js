import { useTheme } from "@react-navigation/native";
import { View, StyleSheet, Pressable, FlatList, Text } from "react-native";

import { StudentGradeListItem } from "../ListItems/StudentGradeListItem";

const SAVE_BUTTON_TITLE = "Save";

export const StudentGradeList = ({
  studentGroups,
  subjectFilter,
  groupFilter,
  onEditGrade,
  navigation,
}) => {
  const theme = useTheme();
  const styles = makeStyles(theme);

  const filteredStudents = studentGroups
    .find((group) => group.groupId === groupFilter)
    ?.students.map((student) => ({
      name: student.name,
      uid: student.uid,
      grade: student.subjects?.find((subject) => subject.id === subjectFilter)
        ?.grade,
    }));

  return (
    <>
      <View style={styles.studentList}>
        <FlatList
          data={filteredStudents}
          renderItem={({ item }) => (
            <StudentGradeListItem
              student={item}
              onEditGrade={onEditGrade}
              navigation={navigation}
            />
          )}
          keyExtractor={(item) =>
            item.uid?.toString() + groupFilter + subjectFilter
          }
        />
        <View></View>
      </View>
      <View style={styles.saveContainer}>
        <Pressable style={styles.saveButton}>
          <Text style={styles.buttonText}>{SAVE_BUTTON_TITLE}</Text>
        </Pressable>
      </View>
    </>
  );
};

const makeStyles = ({ colors }) =>
  StyleSheet.create({
    studentList: {
      flex: 1,
      paddingTop: 16,
    },
    saveContainer: { marginTop: "auto" },
    saveButton: {
      backgroundColor: colors.secondary,
      height: 45,
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
    },
    buttonText: {
      color: colors.white,
      fontSize: 18,
      fontWeight: "bold",
      textTransform: "uppercase",
    },
  });
