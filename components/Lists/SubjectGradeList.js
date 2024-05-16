import { StyleSheet, FlatList } from "react-native";

import { SubjectGradeListItem } from "../ListItems/SubjectGradeListItem";

export const SubjectGradeList = ({ subjects }) => {
  const styles = makeStyles();

  return (
    <FlatList
      data={subjects}
      style={styles.subjectList}
      renderItem={({ item }) => <SubjectGradeListItem subject={item} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const makeStyles = () =>
  StyleSheet.create({
    subjectList: {
      flex: 1,
      paddingTop: 16,
    },
  });
