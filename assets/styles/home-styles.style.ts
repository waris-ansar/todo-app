import { ColorScheme } from "@/types/color-scheme";
import { StyleSheet } from "react-native";

export const getHomeStyles = (colors: ColorScheme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    safeAreaContainer: {
      flex: 1,
    },
    loadingContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    loadingText: {
      marginTop: 20,
      fontSize: 18,
      fontWeight: "500",
      color: colors.text,
    },
    header: {
      paddingVertical: 20,
      paddingHorizontal: 24,
      paddingBottom: 24,
    },
    titleContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    ionIcon: {
      alignItems: "center",
      justifyContent: "center",
      width: 52,
      height: 52,
      borderRadius: 16,
    },
    titleTextContainer: {
      marginLeft: 12,
    },
    title: {
      fontSize: 28,
      fontWeight: "700",
      letterSpacing: -1,
      marginBottom: 4,
      color: colors.text,
    },
    subtitle: {
      fontSize: 16,
      fontWeight: "500",
      color: colors.textMuted,
    },
    progressContainer: {
      marginTop: 20,
    },
    progressBarContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: 16,
    },
    progressBar: {
      height: 12,
      borderRadius: 6,
      flex: 1,
      overflow: "hidden",
      backgroundColor: colors.border,
    },
    progressFill: {
      height: 12,
      borderRadius: 6,
      backgroundColor: colors.success,
    },
    progressText: {
      fontSize: 16,
      fontWeight: "700",
      minWidth: 40,
      textAlign: "right",
      color: colors.success,
    },
    inputContainer: {
      paddingHorizontal: 24,
    },
    inputWrapper: {
      flexDirection: "row",
      alignItems: "center",
      gap: 16,
    },
    input: {
      flex: 1,
      borderWidth: 2,
      borderRadius: 20,
      paddingHorizontal: 20,
      paddingVertical: 16,
      fontSize: 16,
      maxHeight: 120,
      fontWeight: "500",
      backgroundColor: colors.backgrounds.input,
      borderColor: colors.border,
      color: colors.text,
    },
    addButton: {
      width: 56,
      height: 56,
      borderRadius: 28,
      justifyContent: "center",
      alignItems: "center",
    },
    addButtonDisabled: {
      opacity: 0.5,
    },
    todoList: {
      flex: 1,
    },
    todoListContent: {
      paddingHorizontal: 24,
      paddingTop: 24,
      paddingBottom: 30,
    },
    emptyListContainer: {
      flexGrow: 1,
      justifyContent: "center",
    },
    todoItemWrapper: {
      marginVertical: 12,
    },
    todoItem: {
      flexDirection: "row",
      alignItems: "flex-start",
      padding: 20,
      borderRadius: 20,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 8,
    },
    checkbox: {
      marginRight: 16,
      marginTop: 2,
    },
    checkboxInner: {
      width: 32,
      height: 32,
      borderRadius: 16,
      borderWidth: 2,
      justifyContent: "center",
      alignItems: "center",
    },
    todoTextContainer: {
      flex: 1,
    },
    todoText: {
      fontSize: 17,
      lineHeight: 24,
      fontWeight: "500",
      marginBottom: 16,
      color: colors.text,
    },
    todoActions: {
      flexDirection: "row",
      gap: 12,
    },
    actionButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      justifyContent: "center",
      alignItems: "center",
    },
    editContainer: {
      flex: 1,
    },
    editInput: {
      borderWidth: 2,
      borderRadius: 16,
      paddingHorizontal: 16,
      paddingVertical: 12,
      fontSize: 17,
      fontWeight: "500",
      marginBottom: 16,
      backgroundColor: colors.backgrounds.editInput,
      borderColor: colors.primary,
      color: colors.text,
    },
    editButtons: {
      flexDirection: "row",
      gap: 12,
    },
    editButton: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
      paddingHorizontal: 16,
      paddingVertical: 10,
      borderRadius: 12,
    },
    editButtonText: {
      color: "#ffffff",
      fontSize: 14,
      fontWeight: "600",
    },
    emptyContainer: {
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 80,
    },
    emptyIconContainer: {
      width: 120,
      height: 120,
      borderRadius: 60,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 24,
    },
    emptyText: {
      fontSize: 24,
      fontWeight: "700",
      marginBottom: 8,
      color: colors.text,
    },
    emptySubtext: {
      fontSize: 17,
      textAlign: "center",
      paddingHorizontal: 40,
      lineHeight: 24,
      color: colors.textMuted,
    },
  });
};
