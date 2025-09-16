import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Layout() {
  const [input, setInput] = useState("");

  const handlePress = (value: string) => {
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      try {
        setInput(eval(input).toString()); // ⚠ only for demo
      } catch {
        setInput("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  const renderButton = (label: string, style = {}) => (
    <TouchableOpacity
      key={label}
      style={[styles.button, style]}
      onPress={() => handlePress(label)}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Display */}
      <View style={styles.display}>
        <Text style={styles.displayText}>{input || "0"}</Text>
      </View>

      {/* Buttons */}
      <View style={styles.row}>
        {renderButton("C", styles.grayButton)}
        {renderButton("+/-", styles.grayButton)}
        {renderButton("%", styles.grayButton)}
        {renderButton("/", styles.orangeButton)}
      </View>
      <View style={styles.row}>
        {renderButton("7")}
        {renderButton("8")}
        {renderButton("9")}
        {renderButton("*", styles.orangeButton)}
      </View>
      <View style={styles.row}>
        {renderButton("4")}
        {renderButton("5")}
        {renderButton("6")}
        {renderButton("-", styles.orangeButton)}
      </View>
      <View style={styles.row}>
        {renderButton("1")}
        {renderButton("2")}
        {renderButton("3")}
        {renderButton("+", styles.orangeButton)}
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.button, styles.zeroButton]}
          onPress={() => handlePress("0")}
        >
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        {renderButton(".")}
        {renderButton("=", styles.orangeButton)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "black", justifyContent: "flex-end" },
  display: {
    padding: 20,
    alignItems: "flex-end",
  },
  displayText: { fontSize: 64, color: "white", fontWeight: "300" },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#333333",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  buttonText: { fontSize: 32, color: "white", fontWeight: "500" },
  orangeButton: { backgroundColor: "#FF9500" },
  grayButton: { backgroundColor: "#A5A5A5" },
  zeroButton: {
    width: 170,
    alignItems: "flex-start",
    paddingLeft: 30,
  },
});
