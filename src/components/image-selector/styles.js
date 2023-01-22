import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/themes/colors";

import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    width: "90%",
  },
  box: {
    flex: 1,
    marginBottom: 20,
  },
  preview: {
    width: "100%",
    height: "80%",
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    borderColor: COLORS.success,
    borderWidth: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});