import { Link } from "expo-router";
import { ScrollView, Text, Pressable } from "react-native";
import { ChevronLeftIcon } from "../components/icons";
import Screen from "../components/screen";


export default function About() {
  return (
    <Screen>
    <ScrollView className="pt-24 p-2 bg-black ">
      <Text className="text-white text-lg mb-2 font-bold ">
        Acerca de esta aplicación
      </Text>
      <Text className="text-white text-base mb-2">
        Esta aplicación fue creada como parte de un curso de React Native.
        Utiliza la API de RAWG para mostrar información sobre videojuegos,
        incluyendo su título, descripción, fecha de lanzamiento e imagen. La
        aplicación está diseñada para ser simple y fácil de usar, con una
        interfaz limpia y moderna.
      </Text>
      <Text className="text-white text-base mb-2">
        El código fuente de esta aplicación está disponible en GitHub, y se
        anima a los desarrolladores a contribuir o utilizarlo como referencia
        para sus propios proyectos.
      </Text>
      <Text className="text-white text-base mb-2">
        Si tienes alguna pregunta o sugerencia, no dudes en contactarme a través
        de mis redes sociales o por correo electrónico.
      </Text>
      <Link asChild href="/">
        <Pressable>
          <Text className="bg-blue-500 rounded-lg p-2 mt-4 mb-4 ml-2 text-white text-xl font-bold text-center">
            <ChevronLeftIcon />
            Volver al inicio
          </Text>
        </Pressable>
      </Link>
    </ScrollView>
    </Screen>
  );
}
