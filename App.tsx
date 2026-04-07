import React, { useMemo, useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { HomeScreen } from './src/screens/HomeScreen';
import { CreateScreen } from './src/screens/CreateScreen';
import { ResultScreen } from './src/screens/ResultScreen';
import { HistoryScreen } from './src/screens/HistoryScreen';
import { ProScreen } from './src/screens/ProScreen';
import { BottomNav } from './src/components/BottomNav';
import { GenerationInput, GenerationResult, TabKey } from './src/types';
import { generateViralContent } from './src/services/aiService';
import { colors } from './src/theme/colors';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabKey>('home');
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState<GenerationResult[]>([]);
  const [lastInput, setLastInput] = useState<GenerationInput | null>(null);
  const [result, setResult] = useState<GenerationResult | null>(null);

  const canShowResults = useMemo(() => Boolean(result), [result]);

  const handleGenerate = async (input: GenerationInput) => {
    setLoading(true);
    setLastInput(input);
    try {
      const generated = await generateViralContent(input);
      setResult(generated);
      setHistory((prev) => [generated, ...prev]);
      setActiveTab('result');
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateAgain = async () => {
    if (!lastInput) return;
    await handleGenerate(lastInput);
  };

  const renderScreen = () => {
    switch (activeTab) {
      case 'home':
        return <HomeScreen onStart={() => setActiveTab('create')} onTryFree={() => setActiveTab('create')} />;
      case 'create':
        return <CreateScreen loading={loading} onGenerate={handleGenerate} />;
      case 'result':
        return (
          <ResultScreen
            result={result}
            onGoCreate={() => setActiveTab('create')}
            onGenerateAgain={handleGenerateAgain}
          />
        );
      case 'history':
        return <HistoryScreen history={history} onOpenItem={(item) => { setResult(item); setActiveTab('result'); }} />;
      case 'pro':
        return <ProScreen />;
      default:
        return <HomeScreen onStart={() => setActiveTab('create')} onTryFree={() => setActiveTab('create')} />;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <ExpoStatusBar style="light" />
      <View style={styles.container}>{renderScreen()}</View>
      <BottomNav
        activeTab={activeTab}
        onChange={(tab) => {
          if (tab === 'result' && !canShowResults) return;
          setActiveTab(tab);
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
