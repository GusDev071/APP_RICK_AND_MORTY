import {Stack } from "expo-router";
import { View, Pressable } from "react-native";
import Logo from "../components/logo";
import { Link } from "expo-router";
import { InfoCircleIcon } from "../components/icons";
import { styled } from "nativewind";
import Screen from "../components/screen";

const StyledPressable = styled(Pressable);

export default function Layout() {
  return (
    <Screen>
      <Stack 
       screenOptions={{
        headerStyle : {backgroundColor:"black"},
        headerTintColor: "green",
        headerTitle: "",
        headerLeft: () => <Logo width={200} height={80}/>,
        headerRight: () => (
          <Link asChild href="/about">
                  <StyledPressable className="rounded-full bg-gray-700 active:opacity-80">
                    <InfoCircleIcon />
                  </StyledPressable>
          </Link>
        )
       }}
      />
    </Screen>
  );
}
