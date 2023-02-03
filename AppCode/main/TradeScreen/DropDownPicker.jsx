import React from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { colors } from "../../constants/colors";
import { Platform } from "react-native";
import { Image } from "react-native";
const DropDown = (props) => {
    
  return (
    <DropDownPicker
      open={props.open}
      value={props.value}
      items={props.items}
      setOpen={props.setOpen}
      setValue={props.setValue}
      setItems={props.setItems}
      onChangeValue={props.onChangeValue}
      containerStyle={{
        width: "85%",
      }}
      ArrowDownIconComponent={({ style }) => (
        <Image style={{width:15,height:15,marginTop:6,marginLeft:0}} source={require('../../../assets/caret-down.png')}/>
      )}
      ArrowUpIconComponent={({ style }) => (
        <Image style={{width:15,height:15,marginTop:6,marginLeft:0, transform: [{rotateX: '180deg'}],}} source={require('../../../assets/caret-down.png')}/>
      )}
      style={{
        borderWidth: 0,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.bgColor,
      }}
      selectedItemLabelStyle={{
        color: "#FFB916",
      }}
      labelStyle={{
        color: colors.white,
        fontSize:23,
      }}
    //   showTickIcon={true}
      dropDownContainerStyle={{
        backgroundColor: "white",
        position:'absolute',
        elevation: Platform.OS === "android" ? 100 : 0,
      }}
      listItemLabelStyle={{
        color: "#B3B3B3",
        
      }}
    />
  );
};

export default DropDown;
