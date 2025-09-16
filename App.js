import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function App() {
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      question: "Who developed the theory of relativity?",
      options: ["Newton", "Einstein", "Galileo", "Tesla"],
      answer: "Einstein",
    },
    {
      question: "Which is the largest mammal?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Shark"],
      answer: "Blue Whale",
    },
    {
      question: "What is the boiling point of water?",
      options: ["50°C", "100°C", "150°C", "200°C"],
      answer: "100°C",
    },
    {
      question: "Which is the smallest prime number?",
      options: ["0", "1", "2", "3"],
      answer: "2",
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Van Gogh", "Leonardo da Vinci", "Picasso", "Rembrandt"],
      answer: "Leonardo da Vinci",
    },
    {
      question: "Which gas do humans need to breathe?",
      options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
      answer: "Oxygen",
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["China", "Japan", "Thailand", "India"],
      answer: "Japan",
    },
    {
      question: "What is the chemical symbol for Gold?",
      options: ["G", "Au", "Ag", "Go"],
      answer: "Au",
    },
  ];

  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[currentQ].answer) {
      setScore(score + 1);
    }
    const nextQ = currentQ + 1;
    if (nextQ < questions.length) {
      setCurrentQ(nextQ);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQ(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <View style={styles.container}>
      {showScore ? (
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreText}>
            🎉 You scored {score} out of {questions.length}
          </Text>
          <TouchableOpacity style={styles.restartButton} onPress={restartQuiz}>
            <Text style={styles.restartText}>Restart Quiz</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.quizContainer}>
          <Text style={styles.question}>
            Q{currentQ + 1}. {questions[currentQ].question}
          </Text>
          {questions[currentQ].options.map((option, i) => (
            <TouchableOpacity
              key={i}
              style={styles.optionButton}
              onPress={() => handleAnswer(option)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20, backgroundColor: "#fff" },
  quizContainer: { marginBottom: 30 },
  question: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  optionButton: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 8,
    marginVertical: 8,
  },
  optionText: { fontSize: 18, color: "#fff", textAlign: "center" },
  scoreContainer: { alignItems: "center" },
  scoreText: { fontSize: 24, fontWeight: "bold", color: "#333", marginBottom: 20 },
  restartButton: {
    backgroundColor: "#2196F3",
    padding: 12,
    borderRadius: 8,
  },
  restartText: { fontSize: 18, color: "#fff", fontWeight: "bold" },
});
