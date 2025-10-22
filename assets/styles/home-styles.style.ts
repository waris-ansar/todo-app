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
    // loadingContainer: {
    //   flex: 1,
    //   justifyContent: "center",
    //   alignItems: "center",
    // },
    // loadingText: {
    //   marginTop: 20,
    //   fontSize: 18,
    //   fontWeight: "500",
    //   color: colors.text,
    // },
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
  });
};
