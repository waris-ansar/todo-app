import { useTheme } from "@/hooks/use-theme";
import { Text, TouchableOpacity, View } from "react-native";

export default function Todo() {
  const { toggleTheme, isDarkMode } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>

      <View style={{ padding: 20 }}>
        <TouchableOpacity
          style={{
            marginTop: 20,
            padding: 20,
            backgroundColor: "#ccc",
            borderRadius: 8,
          }}
          onPress={toggleTheme}
        >
          <Text>Change mod</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
