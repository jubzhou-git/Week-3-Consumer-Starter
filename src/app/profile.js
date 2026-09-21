import { Alert, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppHeader, DemoButton, ListItem } from 'group6-component-library';

export default function ProfileScreen() {
    return (
        <SafeAreaView style={styles.screen} edges={['top']}>
            <AppHeader title="Profile" subtitle="Hao, Group 6" />
            <ListItem title="Notifications" subtitle="Push and email" onPress={() => { }} />
            <ListItem title="Appearance" subtitle="System default" onPress={() => { }} />
            {/* No onPress, so this row is display-only (no chevron, not tappable) */}
            <ListItem title="App version" subtitle="1.0.0" trailing="none" />
            <View style={styles.footer}>
                <DemoButton
                    label="Sign out"
                    variant="secondary"
                    // Alert.alert shows a native pop-up. Placeholder until there's real sign-in.
                    onPress={() => Alert.alert('Signed out')}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: { flex: 1, backgroundColor: '#FFFFFF' },
    footer: { padding: 16 },
});
