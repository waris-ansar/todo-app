import { getHomeStyles } from "@/assets/styles/home-styles.style";
import Header from "@/components/home/header";
import Input from "@/components/home/input";
import TodoItem from "@/components/home/todo-item";
import LoadingSpinner from "@/components/loader";
import { api } from "@/convex/_generated/api";
import { useTheme } from "@/hooks/use-theme";
import { useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import { FlatList, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Todo() {
  const { colors, toggleTheme } = useTheme();
  const homeStyles = getHomeStyles(colors);
  const todos = useQuery(api.todos.getTodos);

  if (todos === undefined) {
    return <LoadingSpinner message="Loading todos..." />;
  }

  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={homeStyles.container}
    >
      <StatusBar barStyle={colors.statusBarStyle} />
      <SafeAreaView style={homeStyles.safeAreaContainer}>
        <Header />
        <Input />
        <FlatList
          data={todos.data}
          renderItem={({ item }) => <TodoItem data={item} />}
          keyExtractor={(item) => item._id}
          style={homeStyles.todoList}
          contentContainerStyle={homeStyles.todoListContent}
        />
      </SafeAreaView>
    </LinearGradient>
  );
}
