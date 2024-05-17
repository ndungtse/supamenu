import { Colors } from "@/constants/Colors";
import useColorScheme from "@/hooks/useColorScheme";
import { StatusBar, StatusBarProps } from "expo-status-bar";
import { View, SafeAreaView, StyleSheet, StatusBar as NativeStatusBar } from "react-native";

interface CustomStatusBarProps extends StatusBarProps {
}

const CustomStatusBar = ({ backgroundColor, ...props }: CustomStatusBarProps) => {
    const colorScheme = useColorScheme();
    const bgColor = Colors[colorScheme].background;
    return (
        <View style={[styles.statusBar, { backgroundColor: bgColor }]}>
            <SafeAreaView>
                <StatusBar translucent backgroundColor={backgroundColor} {...props} />
            </SafeAreaView>
        </View>
    );
};

const STATUSBAR_HEIGHT = NativeStatusBar.currentHeight;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    statusBar: {
        height: STATUSBAR_HEIGHT,
    },
    content: {
        flex: 1,
        backgroundColor: '#33373B',
    },
});

export default CustomStatusBar;