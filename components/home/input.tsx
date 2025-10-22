import { getHomeStyles } from "@/assets/styles/home-styles.style";
import { api } from "@/convex/_generated/api";
import { useTheme } from "@/hooks/use-theme";
import { Ionicons } from "@expo/vector-icons";
import { useMutation } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Alert, TextInput, TouchableOpacity, View } from "react-native";

const InputTodo = () => {
  const { colors } = useTheme();
  const homeStyles = getHomeStyles(colors);
  const [text, setText] = useState<undefined | string>();
  const addTodo = useMutation(api.todos.addTodo);

  const handleAddTodo = async () => {
    if (text && text.trim()) {
      try {
        await addTodo({ text });
        setText(undefined);
      } catch (error) {
        console.log("error occured", error);
        Alert.alert("Something went wrong");
      }
    }
  };

  return (
    <View style={homeStyles.inputContainer}>
      <View style={homeStyles.inputWrapper}>
        <TextInput
          style={homeStyles.input}
          placeholder="What needs to be done?"
          value={text}
          onChangeText={setText}
          placeholderTextColor={colors.textMuted}
          onEndEditing={handleAddTodo}
        />
        <TouchableOpacity
          onPress={handleAddTodo}
          activeOpacity={0.8}
          disabled={text && !text.trim() ? true : false}
        >
          <LinearGradient
            colors={
              text && text.trim()
                ? colors.gradients.primary
                : colors.gradients.muted
            }
            style={[
              homeStyles.addButton,
              text && !text.trim() && homeStyles.addButtonDisabled,
            ]}
          >
            <Ionicons name="add" size={24} color="#ffffff" />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InputTodo;
