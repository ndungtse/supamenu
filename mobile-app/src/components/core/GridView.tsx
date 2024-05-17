import React from 'react';
import { View } from 'react-native';

interface Props<T = any> {
    data: T[];
    renderItem: (item: T) => React.ReactNode;
    numColumns?: number;
    gap?: number;
    keyExtractor?: (item: T, index: number) => string;
}

const GridView = (props: Props) => {
    const { data, renderItem, keyExtractor, numColumns = 2, gap = 2 } = props

    return (
        <View style={{ width: '100%', flexDirection: 'row', flexWrap: 'wrap', }}>
            {data.map((item, index) =>{
                const key = keyExtractor ? keyExtractor(item, index) : index.toString() 
                return (
                <View key={key} style={{ width: `${100 / numColumns}%`, padding: gap }}>
                    {renderItem(item)}
                </View>
            )})}
        </View>
    )
}
export default GridView