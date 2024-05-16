import { useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { SUBJECTS, SUBJECT_ID_MAP } from "../../../constants";

export const Filters = ({
  groups,
  subjectFilter,
  setGroupFilter,
  setSubjectFilter,
  groupFilter,
}) => {
  const styles = makeStyles();

  const [isSubjectFilterOpen, setIsSubjectFilterOpen] = useState(false);
  const subjectFilterOptions = [
    {
      label: SUBJECTS.MATHEMATICS,
      value: SUBJECT_ID_MAP[SUBJECTS.MATHEMATICS],
    },
    {
      label: SUBJECTS.BIOLOGY,
      value: SUBJECT_ID_MAP[SUBJECTS.BIOLOGY],
    },
  ];

  const [isGroupFilterOpen, setIsGroupFilterOpen] = useState(false);
  const groupFilterOptions = groups.map(({ groupId }) => ({
    label: groupId,
    value: groupId,
  }));

  return (
    <View style={styles.filtersContainer}>
      <View style={styles.filter}>
        <DropDownPicker
          open={isGroupFilterOpen}
          value={groupFilter}
          items={groupFilterOptions}
          setOpen={setIsGroupFilterOpen}
          setValue={setGroupFilter}
          placeholder={"Choose a group"}
        />
      </View>
      <View style={styles.filter}>
        <DropDownPicker
          open={isSubjectFilterOpen}
          value={subjectFilter}
          items={subjectFilterOptions}
          setOpen={setIsSubjectFilterOpen}
          setValue={setSubjectFilter}
          placeholder={"Choose a subject"}
        />
      </View>
    </View>
  );
};

const makeStyles = () =>
  StyleSheet.create({
    filtersContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "flex-start",
    },
    filter: {
      width: "50%",
    },
  });
