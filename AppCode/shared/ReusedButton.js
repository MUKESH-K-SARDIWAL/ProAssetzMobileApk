import { View, Text, StyleSheet } from "react-native";
import React from "react";

export const ReuseButton = (props) => {
    return (
        <View style={{ width: "100%", justifyContent: 'center', alignItems: 'center' }}>
            <Text
                style={{
                    width: props.width,
                    alignSelf: "center",
                    backgroundColor: props.backgroundColor,
                    textAlign: "center",
                    paddingVertical: 14,
                    borderRadius: 5,
                    color: props.color,
                }}
            >
                {props.text}
            </Text>
        </View>
    );
};