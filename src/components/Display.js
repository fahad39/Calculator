import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Display(props) {
  return (
    <View>
      <Text style={styles.content}>{props.input}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    fontSize: 34,
  },
});

export default Display;
