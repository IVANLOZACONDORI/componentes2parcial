import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";

export type CryptXLogoProps = {
  name?: string;

  accent?: string;

  fontSize?: number;

  color?: string;

  accentColor?: string;

  style?: StyleProp<ViewStyle>;
};

export default function CryptXLogo({
  name = "Crypt",
  accent = "X",
  fontSize = 56,
  color = "#FFFFFF",
  accentColor = "#6750FF",
  style,
}: CryptXLogoProps) {
  return (
    <View
      accessible
      accessibilityRole="text"
      accessibilityLabel={`${name}${accent}`}
      style={[styles.container, style]}
    >
      <Text
        style={[styles.word, { fontSize, lineHeight: fontSize * 1.17, color }]}
        allowFontScaling
      >
        {name}
      </Text>
      <Text
        style={[
          styles.word,
          styles.accent,
          { fontSize, lineHeight: fontSize * 1.17, color: accentColor },
        ]}
        allowFontScaling
      >
        {accent}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
  },
  word: {
    fontWeight: "900",
    letterSpacing: -2.3,
    includeFontPadding: false,
  },
  accent: {
    marginLeft: 0,
  },
});
