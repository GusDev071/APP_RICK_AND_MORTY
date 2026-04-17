import { useEffect, useRef } from "react";
import { Text, View, Image, Animated, Pressable } from "react-native";
import { Link } from "expo-router";

import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

export default function  CharacterCards({ character }) {
  return (
    <Link asChild href={`/${character.id}`}>
    <StyledPressable className="active:opacity-70 border border-white
    active:border-white/50 mb-2  rounded-xl p-4">
      <View
        key={character.id}
        className="flex-row bg-gray-800 rounded-xl gap-1 mb-10  ml-2 mr-2 mt-2"
      >
        <Image
          source={{ uri: character.image }}
        style={{
          width: 107,
          height: 147,
          borderRadius: 10,
        }}
      />

      <View className="justify-center">
        <Text className="text-white text-lg mb-2 font-bold flex-shrink">{character.name}</Text>
        <Text className="text-white text-base mb-2">{character.species}</Text>
        <Text className="text-white text-sm">
          {`Created: ${new Date(character.releaseDate).toLocaleDateString()}`}
        </Text>
      </View>
    </View>
    </StyledPressable>
    </Link>
  );
}

// Este componente envuelve a CharacterCards y le añade una animación de aparición con un retraso basado en su índice para crear un efecto de cascada
export function AnimatedCharacterCard({ character, index }) {
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
      <CharacterCards character={character} />
    </Animated.View>
  );
}

export const AnimatedGameCard = AnimatedCharacterCard;
