import { useNavigation } from '@react-navigation/native';
import React, { useEffect,useState } from 'react'
import { Image,Text, TouchableOpacity, View } from 'react-native';
import { Pressable } from 'react-native';
import { PAStyle } from '../../shared/ProAssetzCSS/ProAssetzcss';


export function SplashScreen(){
  const [currStep, setCurrStep] = useState(0);
  useEffect(() => {
    renderStep(currStep);
  }, [currStep]);
  const goToLogin = () => {
    props.navigation.navigate('LoginScreen');
  };
  const renderStep = (index) => {
    switch (index) {
      case 0:
        return <Screen1 moveStep={setCurrStep} />;
      case 1:
        return <Screen2 moveStep={setCurrStep} />;
      case 2:
        return <Screen3 moveStep={setCurrStep} />;
      default:
        return <Screen3 moveStep={setCurrStep} nav={() => {goToLogin}} />;
    }
  };
  return(
    <View style={[PAStyle.backGround,PAStyle.flex]}>
       <Logo />
       {renderStep(currStep)}
       <PageDots index={currStep}/>
    </View>
   
  )
}
function Screen1({moveStep}){
  return(
    <View style={[PAStyle.innerContainer]}>
         <Image style={{width: 100, height:120,marginLeft:-60}} resizeMode='contain' source={require('../../../assets/rupee.png')} />
         <Text style={{ ...PAStyle.regularHeading, position: 'relative', top: '-2%',left:'-17%' }}>
          Complete {'\n'}
              <Text style={PAStyle.regularHeading}>Your</Text>
              <Text style={PAStyle.boldHeading}>
                {' '}
                KYC{'\n'}
                <Text style={PAStyle.regularHeading}>In </Text>2 Mins
                </Text>
          </Text>
        <TouchableOpacity onPress={() => moveStep(1)}>
          <View style={{ alignItems: 'center' }}>
            <Image source={require('../../../assets/next.png')} style={{ height: 60, width: 60 }} />
          </View>
        </TouchableOpacity>
</View>
  )
}
function Screen2({moveStep}){
  return(
    <View style={PAStyle.innerContainer}>
         <Image style={{width: 100, height:120,marginLeft:-40}} resizeMode='contain' source={require('../../../assets/rupee.png')} />
         <Text style={{ ...PAStyle.regularHeading, position: 'relative', top: '-2%',left:'-10%' }}>
          Deposit 
              <Text style={PAStyle.regularHeading}></Text>
              <Text style={PAStyle.boldHeading}>
                {' '}
                INR{'\n'}
                ProAssetz
                </Text>
          </Text>
        <TouchableOpacity onPress={() => moveStep(2)}>
          <View style={{ alignItems: 'center' }}>
            <Image source={require('../../../assets/next.png')} style={{ height: 60, width: 60 }} />
          </View>
        </TouchableOpacity>
</View>
  )
}
function Screen3() {
  const navigation = useNavigation();
  return (
    <View style={PAStyle.innerContainer}>
      <Image style={{width: 100, height:120,marginLeft:-40}} resizeMode='contain' source={require('../../../assets/rupee.png')} />
      <Text style={{...PAStyle.boldHeading,marginLeft:'-10%'}}>
        Buy{' '}
        <Text style={{ ...PAStyle.regularHeading, fontSize: 50, }}>
          &
        </Text>{' '}
        Sell{'\n'}
        <Text style={PAStyle.regularHeading}>Crypto assets</Text>
      </Text>

      <Pressable style={PAStyle.button} 
    //   onPress={() => 
        // navigation.navigate('CreateAccountScreen')
        // }
        >
        <Text
          style={[PAStyle.getStarted,PAStyle.textAlign]}>
          Get Started
        </Text>
      </Pressable>
      <Text
        style={[PAStyle.AlAct,PAStyle.textAlign]}>
        Already have an account ?
      </Text>
      <Pressable 
      onPress={() => 
          navigation.navigate('LoginScreen')
        }
        >
        <Text
          style={[PAStyle.login,PAStyle.textAlign]}>
          Login
        </Text>
      </Pressable>
    </View>
  );
}
function Logo() {
  return (
    <View>
      <Image source={require('../../../assets/logo.png')} style={PAStyle.logo} />
    </View>
  );
}
function PageDots({index}){
  return(
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 80 }}>
    <View style={{...PAStyle.dots,backgroundColor: index === 0 ? '#E29224' : '#473200',}}>  
    </View>
    <View style={{...PAStyle.dots,backgroundColor: index === 1 ? '#E29224' : '#473200',}}>  
    </View>
    <View style={{...PAStyle.dots,backgroundColor: index === 2 ? '#E29224' : '#473200',}}>  
    </View>
    </View>
  )
}

