import { StatusBar ,StatusBarProps} from "expo-status-bar";
import { View, SafeAreaView, StyleSheet, StatusBar as NativeStatusBar  } from "react-native";

interface CustomStatusBarProps extends StatusBarProps {
}

const CustomStatusBar = ({ backgroundColor, ...props }: CustomStatusBarProps) => (
    <View style={[styles.statusBar, { backgroundColor }]}>
        <SafeAreaView>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </SafeAreaView>
    </View>
);

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