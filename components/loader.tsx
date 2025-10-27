import { getHomeStyles } from "@/assets/styles/home-styles.style";
import { useTheme } from "@/hooks/use-theme";
import { LinearGradient } from "expo-linear-gradient";
import { ActivityIndicator, Text, View } from "react-native";

const LoadingSpinner = ({ message }: { message: string }) => {
  const { colors } = useTheme();

  const homeStyles = getHomeStyles(colors);

  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={homeStyles.container}
    >
      <View style={homeStyles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={homeStyles.loadingText}>{message}</Text>
      </View>
    </LinearGradient>
  );
};

export default LoadingSpinner;
