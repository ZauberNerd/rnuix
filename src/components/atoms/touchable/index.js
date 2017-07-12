// @flow
import React from 'react';
import {
    Platform,
    StyleSheet,
    TouchableNativeFeedback,
    TouchableOpacity,
    View,
} from 'react-native';
import type { StyleObj } from 'StyleSheetTypes';

type StyledTouchableNativeFeedbackProps = TouchableNativeFeedback.props & {
    borderless?: boolean,
    rippleColor?: string,
    style?: StyleObj,
};

function StyledTouchableNativeFeedback({
    borderless,
    rippleColor,
    children,
    style,
    ...props
}: StyledTouchableNativeFeedbackProps) {
    return (
        <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple(rippleColor, borderless)}
            {...props}
        >
            <View style={style}>
                {children}
            </View>
        </TouchableNativeFeedback>
    );
}

export type TouchableProps = TouchableOpacity.props &
    StyledTouchableNativeFeedbackProps;

export default function Touchable({
    children,
    disabled,
    onLongPress,
    onPress,
    ...props
}: TouchableProps) {
    const Touchable =
        Platform.OS === 'android' && Platform.Version >= 21
            ? StyledTouchableNativeFeedback
            : TouchableOpacity;
    const Wrapper = !disabled && (onLongPress || onPress) ? Touchable : View;

    return (
        <Wrapper onLongPress={onLongPress} onPress={onPress} {...props}>
            {children}
        </Wrapper>
    );
}
