import { View, Text, Platform, StyleSheet } from "react-native";
import React , {useState}from "react";
import DownIcon from "react-native-vector-icons/AntDesign";
import SelectDropdown from 'react-native-select-dropdown'
import { colors } from "../constants/colors";

const DropDown = (props) => {
    const [open,setOpen]=useState(false)
    const [value, setValue] = useState(1);
     const [items, setItems] = useState();
    

    return (
        <SelectDropdown
                data={[
                      "Watchlist 1",
                      "Watchlist 2",
                      "Watchlist 3",
                      "Watchlist 4",
                ]}
                buttonStyle={styles.DropDownPick}
                buttonTextStyle={styles.colortext}
                dropdownStyle={styles.bgColor}
                selectedRowTextStyle={styles.textSize}
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item
                }}
        />
    );
};
const styles = StyleSheet.create({
    textSize:{
        fontSize:18
    },
    DropDownPick:{
        width: '63%',
        marginLeft:8,
        minHeight:25,
        height:25,
        backgroundColor: colors.darkgrey,   
        borderRadius:5,
        borderWidth:1,
        borderColor:colors.darkOrange,
    
        
    },
    colortext:{
        color:colors.white
    },
    bgColor:{
        backgroundColor:colors.bgColor,
        color:colors.white
    }
})
export default DropDown;