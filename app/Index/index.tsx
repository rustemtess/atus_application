import { TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView, KeyboardProvider } from "react-native-keyboard-controller";
import QRScanner from "./QRScanner";

const Index = () => {
    return (
        <KeyboardProvider>
            <SafeAreaView style={{
                flex: 1,
                backgroundColor: 'orange',
            }}>
                <KeyboardAwareScrollView
                    contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}
                >
                    <View style={{
                        backgroundColor: 'blue',
                        padding: 20, // Немного отступа для удобства
                        borderRadius: 10, // Скругление углов
                        width: '80%', // Установка ширины View
                    }}>
                        <QRScanner />
                        <TextInput
                            placeholder="Test"
                            keyboardType="numeric"
                            style={{
                                backgroundColor: 'red',
                                height: 40, // Высота текстового поля
                                paddingHorizontal: 10, // Отступы для текста
                            }}
                        />
                        <TextInput
                            placeholder="Test"
                            style={{
                                backgroundColor: 'red',
                                height: 40, // Высота текстового поля
                                paddingHorizontal: 10, // Отступы для текста
                            }}
                            secureTextEntry
                        />
                    </View>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        </KeyboardProvider>
    );
}

export default Index;
