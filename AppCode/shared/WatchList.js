import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { ReuseButton } from "./ReusedButton";
import DropDown from "./DropDown";
import { colors } from "../../src/constants";

export const WatchList =(props)=>{
    
    const Data = [
        {
            img: require("../../assets/btcCoin.png"),
            txt: "Bitcoin",
            txt1: "BTC/INR",
            amount: "₹31,977,55,00",
            per: "+10%",
        },
        {
            img: require("../../assets/btcCoin.png"),
            txt: "Bitcoin",
            txt1: "BTC/INR",
            amount: "₹31,977,55,00",
            per: "+10%",
        },
        {
            img: require("../../assets/btcCoin.png"),
            txt: "Bitcoin",
            txt1: "BTC/INR",
            amount: "₹31,977,55,00",
            per: "+10%",
        },
        {
            img: require("../../assets/btcCoin.png"),
            txt: "Bitcoin",
            txt1: "BTC/INR",
            amount: "₹31,977,55,00",
            per: "+10%",
        },
        {
            img: require("../../assets/btcCoin.png"),
            txt: "Bitcoin",
            txt1: "BTC/INR",
            amount: "₹31,977,55,00",
            per: "+10%",
        },
        {
            img: require("../../assets/btcCoin.png"),
            txt: "Bitcoin",
            txt1: "BTC/INR",
            amount: "₹31,977,55,00",
            per: "+10%",
        },
    ];
    const ItemStyle = (props) => (
        <View style={styles.flatBox}>
            <View style={{ flexDirection: "row", alignItems: "center",}}>
                <Image source={props.item.img} style={{ top: "5%" ,width:40,height:40}} />
                <View style={{ paddingHorizontal: "5%" }}>
                    <Text style={{  color: '#FFF6E0' }}>
                        {props.item.txt}
                    </Text>
                    <Text style={{  color: "#A9A9A9" }}>
                        {props.item.txt1}
                    </Text>
                </View>
            </View>
            <View style={{ alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                <Text style={{  color: '#FFF6E0' }}>
                    {props.item.amount}
                </Text>
                <Text style={{  color: "#05976A" }}>
                    {props.item.per}
                </Text>
            </View>
        </View>
    );
    return(
        <View style={styles.container}>
            <View style={styles.WatchBox}>
            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{ color: '#FFF6E0', fontSize: 18 }}>
                Watchlist
                </Text>
                <DropDown style={{marginLeft:20}}/>
            </View>
            <ScrollView horizontal={true}>
              <FlatList data={Data} renderItem={ItemStyle} />
            </ScrollView>
            <TouchableOpacity style={{ marginVertical: "1%",width:100 }} activeOpacity={0.6}>
                <ReuseButton
                    width={"100%"}
                    backgroundColor={"#FFA629"}
                    color={"white"}
                    text={"More"}
                />
            </TouchableOpacity>

            
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#2C2B2B",
        width: "96%",
        alignSelf: "center",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#464646",
    },
    flatBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        // paddingRight: "10%",
        // paddingLeft: "5%",
        alignItems: "center",
        paddingVertical: "2%",
        width:275
    },
    WatchBox: {
        paddingVertical: "7%",
        paddingHorizontal: "5%",
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
});