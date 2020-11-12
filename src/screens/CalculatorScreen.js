import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import * as math from "mathjs";

import Button from "../components/Button";
import Display from "../components/Display";
import ClearButton from "../components/ClearButton";

function CalculatorScreen() {
  const [input, setInput] = useState(() => "");

  const addToInput = (val) => {
    setInput(input + val);
  };

  const handleEquals = () => {
    setInput(math.evaluate(input));
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.Title}>
          <Text
            style={{
              width: "100%",
              height: "100%",
              fontSize: 45,
              color: "white",
            }}
          >
            Calculator
          </Text>
        </View>
        <View style={styles.display}>
          <Display input={input}></Display>
        </View>
        <View style={styles.row}>
          <Button handleClick={addToInput}>7</Button>
          <Button handleClick={addToInput}>8</Button>
          <Button handleClick={addToInput}>9</Button>
          <Button handleClick={addToInput}>/</Button>
        </View>
        <View style={styles.row}>
          <Button handleClick={addToInput}>4</Button>
          <Button handleClick={addToInput}>5</Button>
          <Button handleClick={addToInput}>6</Button>
          <Button handleClick={addToInput}>*</Button>
        </View>
        <View style={styles.row}>
          <Button handleClick={addToInput}>1</Button>
          <Button handleClick={addToInput}>2</Button>
          <Button handleClick={addToInput}>3</Button>
          <Button handleClick={addToInput}>-</Button>
        </View>
        <View style={styles.row}>
          <Button handleClick={addToInput}>.</Button>
          <Button handleClick={addToInput}>0</Button>
          <ClearButton handleClear={() => setInput("")}>C</ClearButton>
          <Button handleClick={addToInput}>+</Button>
        </View>
        <View style={styles.row}>
          <Button handleClick={() => handleEquals()}>=</Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Title: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 2,

    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  display: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 2,
    justifyContent: "flex-end",
  },

  row: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 2,
  },
});

export default CalculatorScreen;
