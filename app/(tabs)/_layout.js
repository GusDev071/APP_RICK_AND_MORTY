import { Tabs } from "expo-router";
import { View } from "react-native";
import { homeIcon, infoIcon } from "../../components/icons";

export default function TabsLayout(){
    return(
        <Tabs
        screenOptions={{
            headerShown: false,
            tabBarStyle: {backgroundColor: "#000"},
            tabBarActiveTintColor: "#97ce4c",
        }}
        >
            <Tabs.Screen name="index" options={{
                tabBarIcon: homeIcon,
                title: "Home"
            }} />
            <Tabs.Screen name="about" options={{
                tabBarIcon: infoIcon,
                title: "About"
            }} />

        </Tabs>
    )
}