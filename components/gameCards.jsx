import { useEffect, useRef } from "react";
import { StyleSheet, Text, View, Image, Animated } from "react-native";

export default function GameCards({ game }) {
  return (
    <View key={game.id} style={styles.card}>
      <Image
        source={{ uri: game.image }}
        style={{
          width: 107,
          height: 147,
          borderRadius: 10,
        }}
      />
      <Text style={{ color: "#fff", fontSize: 18 }}>{game.title}</Text>
      <Text style={{ color: "#fff", fontSize: 14 }}>{game.description}</Text>
      <Text style={{ color: "#fff", fontSize: 12 }}>
        {`Release date: ${new Date(game.releaseDate).toLocaleDateString()}`}
      </Text>
    </View>
  );
}

// Este componente envuelve a GameCards y le añade una animación de aparición con un retraso basado en su índice para crear un efecto de cascada
export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      delay: index * 250,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <GameCards game={game} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 30,
    alignItems: "center",
  },
});
