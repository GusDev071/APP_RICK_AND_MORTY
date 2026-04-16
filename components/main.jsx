import { useEffect, useState } from "react";
import {
  View,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Text,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getLatestGames } from "../lib/metacritic";
import { AnimatedGameCard } from "./gameCards";
import AppLogo from "./logo";

export default function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <View
      style={[
        styles.screen,
        { paddingTop: insets.top + 12, paddingBottom: insets.bottom },
      ]}
    >
      <View style={styles.headerCard}>
        <View style={styles.logoWrap}>
          <AppLogo width={190} height={74} />
        </View>
        <Text style={styles.title}>Discover standout characters</Text>
        <Text style={styles.subtitle}>
          A polished catalog view with ratings, release info, and smooth entry
          animations.
        </Text>
      </View>

      {games.length === 0 ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#bfde42" />
          <Text style={styles.loaderText}>Loading the latest entries...</Text>
        </View>
      ) : (
        <FlatList
          data={games}
          renderItem={({ item, index }) => (
            <AnimatedGameCard key={item.id} game={item} index={index} />
          )}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          ListHeaderComponent={
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Top picks</Text>
              <Text style={styles.sectionCaption}>
                Clean layout, same functionality.
              </Text>
            </View>
          }
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#0b1020",
  },
  headerCard: {
    marginBottom: 16,
    paddingHorizontal: 16,
    paddingVertical: 18,
    borderRadius: 24,
    backgroundColor: "#11182d",
    borderWidth: 1,
    borderColor: "#1f2a44",
  },
  logoWrap: {
    alignItems: "center",
    marginBottom: 8,
  },
  title: {
    color: "#f8fafc",
    fontSize: 22,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 6,
  },
  subtitle: {
    color: "#94a3b8",
    fontSize: 13,
    textAlign: "center",
    lineHeight: 18,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  loaderText: {
    color: "#cbd5e1",
    fontSize: 14,
  },
  listContent: {
    paddingBottom: 24,
  },
  sectionHeader: {
    marginBottom: 12,
    paddingHorizontal: 4,
  },
  sectionTitle: {
    color: "#f8fafc",
    fontSize: 18,
    fontWeight: "700",
  },
  sectionCaption: {
    color: "#7c8ba1",
    fontSize: 12,
    marginTop: 2,
  },
});
