import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Componentes reutilizables incluidos en el ZIP.
import CryptXLogo from "@/components/CryptXLogo";
import GetStartedButton from "@/components/GetStartedButton";

export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const illustrationSize = Math.min(width - 52, 330);

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          <CryptXLogo fontSize={54} color="#FFFFFF" accentColor="#6750FF" />

          {/* Ilustración decorativa creada con React Native, sin imágenes externas. */}
          <View
            style={[
              styles.illustration,
              { width: illustrationSize, height: illustrationSize },
            ]}
            accessibilityLabel="Ilustración violeta estilo CryptX"
          >
            <View style={styles.orb} />
            <View style={styles.orbitOuter} />
            <View style={styles.orbitMiddle} />
            <View style={styles.orbitInner} />
            <View style={styles.orbLight} />
          </View>

          <View style={styles.copy}>
            <Text style={styles.heading}>
              Jump start your{"\n"}crypto portfolio
            </Text>
            <Text style={styles.description}>
              Take your investment portfolio{"\n"}to next level
            </Text>
          </View>

          <GetStartedButton
            title="Get Started"
            backgroundColor="#6750FF"
            style={styles.button}
            onPress={() =>
              Alert.alert("CryptX", "¡El botón funciona correctamente!")
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#050505",
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: "center",
  },
  content: {
    width: "100%",
    maxWidth: 430,
    flexGrow: 1,
    paddingHorizontal: 22,
    paddingTop: 24,
    paddingBottom: 28,
  },
  illustration: {
    borderWidth: 2,
    borderColor: "#BD27EA",
    marginTop: 12,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  orb: {
    width: 198,
    height: 198,
    borderRadius: 99,
    backgroundColor: "#5844D9",
    shadowColor: "#795BFF",
    shadowOpacity: 0.5,
    shadowRadius: 24,
    elevation: 6,
  },
  orbitOuter: {
    position: "absolute",
    width: 238,
    height: 158,
    borderWidth: 20,
    borderColor: "#9F99EC",
    borderRadius: 120,
    transform: [{ rotate: "-38deg" }],
  },
  orbitMiddle: {
    position: "absolute",
    width: 205,
    height: 130,
    borderWidth: 17,
    borderColor: "#7865F5",
    borderRadius: 110,
    transform: [{ rotate: "37deg" }],
  },
  orbitInner: {
    position: "absolute",
    width: 135,
    height: 190,
    borderWidth: 17,
    borderColor: "#A09BF3",
    borderRadius: 100,
    transform: [{ rotate: "-25deg" }],
  },
  orbLight: {
    position: "absolute",
    width: 35,
    height: 35,
    borderRadius: 18,
    backgroundColor: "#BAA8FF",
    left: "58%",
    top: "54%",
  },
  copy: {
    flexGrow: 1,
    justifyContent: "flex-end",
    paddingTop: 8,
    paddingBottom: 28,
  },
  heading: {
    color: "#FFFFFF",
    fontSize: 29,
    fontWeight: "800",
    lineHeight: 40,
  },
  description: {
    color: "#FFFFFF",
    fontSize: 14,
    lineHeight: 22,
    marginTop: 23,
  },
  button: {
    minHeight: 48,
    marginTop: 8,
  },
});
