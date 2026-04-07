import React from 'react';
import { Alert, ScrollView, Share, StyleSheet, Text, View } from 'react-native';
import { PrimaryButton } from '../components/PrimaryButton';
import { SectionCard } from '../components/SectionCard';
import { colors } from '../theme/colors';
import { GenerationResult } from '../types';

interface Props {
  result: GenerationResult | null;
  onGoCreate: () => void;
  onGenerateAgain: () => void;
}

export function ResultScreen({ result, onGoCreate, onGenerateAgain }: Props) {
  if (!result) {
    return (
      <View style={styles.emptyWrap}>
        <Text style={styles.emptyTitle}>Aún no hay resultados</Text>
        <Text style={styles.emptyText}>Genera tu primer contenido para ver aquí el título, gancho, guion y hashtags.</Text>
        <PrimaryButton label="Ir a crear" onPress={onGoCreate} />
      </View>
    );
  }

  const copyAll = async () => {
    await Share.share({
      message: `Título: ${result.title}\n\nGancho: ${result.hook}\n\nGuion:\n${result.script}\n\nDescripción:\n${result.description}\n\nHashtags:\n${result.hashtags}\n\nIdea visual:\n${result.visualIdea}`,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.pageTitle}>Tu contenido está listo</Text>
      <Text style={styles.pageMeta}>{result.style} · {result.duration} · {result.platform}</Text>

      <SectionCard title="Título">
        <Text style={styles.text}>{result.title}</Text>
      </SectionCard>

      <SectionCard title="Gancho">
        <Text style={styles.text}>{result.hook}</Text>
      </SectionCard>

      <SectionCard title="Guion">
        <Text style={styles.text}>{result.script}</Text>
      </SectionCard>

      <SectionCard title="Descripción">
        <Text style={styles.text}>{result.description}</Text>
      </SectionCard>

      <SectionCard title="Hashtags">
        <Text style={styles.text}>{result.hashtags}</Text>
      </SectionCard>

      <SectionCard title="Idea visual">
        <Text style={styles.text}>{result.visualIdea}</Text>
      </SectionCard>

      <PrimaryButton label="Copiar / compartir todo" onPress={copyAll} />
      <PrimaryButton label="Generar otra versión" onPress={onGenerateAgain} secondary />
      <PrimaryButton label="Guardar" onPress={() => Alert.alert('Guardado', 'Este contenido ya quedó en el historial local de la app.')} secondary />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
  },
  pageTitle: {
    color: colors.text,
    fontSize: 28,
    fontWeight: '900',
  },
  pageMeta: {
    color: colors.textSoft,
    fontSize: 14,
    marginTop: 6,
  },
  text: {
    color: colors.textSoft,
    fontSize: 15,
    lineHeight: 24,
  },
  emptyWrap: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  emptyTitle: {
    color: colors.text,
    fontSize: 24,
    fontWeight: '800',
  },
  emptyText: {
    color: colors.textSoft,
    marginTop: 8,
    lineHeight: 22,
  },
});
