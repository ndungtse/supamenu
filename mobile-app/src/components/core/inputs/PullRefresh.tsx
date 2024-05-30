import { Colors } from '@/constants/Colors'
import React from 'react'
import { RefreshControl, RefreshControlProps } from 'react-native'

interface Props extends RefreshControlProps { }

const PullRefresh = (props: Props) => {
    const { colors, tintColor, ...rest } = props
    return (
        <RefreshControl
            colors={colors ?? [Colors.primary]}
            tintColor={tintColor ?? Colors.primary}
            {...rest}
        />
    )
}

export default PullRefresh