import { BottomTabBarProps } from "@react-navigation/bottom-tabs/src/types";
import { Text, Pressable, View } from "react-native";
import { NativeStackDescriptor, NativeStackDescriptorMap } from "react-native-screens/lib/typescript/native-stack/types";

interface ITabBar {
    props: BottomTabBarProps
}

const TabBarText = ( { props }: ITabBar ) => {

    return <View style={ {
        paddingVertical: 5,
        flexDirection: 'row',
        gap: 4
    } }>
        {
            props.state.routes.map(e => {
                return <Pressable onPress={ () => {
                    props.navigation.navigate(e.name)
                } } key={e.key} style={
                    {
                        width: '50%',
                        alignItems: 'center',
                        paddingVertical: 15
                    }
                }>
                    <Text>{props.descriptors[e.key].options.title ?? 'None'}</Text>
                </Pressable>
            })
        }
    </View>
}

export default TabBarText;