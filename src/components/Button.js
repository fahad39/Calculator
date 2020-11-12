import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

function Button(props) {
  const isOperator = (val) => {
    if (!isNaN(val) || val === "." || val === "=") {
      return true;
    } else {
      return false;
    }
  };

  return (
    <TouchableOpacity
      onPress={() => props.handleClick(props.children)}
      style={
        isOperator(props.children) ? styles.buttonWrapper : styles.operator
      }
    >
      <View>
        <Text style={styles.content}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonWrapper: {
    flex: 1,
    backgroundColor: "#f5f5f7",

    borderWidth: 1,

    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  operator: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: "#fe9241",
    color: "white",

    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  content: {
    fontSize: 32,
  },
});

export default Button;
