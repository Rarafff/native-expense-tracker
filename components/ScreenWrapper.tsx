import { colors } from '@/constants/theme'
import { ScreenWrapperProps } from '@/types'
import React from 'react'
import { Dimensions, Platform, StatusBar, View, ViewStyle } from 'react-native'

const { height } = Dimensions.get('window')

const ScreenWrapper = ({ style, children }: ScreenWrapperProps) => {
    let paddingTop = Platform.OS == 'ios' ? height * 0.06 : 50;
    const containerStyle: ViewStyle = { paddingTop, flex: 1, backgroundColor: colors.neutral900 };
    return (
        <View style={[containerStyle, style]}>
            <StatusBar barStyle="light-content" />
            {children}
        </View>
    )
}

export default ScreenWrapper
