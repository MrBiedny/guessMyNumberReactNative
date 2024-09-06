import { StyleSheet, Text } from "react-native";

import Colors from "../../constants/Colors";

export default function GuideText({ children, style }) {
  return <Text style={[styles.guideText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  guideText: {
    fontFamily: "open-sans",
    color: Colors.accent500,
    fontSize: 24,
  },
});
