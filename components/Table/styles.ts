import {StyleSheet} from "@react-pdf/renderer";

export default StyleSheet.create({
  table: {},
  cell: {
    padding: "5 10",
    textAlign: "left",
    flex: 1,
    borderBottom: "1px solid black",
  },
  row: {
    flexDirection: "row",
    fontSize: 12,
    justifyContent: "center",
  },
});
