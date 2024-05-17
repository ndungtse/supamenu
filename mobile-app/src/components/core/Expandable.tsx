import React from 'react';
import { Pressable, StyleProp, View, ViewStyle } from 'react-native';

interface ExpandableProps {
    leftSection?: React.ReactNode;
    rightSection?: React.ReactNode;
    children: React.ReactNode;
    expanded?: boolean;
    onExpand?: (expand: boolean) => void;
    className?: string;
    style?: StyleProp<ViewStyle>;
}

const Expandable = (props: ExpandableProps) => {
    const { leftSection, rightSection, children, expanded, onExpand, className, style } = props;
    const [isExpanded, setIsExpanded] = React.useState(expanded ?? false);

    const handleExpand = () => {
        if (onExpand) {
            onExpand(!isExpanded);
        }
        setIsExpanded(!isExpanded);
    }

    // const LeftSection = React.createElement(leftSection, { onPre: handleExpand })
    // const RightSection = rightSection

    return (
        <View style={style} className={`expandable ${className}`}>
            {leftSection && <Pressable onPress={handleExpand}>
                {leftSection}
            </Pressable>}
            {isExpanded && children}
            {rightSection && <Pressable onPress={handleExpand}>
                {rightSection}
            </Pressable>}
        </View>
    )
}

export default Expandable