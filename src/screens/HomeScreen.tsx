import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PrimaryButton } from '../components/PrimaryButton';
import { colors } from '../theme/colors';

interface Props {
  onStart: () => void;
  onTryFree: () => void;
}

export function HomeScreen({ onStart, onTryFree }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.logoWrap}>
        <Text style={styles.logo}>CHIRU<Text style={styles.logoX}>X</Text> AI</Text>
        <Text style={styles.subtitle}>Haz que tus ideas se vuelvan videos virales</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Qué hace Chirux AI</Text>
        <Text style={styles.cardText}>Genera títulos, hooks, guiones, descripciones, hashtags e ideas visuales listos para TikTok, Facebook y YouTube Shorts.</Text>
      </View>

      <PrimaryButton label="Iniciar" onPress={onStart} />
      <PrimaryButton label="Probar gratis" onPress={onTryFree} secondary />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  logoWrap: {
    marginBottom: 30,
  },
  logo: {
    color: colors.text,
    fontSize: 40,
    fontWeight: '900',
    letterSpacing: 1,
  },
  logoX: {
    color: colors.primary,
  },
  subtitle: {
    color: colors.textSoft,
    fontSize: 18,
    marginTop: 10,
    lineHeight: 26,
  },
  card: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 20,
    padding: 18,
    marginBottom: 14,
  },
  cardTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 8,
  },
  cardText: {
    color: colors.textSoft,
    fontSize: 15,
    lineHeight: 22,
  },
});
