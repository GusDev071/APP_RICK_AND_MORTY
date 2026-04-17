import { useEffect, useState } from "react";
import { Link } from "expo-router";
import { View, FlatList, ActivityIndicator, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getLatestGames } from "../lib/metacritic";
import { AnimatedGameCard } from "./gameCards";
import AppLogo from "./logo";
import { InfoCircleIcon } from "./icons";

export default function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <AppLogo width={200} height={80} />
      </View>
      <Link asChild href="/about">
        <Pressable className="absolute top-16 right-4 p-2 rounded-full bg-gray-700">
          <InfoCircleIcon />
        </Pressable>
      </Link>
      {games.length === 0 ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <FlatList //Es importante usar FlatList para listas largas, ya que optimiza el rendimiento renderizando solo los elementos visibles
          data={games}
          renderItem={({ item, index }) => (
            <AnimatedGameCard key={item.id} game={item} index={index} />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
}
