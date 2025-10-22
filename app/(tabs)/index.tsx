import { getHomeStyles } from "@/assets/styles/home-styles.style";
import Header from "@/components/home/header";
import Input from "@/components/home/input";
import { useTheme } from "@/hooks/use-theme";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Todo() {
  const { colors, toggleTheme } = useTheme();

  const homeStyles = getHomeStyles(colors);

  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={homeStyles.container}
    >
      <StatusBar barStyle={colors.statusBarStyle} />
      <SafeAreaView style={homeStyles.safeAreaContainer}>
        <Header />
        <Input />
        <TouchableOpacity onPress={toggleTheme}>
          <Text>Toggle theme</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
}
