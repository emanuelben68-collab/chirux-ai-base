import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { ChipSelector } from '../components/ChipSelector';
import { PrimaryButton } from '../components/PrimaryButton';
import { durations, platforms, styles as styleOptions } from '../data/options';
import { colors } from '../theme/colors';
import { ContentStyle, DurationOption, GenerationInput, PlatformOption } from '../types';

interface Props {
  loading: boolean;
  onGenerate: (input: GenerationInput) => Promise<void>;
}

export function CreateScreen({ loading, onGenerate }: Props) {
  const [topic, setTopic] = useState('');
  const [duration, setDuration] = useState<DurationOption>('60 segundos');
  const [style, setStyle] = useState<ContentStyle>('Misterioso');
  const [platform, setPlatform] = useState<PlatformOption>('TikTok');

  const submit = async () => {
    if (!topic.trim()) return;
    await onGenerate({ topic: topic.trim(), duration, style, platform });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Crear contenido</Text>
      <Text style={styles.subtitle}>Haz que tus ideas se vuelvan videos virales.</Text>

      <View style={styles.inputWrap}>
        <Text style={styles.label}>Tema</Text>
        <TextInput
          value={topic}
          onChangeText={setTopic}
          placeholder="Ejemplo: secretos reales encontrados en el océano"
          placeholderTextColor={colors.textSoft}
          style={styles.input}
          multiline
        />
      </View>

      <ChipSelector title="Duración" options={durations} value={duration} onChange={setDuration} />
      <ChipSelector title="Estilo" options={styleOptions} value={style} onChange={setStyle} />
      <ChipSelector title="Plataforma" options={platforms} value={platform} onChange={setPlatform} />

      <PrimaryButton label="Generar contenido viral" onPress={submit} loading={loading} disabled={!topic.trim()} />
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
    fontSize: 16,
    marginTop: 6,
  },
  inputWrap: {
    marginTop: 22,
  },
  label: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
  },
  input: {
    backgroundColor: colors.card,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    color: colors.text,
    minHeight: 96,
    padding: 14,
    textAlignVertical: 'top',
  },
});
