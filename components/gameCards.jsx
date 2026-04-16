import { useEffect, useRef } from "react";
import { StyleSheet, Text, View, Image, Animated } from "react-native";

function getScoreColor(score) {
  if (score >= 20) return "#22c55e";
  if (score >= 10) return "#eab308";
  return "#f97316";
}

export default function GameCards({ game }) {
  const scoreColor = getScoreColor(game.score);

  return (
    <View key={game.id} style={styles.card}>
      <Image source={{ uri: game.image }} style={styles.poster} />

      <View style={styles.content}>
        <View style={styles.topRow}>
          <Text style={styles.title} numberOfLines={2}>
            {game.title}
          </Text>
          <View style={[styles.scoreBadge, { backgroundColor: scoreColor }]}>
            <Text style={styles.scoreText}>{game.score}</Text>
          </View>
        </View>

        <Text style={styles.description} numberOfLines={2}>
          {game.description}
        </Text>

        <View style={styles.metaRow}>
          <Text style={styles.metaLabel}>Release</Text>
          <Text style={styles.metaValue}>
            {new Date(game.releaseDate).toLocaleDateString()}
          </Text>
        </View>
      </View>
    </View>
  );
}

export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(16)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        delay: index * 120,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 500,
        delay: index * 120,
        useNativeDriver: true,
      }),
    ]).start();
  }, [index, opacity, translateY]);

  return (
    <Animated.View style={{ opacity, transform: [{ translateY }] }}>
      <GameCards game={game} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
    borderRadius: 18,
    padding: 12,
    backgroundColor: "#111827",
    borderWidth: 1,
    borderColor: "#1f2937",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  poster: {
    width: 92,
    height: 128,
    borderRadius: 14,
    marginRight: 12,
    backgroundColor: "#1e293b",
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
    minHeight: 128,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 10,
  },
  title: {
    flex: 1,
    color: "#f8fafc",
    fontSize: 17,
    fontWeight: "800",
    lineHeight: 22,
  },
  scoreBadge: {
    minWidth: 38,
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
  },
  scoreText: {
    color: "#081018",
    fontWeight: "900",
    fontSize: 12,
  },
  description: {
    color: "#cbd5e1",
    fontSize: 13,
    lineHeight: 18,
    marginTop: 8,
    marginBottom: 12,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#1f2937",
  },
  metaLabel: {
    color: "#94a3b8",
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.4,
  },
  metaValue: {
    color: "#e2e8f0",
    fontSize: 12,
    fontWeight: "600",
  },
});
