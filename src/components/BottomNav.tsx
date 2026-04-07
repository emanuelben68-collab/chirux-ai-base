import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { TabKey } from '../types';
import { colors } from '../theme/colors';

interface Props {
  activeTab: TabKey;
  onChange: (tab: TabKey) => void;
}

const tabs: { key: TabKey; label: string }[] = [
  { key: 'home', label: 'Inicio' },
  { key: 'create', label: 'Crear' },
  { key: 'result', label: 'Resultado' },
  { key: 'history', label: 'Historial' },
  { key: 'pro', label: 'Pro' },
];

export function BottomNav({ activeTab, onChange }: Props) {
  return (
    <View style={styles.nav}>
      {tabs.map((tab) => {
        const active = tab.key === activeTab;
        return (
          <Pressable key={tab.key} onPress={() => onChange(tab.key)} style={styles.item}>
            <Text style={[styles.label, active && styles.labelActive]}>{tab.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#0B0D1A',
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingVertical: 12,
  },
  item: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  label: {
    color: colors.textSoft,
    fontSize: 12,
    fontWeight: '700',
  },
  labelActive: {
    color: colors.primary,
  },
});
