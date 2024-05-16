import { View, StyleSheet, Image, Text } from "react-native";
import { useTheme } from "@react-navigation/native";

const GROUP_LABEL = "Group";
const EMAIL_LABEL = "Email";

const MOCK_ICON = "https://bootdey.com/img/Content/avatar/avatar1.png";

export const StudentInfo = ({ student }) => {
  const theme = useTheme();
  const styles = makeStyles(theme);

  const { name, email, group } = student || {};

  return (
    <View style={styles.header}>
      <Image style={styles.avatar} source={{ uri: MOCK_ICON }} />
      <View style={styles.informationContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.label}>
          {GROUP_LABEL}: {group}
        </Text>
        <Text style={styles.label}>
          {EMAIL_LABEL}: {email}
        </Text>
      </View>
    </View>
  );
};

const makeStyles = ({ colors }) =>
  StyleSheet.create({
    header: {
      backgroundColor: colors.primary,
      height: 250,
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 16,
    },
    avatar: {
      width: 150,
      height: 150,
      borderRadius: 4,
    },
    informationContainer: {
      width: 150,
      height: 150,
      marginLeft: 20,
    },
    name: {
      fontSize: 22,
      fontWeight: "bold",
      color: colors.white,
    },
    label: {
      fontSize: 12,
      color: colors.white,
      marginTop: 10,
    },
  });
