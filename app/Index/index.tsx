import { Button, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView, KeyboardProvider } from "react-native-keyboard-controller";
import QRScanner from "@/components/QRCamera";
import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";
import { RootStackParamList } from "@/app/ScreenTypes";

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Index = (  { navigation }: HomeScreenProps ) => {

    return (
        <KeyboardProvider>
            <SafeAreaView style={{
                flex: 1,
                backgroundColor: 'orange',
            }}>
                <KeyboardAwareScrollView
                    contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}
                >
                
                </KeyboardAwareScrollView>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    width: '100%'
                }}>
                    <Button title="Home" />
                    <Button title="QRScanner" onPress={() => {
                        navigation.navigate('QRScanner')
                    }} />
                    <Button title="Profile" />
                </View>
            </SafeAreaView>
        </KeyboardProvider>
    );
}

export default Index;
