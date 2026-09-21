import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppHeader, DemoButton, TextField } from 'group6-component-library';

export default function ComposeScreen() {
    // React: useState remembers a value between redraws.
    // JS: [to, setTo] unpacks two things: the current value and a function that changes it.
    const [to, setTo] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [sent, setSent] = useState(false);

    // JS: a function stored in a variable, run when Send is pressed.
    const handleSend = () => {
        // JS: .includes('@') checks whether the text contains an @ sign. "!" flips it to "does NOT contain".
        if (!to.includes('@')) {
            setError('Enter a full email address, like you@umich.edu.');
            // JS: "return" stops the function here, so nothing below runs.
            return;
        }
        setError('');
        setSent(true);
        setTo('');
        setMessage('');
    };

    return (
        <SafeAreaView style={styles.screen} edges={['top']}>
            <AppHeader
                title="New message"
                size="compact"
                actionLabel="Clear"
                // JS: () => { ... } is a short function that runs several lines when Clear is tapped.
                onAction={() => {
                    setTo('');
                    setMessage('');
                    setError('');
                }}
            />
            <View style={styles.form}>
                <TextField
                    label="To"
                    placeholder="you@umich.edu"
                    value={to}
                    onChangeText={setTo}
                    errorText={error}
                />
                <TextField
                    label="Message"
                    placeholder="Write something"
                    value={message}
                    onChangeText={setMessage}
                    // JS: a template string. `${...}` inserts the live number of characters into the text.
                    helperText={sent ? 'Message sent.' : `${message.length} characters`}
                />
                <DemoButton
                    label="Send"
                    onPress={handleSend}
                    // JS: "===" checks for an exact match. Disabled while the message box is empty.
                    disabled={message.trim() === ''}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: { flex: 1, backgroundColor: '#FFFFFF' },
    form: { gap: 16, padding: 16 },
});
