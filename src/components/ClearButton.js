import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

function ClearButton(props) {
  return (
    <TouchableOpacity onPress={props.handleClear} style={styles.buttonWrapper}>
      <View>
        <Text style={styles.content}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonWrapper: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: "#f5f5f7",

    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  content: {
    fontSize: 32,
  },
});
export default ClearButton;
