// Expo Router: Tabs creates the bottom tab bar. Each Tabs.Screen matches a file in this app/ folder.
import { Tabs } from 'expo-router';

// JS: "export default function" is the main thing this file shares. Expo Router looks for it to build the layout.
export default function TabLayout() {
    return (
        // headerShown: false hides Expo's built-in header, since each screen uses our AppHeader instead.
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen name="index" options={{ title: 'Inbox' }} />
            <Tabs.Screen name="compose" options={{ title: 'Compose' }} />
            <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
        </Tabs>
    );
}
