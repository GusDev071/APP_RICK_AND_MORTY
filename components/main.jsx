import { useEffect, useState } from "react";
import { Link } from "expo-router";
import { View, FlatList, ActivityIndicator, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getCharacters } from "../lib/rickandmorty";
import { AnimatedGameCard } from "./CharacterCards";
import AppLogo from "./logo";
import { InfoCircleIcon } from "./icons";
import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

export default function Main() {
  const [characters, setCharacters] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getCharacters().then((characters) => {
      setCharacters(characters);
    });
  }, []);

  return (
    <View 
    className=" bg-black"
    >
      {characters.length === 0 ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <FlatList //Es importante usar FlatList para listas largas, ya que optimiza el rendimiento renderizando solo los elementos visibles
          data={characters}
          renderItem={({ item, index }) => (
            <AnimatedGameCard key={item.id} character={item} index={index} />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
}
