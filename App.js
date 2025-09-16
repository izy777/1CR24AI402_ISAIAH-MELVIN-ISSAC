import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔢 Counter App</Text>

      <Text style={styles.counter}>{count}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}>
          <Text style={styles.buttonText}>➕ Increase</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.decrease]} onPress={() => setCount(count - 1)}>
          <Text style={styles.buttonText}>➖ Decrease</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={[styles.button, styles.reset]} onPress={() => setCount(0)}>
        <Text style={styles.buttonText}>🔄 Reset</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 20 },
  counter: { fontSize: 48, fontWeight: "bold", marginBottom: 30, color: "#333" },
  buttonContainer: { flexDirection: "row", marginBottom: 20 },
  button: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  decrease: { backgroundColor: "#f44336" },
  reset: { backgroundColor: "#2196F3" },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});
