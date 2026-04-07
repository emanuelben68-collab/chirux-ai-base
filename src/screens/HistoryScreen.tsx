import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';
import { GenerationResult } from '../types';

interface Props {
  history: GenerationResult[];
  onOpenItem: (item: GenerationResult) => void;
}

export function HistoryScreen({ history, onOpenItem }: Props) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Historial</Text>
      <Text style={styles.subtitle}>Tus generaciones guardadas aparecerán aquí.</Text>

      {history.length === 0 ? (
        <View style={styles.emptyCard}>
          <Text style={styles.emptyTitle}>Todavía no has generado contenido</Text>
          <Text style={styles.emptyText}>Crea tu primer video viral y podrás abrirlo después desde esta pantalla.</Text>
        </View>
      ) : (
        history.map((item) => (
          <Pressable key={item.id} style={styles.card} onPress={() => onOpenItem(item)}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardMeta}>{item.style} · {item.duration} · {item.platform}</Text>
            <Text style={styles.cardTopic}>{item.topic}</Text>
            <Text style={styles.cardDate}>{item.createdAt}</Text>
          </Pressable>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    color: colors.text,
    fontSize: 28,
    fontWeight: '900',
  },
  subtitle: {
    color: colors.textSoft,
    marginTop: 6,
    marginBottom: 16,
  },
  emptyCard: {
    backgroundColor: colors.card,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 18,
  },
  emptyTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '800',
  },
  emptyText: {
    color: colors.textSoft,
    marginTop: 8,
    lineHeight: 22,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 16,
    marginBottom: 12,
  },
  cardTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '800',
  },
  cardMeta: {
    color: colors.primary,
    marginTop: 6,
    fontWeight: '700',
  },
  cardTopic: {
    color: colors.textSoft,
    marginTop: 8,
  },
  cardDate: {
    color: colors.textSoft,
    marginTop: 8,
    fontSize: 12,
  },
});
