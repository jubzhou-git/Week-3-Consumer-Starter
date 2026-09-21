import { useRouter } from 'expo-router';
import { FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// JS: { AppHeader, ListItem } picks just these two components out of our library package.
import { AppHeader, ListItem } from 'group6-component-library';

// JS: an array (list) of objects. Each object is one message with named fields.
const messages = [
    { id: '1', from: 'Maya Chen', preview: 'Design review moved to 3pm', unread: 2 },
    { id: '2', from: 'Ben Mullins', preview: 'Storybook links due at 11:20', unread: 1 },
    { id: '3', from: 'Group 6', preview: 'Who is taking the consumer app?', unread: 0 },
];

export default function InboxScreen() {
    // Expo Router: useRouter gives us a "router" object that can move between screens.
    const router = useRouter();

    return (
        // SafeAreaView keeps content clear of the phone's notch and status bar.
        <SafeAreaView style={styles.screen} edges={['top']}>
            <AppHeader title="Inbox" subtitle="3 conversations" />
            <FlatList
                data={messages}
                // JS: (item) => item.id is a short function: "given a message, return its id". React uses it to track each row.
                keyExtractor={(item) => item.id}
                // JS: { item } unpacks the one message FlatList hands us for each row.
                renderItem={({ item }) => (
                    <ListItem
                        title={item.from}
                        subtitle={item.preview}
                        // JS: "condition ? A : B" means "if unread is above 0, show a badge; otherwise a chevron".
                        trailing={item.unread > 0 ? 'badge' : 'chevron'}
                        // JS: String() turns the number 2 into the text "2", because the badge expects text.
                        badgeText={String(item.unread)}
                        onPress={() => router.push('/compose')}
                    />
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: { flex: 1, backgroundColor: '#FFFFFF' },
});
