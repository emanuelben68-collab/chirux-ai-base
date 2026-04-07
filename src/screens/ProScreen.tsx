import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { PrimaryButton } from '../components/PrimaryButton';
import { colors } from '../theme/colors';

export function ProScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Desbloquea Chirux Pro</Text>
      <Text style={styles.subtitle}>Más generaciones, hooks más agresivos, mejores ideas visuales y resultados premium.</Text>

      <View style={styles.card}>
        <Text style={styles.price}>$7.99 / mes</Text>
        <Text style={styles.benefit}>• Generaciones ilimitadas</Text>
        <Text style={styles.benefit}>• Estilos premium</Text>
        <Text style={styles.benefit}>• Historial completo</Text>
        <Text style={styles.benefit}>• Variantes extra por resultado</Text>
      </View>

      <PrimaryButton label="Probar 7 días gratis" onPress={() => Alert.alert('Próximo paso', 'Aquí conectarás Stripe o RevenueCat para cobrar suscripciones.')} />
      <PrimaryButton label="Suscribirme" onPress={() => Alert.alert('Próximo paso', 'Conecta tu pasarela de pago para activar el plan Pro.')} secondary />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    color: colors.text,
    fontSize: 30,
    fontWeight: '900',
  },
  subtitle: {
    color: colors.textSoft,
    fontSize: 16,
    marginTop: 8,
    lineHeight: 24,
  },
  card: {
    marginTop: 22,
    backgroundColor: colors.card,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 18,
  },
  price: {
    color: colors.text,
    fontSize: 28,
    fontWeight: '900',
    marginBottom: 12,
  },
  benefit: {
    color: colors.textSoft,
    fontSize: 15,
    lineHeight: 28,
  },
});
