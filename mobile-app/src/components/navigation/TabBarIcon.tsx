import { useApp } from '@/conntexts/AppProvider';
import { cn } from '@/utils/cn';
import React from 'react';
import { Platform, View } from 'react-native';

interface TabBarIconProps {
  focused: boolean;
  color?: string;
  children: React.ReactNode;
}

const TabBarIcon: React.FC<TabBarIconProps> = ({ focused, color, children }) => {
  const isIos = Platform.OS === 'ios';
  const { colorScheme } = useApp();
  return (
    <View className={cn('flex-col  relative items-center', isIos ? 'pt-1' : '')}>
      {/* {focused && <View 
      style={{ backgroundColor: Colors[colorScheme ?? 'light'].tabBg }}
        className={cn('w-full  aspect-square -z-5 -top-3 absolute rounded-full')}></View>} */}
      {children}
      {<View className={cn(' w-2 h-2 rounded-full', focused ? 'bg-primary' : 'bg-transparent')}></View>}
    </View>
  );
};

export default TabBarIcon;