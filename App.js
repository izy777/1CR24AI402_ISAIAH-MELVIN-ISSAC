import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.hello}>Hello, World! </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ca4f4fff",
  },
  hello: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
  },
});
