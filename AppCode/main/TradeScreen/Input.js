import { View, Text, TextInput } from "react-native";
import React from "react";
import { colors } from "../../constants/colors";

const Input = (props) => {
  
  return (
    <View
      style={{ width: "100%", flexDirection: "row", alignItems: "center", borderWidth: .5, borderColor: "#99A6AF", alignSelf: "center", borderRadius: 5, height: 45, }}>
      <TextInput style={{ width: "80%", color: colors.white, paddingLeft: 15, }}
        defaultValue={props.value}
        value={props.valueFixied}
        onChangeText={props.onChangeText}
        onChange={props.onChange}
        keyboardType={"decimal-pad"}
      />
      <Text style={{ textAlign: "center", width: "20%", color: "#99A6AF" }}>
        {props.Btn}
      </Text>
    </View>
  );
};

export default Input;
