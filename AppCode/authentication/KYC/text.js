import React, { useState } from 'react'
import { Button,  View ,PermissionsAndroid,Image} from 'react-native'
import { PAStyle } from '../../shared/ProAssetzCSS/ProAssetzcss';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default function TextDatePicer(){
   const [cameraPhoto, setCameraPhoto]=useState()
    let options ={
      saveToPhotos:true,
      mediaType:'photo'
    }
    const selectImageFormGallery=async ()=>{
      const granted=await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA,);
      if (granted===PermissionsAndroid.RESULTS.GRANTED){
         const result = await launchCamera(options)
         setCameraPhoto(result.assets[0].uri)
      }
    }

    return (
      <View style={[PAStyle.outerContainer,PAStyle.backGround]}>
            <View>
            <Button  title="OPEN CAMERA" 
            onPress={()=>{
              selectImageFormGallery()
              console.log('press');
              

            }}
            style={{width:200}}
            />
            <Image source={{uri:cameraPhoto}} />
            </View>
      </View>
    )
}