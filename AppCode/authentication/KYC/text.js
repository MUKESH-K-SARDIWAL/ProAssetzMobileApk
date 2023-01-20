import React, { useState } from 'react'
import { Button,  View ,PermissionsAndroid,Image} from 'react-native'
import { PAStyle } from '../../shared/ProAssetzCSS/ProAssetzcss';

export default function TextDatePicer(){
   const [cameraPhoto, setCameraPhoto]=useState()
    
    const selectImageFormGallery=()=>{
      
    }

    return (
      <View style={[PAStyle.outerContainer,PAStyle.backGround]}>
            <View style={{width:200,marginHorizontal:'auto'}}>
            <Button  title="OPEN CAMERA" 
            onPress={
              selectImageFormGallery
            }
            />
            </View>
            <Image source={{uri:cameraPhoto}} />
            
      </View>
    )
}