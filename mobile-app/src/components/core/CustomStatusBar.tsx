import { useApp } from "@/conntexts/AppProvider";
import { Colors } from "@/constants/Colors";
import { StatusBar, StatusBarProps } from "expo-status-bar";
import { StatusBar as NativeStatusBar, SafeAreaView, StyleSheet, View } from "react-native";

interface CustomStatusBarProps extends StatusBarProps {
}

const CustomStatusBar = ({ backgroundColor, ...props }: CustomStatusBarProps) => {
    const { colorScheme } = useApp();
    const bgColor = Colors[colorScheme].background;
    const { style } = props

    return (
        <View style={[styles.statusBar, { backgroundColor: bgColor }]}
        >
            <SafeAreaView>
                <StatusBar translucent backgroundColor={backgroundColor} {...props}
                    style={style ?? colorScheme === 'light' ? 'dark' : 'light'}
                />
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