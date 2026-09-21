import { useMemo, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import { AppHeader, ListItem, TextField, tokens } from 'group6-component-library';

const CONTACTS = [
  { id: '1', name: 'Ava Thompson', subtitle: 'Product Design', badge: '3' },
  { id: '2', name: 'Marcus Lee', subtitle: 'Engineering' },
  { id: '3', name: 'Priya Natarajan', subtitle: 'Engineering', badge: '1' },
  { id: '4', name: 'Diego Fernandez', subtitle: 'Marketing' },
  { id: '5', name: 'Sofia Rossi', subtitle: 'Customer Success' },
  { id: '6', name: 'Ethan Walker', subtitle: 'Engineering' },
];

export default function App() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return CONTACTS;
    return CONTACTS.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.subtitle.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.root}>
        <StatusBar style="dark" />

        <AppHeader
          title="Contacts"
          subtitle={`${CONTACTS.length} people`}
          size="large"
          testID="contacts-header"
        />

        <View style={styles.searchWrap}>
          <TextField
            label="Search"
            value={query}
            onChangeText={setQuery}
            placeholder="Search by name or team"
            testID="contacts-search"
          />
        </View>

        <FlatList
          data={filtered}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ListItem
              title={item.name}
              subtitle={item.subtitle}
              trailing={item.badge ? 'badge' : 'chevron'}
              badgeText={item.badge}
              onPress={() => { }}
              testID={`contact-${item.id}`}
            />
          )}
          ListEmptyComponent={
            <View style={styles.empty}>
              <ListItem title="No matches" subtitle="Try a different search" />
            </View>
          }
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: tokens.color.canvas,
    flex: 1,
  },
  searchWrap: {
    backgroundColor: tokens.color.surface,
    borderBottomColor: tokens.color.border,
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: tokens.spacing.lg,
    paddingVertical: tokens.spacing.md,
  },
  empty: {
    marginTop: tokens.spacing.xl,
  },
});