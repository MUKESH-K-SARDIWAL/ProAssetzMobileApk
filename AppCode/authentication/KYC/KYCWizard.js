import { Formik } from 'formik';
import * as yup from 'yup';
import React, { useEffect, useState } from 'react'
import { Image, KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text,  View } from 'react-native';
import { colors } from '../../constants/colors';
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { Caption, Menu, Subheading,TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { PAStyle} from '../../shared/ProAssetzCSS/ProAssetzcss';
import { SelectList } from 'react-native-dropdown-select-list'
import axios from 'axios';
import StyledText from '../../shared/StyleText';
export function KYCWizard() {
    const [currStep, setCurrStep] = useState(1);
    const[pageNumber,setpageNumber]=useState(1);    
    const [headingIndex, setHeadingIndex] =useState(1)
    const [parentState, setParentHandlre] = useState({
            first_name:'',
            last_name: '',
            email: '',
            custom_user_id: '',
            date: '',
            document_No: '',
            address: '',
            phone:'',
            national_id: '',
            pincode: '',
            city: '',
            state: '',
            country: '',

    })
  
    const parentHandlre = (parentState) => {
      setParentHandlre(parentState)
      console.log(parentState)
    }

  useEffect(() => {
    renderStep(currStep);
  }, [currStep]);
  const renderStep = (index) => {
    switch (index) {
      case 0:
        return <UserForm1 moveStep={setCurrStep} currentIndex={setpageNumber} parentData={parentHandlre}/>;
      case 1:
        return <UserForm2 moveStep={setCurrStep} currentIndex={setpageNumber} myheading={setHeadingIndex}/>;
      case 2:
        return <UserForm3 moveStep={setCurrStep} myheading={headingIndex} />;
      case 3:
        // return <UserForm3 moveStep={setCurrStep} />;
      case 4:
        // return <UserForm3 moveStep={setCurrStep} />;      
      
    }
  };
  return (

    <KeyboardAvoidingView style={[PAStyle.outerContainer,PAStyle.width]}>
      <Header position={pageNumber}/>
      <SubHeadingOrCapiton headingIndex={headingIndex}/>
      <ScrollView>
       {renderStep(currStep)}
      </ScrollView>      
    </KeyboardAvoidingView>
    
  )
}
function SubHeadingOrCapiton({headingIndex}){
    return(
       <>
            <Subheading style={PAStyle.sub}>
            {headingIndex === 0  ? 'Basic information' : 'Upload Document'}
            </Subheading>
            <Caption style={PAStyle.caption}>
                {headingIndex === 0 
                ? 'Verify Your details as per your document'
                : 'Upload clear JPG/PNG Files upto 5MB'}
            </Caption>
       </>
    )
}
function Header({ position }) {
    return (
      <View style={PAStyle.headerContainer}>
        <View style={PAStyle.stepCon}>
          <View style={PAStyle.stepWrapper}>
                <View style={position !== 0 ? PAStyle.stepLineActive : PAStyle.stepLine} />
                <View style={PAStyle.roundShapeActive}></View>
                <Text style={[PAStyle.stepTextActive]}>Personal Details</Text>
          </View>
          <View style={PAStyle.stepWrapper}>
                <View style={position === 2 ? PAStyle.stepLine2Active : PAStyle.stepLine2} />
                <View style={position === 1 || position === 2 ? PAStyle.roundShapeActive : PAStyle.roundShape} />
                <Text style={position === 1 || position === 2 ? PAStyle.stepTextActive : PAStyle.stepText}>
                    KYC Details
                </Text>
          </View>
          <View style={PAStyle.stepWrapper}>
                <View style={ position === 2 ? PAStyle.roundShapeActive : PAStyle.roundShape} />
                <Text style={position === 2 ? PAStyle.stepTextActive : PAStyle.stepText}>KYC Documents</Text>
          </View>
        </View>
      </View>
    );
  }
function UserForm1(props){
  
    const formSchema = yup.object({
        first_name: yup.string().required('First name is required'),
        last_name: yup.string().required('Last name is required'),
        email: yup.string().required('Email is required'),
        custom_user_id:yup.string().required('Customr user id is required')
      });
    return(
        <Formik
            initialValues={{
            first_name:'',
            last_name: '',
            email: '',
            custom_user_id: '',
            }}
            validationSchema={formSchema}
            onSubmit={(values) => {
            console.log('sub', values);
            }}>
            {({ setValues, handleChange, handleBlur, handleSubmit, values, touched, errors }) => (
             
                <KeyboardAvoidingView style={{paddingTop:10,...PAStyle.outerContainer}}>
                <View
                        style={
                        touched.first_name && errors.first_name
                            ? { ...PAStyle.errorWrapper }
                            : { ...PAStyle.inputWrapper }
                        }>
                        <TextInput
                            mode="flat"
                            underlineColor="transparent"
                            activeUnderlineColor="transparent"
                            style={PAStyle.input}
                            color="#686868"
                            value={values.first_name}
                            placeholderTextColor={colors.darkgreytxt}
                            onChangeText={handleChange('first_name')}
                            onBlur={handleBlur('first_name')}
                            label={<StyledText labelText="First Name" />}
                            placeholder={'  First Name'}
                            theme={{ colors: { text: '#fff' } }}
                        />
                </View>
                <Text style={{ color: '#DC3030',paddingLeft:20,paddingTop:5 }}>{touched.first_name && errors.first_name}</Text>
                <View
                    style={
                        touched.last_name && errors.last_name
                        ? { ...PAStyle.errorWrapper }
                        : { ...PAStyle.inputWrapper }
                    }>
                    <TextInput
                        mode="flat"
                        underlineColor="transparent"
                        activeUnderlineColor="transparent"
                        style={PAStyle.input}
                        value={values.last_name}
                        onChangeText={handleChange('last_name')}
                        onBlur={handleBlur('last_name')}
                        color="#686868"
                        placeholderTextColor={colors.darkgreytxt}
                        placeholder={"  Last Name"}
                        label={<StyledText labelText="Last Name" />}
                        theme={{ colors: { text: '#fff' } }}
                    />
                </View>
                <Text style={{ color: '#DC3030',paddingLeft:20,paddingTop:5}}>{touched.last_name && errors.last_name}</Text>
                <View
                style={
                    touched.email && errors.email
                    ? { ...PAStyle.errorWrapper }
                    : { ...PAStyle.inputWrapper }
                }>
                <TextInput
                    mode="flat"
                    underlineColor="transparent"
                    activeUnderlineColor="transparent"
                    style={PAStyle.input}
                    color="#686868"
                    value={values.email}
                    placeholderTextColor={colors.darkgreytxt}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    placeholder={"  Email ID"}
                    label={<StyledText labelText="Email Id" />}
                    theme={{ colors: { text: '#fff' } }}
                />
                </View>
                <Text style={{ color: '#DC3030',paddingLeft:20,paddingTop:5}}>{touched.email && errors.email}</Text>
                <View style={[PAStyle.inputWrapper, PAStyle.mb2]}>
                <TextInput
                    mode="flat"
                    underlineColor="transparent"
                    activeUnderlineColor="transparent"
                    style={PAStyle.input}
                    color="#686868"
                    value={values.custom_user_id}
                    placeholderTextColor={colors.darkgreytxt}
                    onChangeText={handleChange('custom_user_id')}
                    onBlur={handleBlur('custom_user_id')}
                    placeholder={"ProAsstez Id"}
                    label={<StyledText labelText="ProAsstez Id" />}
                    theme={{ colors: { text: '#fff' } }}
                />
                </View>
            
                <Button
                style={PAStyle.button}
                onPress={() => {props.currentIndex(1),props.moveStep(1),props.parentData(values)}}
                handleSubmit={handleSubmit}
                 >
                    <Text
                        style={
                        {
                            fontSize: 20,
                            textAlign: 'center',
                            textTransform: 'capitalize',
                            color: colors.white
                        }
                        }>
                        Next
                    </Text>
              </Button>
              </KeyboardAvoidingView>
            
        )}
        </Formik>
        
    )
}
function UserForm2(props){
  const formSchema = yup.object({
    date: yup.string().required('Date of birth is required'),
    phone: yup.string().min(10, '10 Digits Required').max(10, '10 Digits Required').required('Phone no is required'),
    address: yup.string().required('Address is required'),
    national_id: yup.string().required('National ID is required'),
    pincode: yup.string().required('Pin code is required'),
    city: yup.string().required('City is required'),
    state: yup.string(),
    document_No:yup.string().required('Document no is required'),
    country: yup.string().required('country is required'),
  });
  
  const [selected, setSelected] = React.useState("");
  const data = [
      {key:'1', value:'India'},
      {key:'2', value:'Pakistan'},
      {key:'3', value:'Sri Lanka'},
      {key:'4', value:'Russia'},
      {key:'5', value:'Ukraine'},
      {key:'6', value:'New Zealand'},
      {key:'7', value:'China'},
      {key:'8', value:'Japan'},
  ]
  const [cons, setCons] = React.useState([]);

  React.useEffect(() => {
    axios
      .get('https://www.proassetz.com/api/v1/country-list/')
      .then(function (response) {
        let temp = response.data.map((el) => {
          return el.name;
        });
        setCons(temp);
      })
      .catch(function (error) {
        alert(error);
        console.log(error);
      });
  }, []);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
     alert("A date has been picked: ", date);
    hideDatePicker();
  };
   function formatDate(date) {
     var d = new Date(date),
       month = '' + (d.getMonth() + 1),
       day = '' + d.getDate(),
       year = d.getFullYear();

     if (month.length < 2) {
       month = '0' + month;
     }
     if (day.length < 2) {
       day = '0' + day;
     }

     return [year, month, day].join('-');
   }
   const [conSelected, setconSelected] = React.useState('');
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  const [visible1, setVisible1] = React.useState(false);

  const openMenu1 = () => setVisible1(true);

  const closeMenu1 = (c) => {
    setVisible1(false);
    setValues({ ...values, country: c });
    handleChange('country')(c);
    handleBlur('country');
  };
  return(
    <KeyboardAvoidingView style={[PAStyle.outerContainer,PAStyle.width]}>
       
      <Formik
        initialValues={{
          date: '',
          document_No: '',
          address: '',
          phone:'',
          national_id: '',
          pincode: '',
          city: '',
          state: '',
          country: '',
        }}
        validationSchema={formSchema}
        onSubmit={(values) => {
          console.log('sub', values);
          sendBasicForm(values);
        }}>
        {({ setValues, handleChange, handleBlur, handleSubmit, values, touched, errors }) => (
          <>
               <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
                <View 
                      style={
                        touched.date && errors.date
                          ? { ...PAStyle.errorWrapper,position:'relative'}
                          : { ...PAStyle.inputWrapper,position:'relative',}
                      }
                >
                  <TextInput
                    mode="flat"
                    underlineColor="transparent"
                    activeUnderlineColor="transparent"
                    style={PAStyle.input}
                    value={values.date}
                    onChangeText={handleChange('date')}
                    onBlur={handleBlur('date')}
                    color="#686868"
                    placeholderTextColor={colors.darkgreytxt}
                    placeholder={"DD/MM/YYYY"}
                    theme={{ colors: { text: '#fff' } }}
                  />
                  <Pressable
                        style={{top:'15%',
                        left:'85%',
                        zIndex:10,
                        position:'absolute'}}
                        onPress={()=>{showDatePicker}}
                  >
                    <Image
                        source={require('../../../assets/calendar-icon.png')}
                        style={{
                        borderRadius: 0,
                        width: 30,
                        height: 30,
                        borderWidth: 2,
                        borderColor:'#424040',
                        }}
                        
                        />
                  </Pressable>
                 
                </View>
             <Text style={{ color: 'crimson',paddingLeft:20  }}>{touched.date && errors.date}</Text>

             <View 
                      style={
                        touched.document_No && errors.document_No
                          ? { ...PAStyle.errorWrapper}
                          : { ...PAStyle.inputWrapper,}
                      }
                >
                  <TextInput
                    mode="flat"
                    underlineColor="transparent"
                    activeUnderlineColor="transparent"
                    style={PAStyle.input}
                    value={values.document_No}
                    onChangeText={handleChange('document_No')}
                    onBlur={handleBlur('document_No')}
                    color="#686868"
                    placeholderTextColor={colors.darkgreytxt}
                    placeholder={"Enter Document No"}
                    theme={{ colors: { text: '#fff' } }}
                  />
                </View>
             <Text style={{ color: 'crimson',paddingLeft:20  }}>{touched.document_No && errors.document_No}</Text>
            
             <View style={{...PAStyle.rowCon,}}>
                <View
                  style={{
                    width: '49%',
                    marginLeft:0,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    
                  }}>
                  <SelectList 
                          setSelected={(val) => setSelected(val)} 
                          data={data} 
                          save="value"
                          onChangeText={handleChange('country')}
                          onBlur={handleBlur('country')}
                          contentStyle={{
                          width: '100%',
                          flexDirection: 'row-reverse',
                          height: 50,
                          color: 'red',
                          borderRadius:5
                          }}
                          boxStyles={{
                            width:'70%',
                            color:'#fff',
                             backgroundColor: '#424141',
                          }}
                          dropdownStyles={{
                            width:'70%',
                            color:'#fff',
                             backgroundColor: '#424141',
                          }}
                          disabledItemStyles={{
                             width:'70%',
                             color:'#fff',
                              backgroundColor: '#424141',
                          }}
                          inputStyles={{
                            width:'100%',
                            color:'#fff',
                             backgroundColor: '#424141',
                          }}
                          style={{
                           
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100% !important',
                            borderRadius:5
                          }}
                      />

                  <Text style={{ color: 'crimson' }}>{touched.country && errors.country}</Text>
                </View>
                <View
                  style={{
                    width: '50%',
                    marginTop: -2,
                    marginRight: 14,
                    marginLeft: -7,
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <View style={PAStyle.inputWrapper}>
                    <TextInput
                      mode="flat"
                      underlineColor="#424040"
                      activeUnderlineColor="#424040"
                      style={{ ...PAStyle.input, top: 3 }}
                      color="#686868"
                      onChangeText={handleChange('state')}
                      onBlur={handleBlur('state')}
                      placeholder={"Enter state"}
                      placeholderTextColor={colors.darkgreytxt}
                      theme={{ colors: { text: '#fff' } }}
                    />
                    <Text style={{ color: 'crimson' }}>{touched.state && errors.state}</Text>
                  </View>
                </View>
      
      
             </View>
             <View 
                    style={
                      touched.address && errors.address
                        ? { ...PAStyle.errorWrapper}
                        : { ...PAStyle.inputWrapper,}
                    }
                >
                  <TextInput
                    mode="flat"
                    underlineColor="transparent"
                    activeUnderlineColor="transparent"
                    style={PAStyle.input}
                    value={values.address}
                    placeholderTextColor={colors.darkgreytxt}
                    onChangeText={handleChange('address')}
                    onBlur={handleBlur('address')}
                    color="#686868"
                    placeholder={"Enter Your Address"}
                    theme={{ colors: { text: '#fff' } }}
                  />
                </View>
             <Text style={{ color: 'crimson',paddingLeft:20  }}>{touched.address && errors.address}</Text>
             <View style={PAStyle.rowCon}>
        <View
          style={{
            width: '48%',
            flexDirection: 'row',
            justifyContent: 'center',
            marginLeft:12
          }}>
          <View style={PAStyle.inputWrapper}>
            <TextInput
              mode="flat"
              underlineColor="#424040"
              activeUnderlineColor="#424040"
              style={PAStyle.input}
              color="#686868"
              placeholderTextColor={colors.darkgreytxt}
              onChangeText={handleChange('city')}
              onBlur={handleBlur('city')}
              placeholder={"Enter City"}
              theme={{ colors: { text: '#fff' } }}
            />
            <Text style={{ color: 'crimson' }}>{touched.city && errors.city}</Text>
          </View>
        </View>
        <View
          style={{
            width:' 47%',
            flexDirection: 'row',
            justifyContent: 'center',
            marginLeft: -6,
            marginRight: 11,
          }}>
          <View style={PAStyle.inputWrapper}>
            <TextInput
              mode="flat"
              underlineColor="#424040"
              activeUnderlineColor="#424040"
              style={PAStyle.input}
              color="#686868"
              placeholderTextColor={colors.darkgreytxt}
              keyboardType='phone-pad'
              onChangeText={handleChange('pincode')}
              onBlur={handleBlur('pincode')}
              placeholder={"Enter Pin Code"}
              theme={{ colors: { text: '#fff' } }}
            />
            <Text style={{ color: 'crimson' }}>{touched.pincode && errors.pincode}</Text>
          </View>
        </View>
             </View>
             <View 
                      style={
                        touched.phone && errors.phone
                          ? { ...PAStyle.errorWrapper}
                          : { ...PAStyle.inputWrapper,}
                      }
                >
                  <TextInput
                    mode="flat"
                    underlineColor="transparent"
                    activeUnderlineColor="transparent"
                    style={PAStyle.input}
                    value={values.phone}
                    onChangeText={handleChange('phone')}
                    onBlur={handleBlur('phone')}
                    color="#686868"
                    placeholderTextColor={colors.darkgreytxt}
                    placeholder={"Enter Phone No"}
                    theme={{ colors: { text: '#fff' } }}
                  />
              </View>
             <Text style={{ color: 'crimson',paddingLeft:20  }}>{touched.phone && errors.phone}</Text>

             <View style={{ display: 'flex', flexDirection: 'row' }}>
                  <Button
                    // disabled={disabled}
                    dark={false}
                    style={PAStyle.button}
                    onPress={() => {props.currentIndex(2),props.moveStep(2),handleSubmit,props.myheading(1)}}
                    compact={false}
                    contentStyle={{
                      alignSelf: 'stretch',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      padding: 0,
                      margin: 0,
                    }}
                    mode="contained">
                    <Text
                      style={
                        {
                            fontSize: 20,
                            
                            textAlign: 'center',
                            textTransform: 'capitalize',
                            color: '#473200',
                          }
                      }>
                     Next
                    </Text>
                  </Button>
                </View> 
          </>
      
        )}
      </Formik>
    </KeyboardAvoidingView>
  )
}
function UserForm3({moveStep,currentIndex,myheading}){
  const [selfie,setSelfie]=useState('');
  const [checked,setChecked]=useState(true);
  const [checked2,setChecked2]=useState(false);
  const [frontSide, setfrontSide] = useState('');
  const [backSide, setbackSide] = useState('');
  const [docAndSelfie, setdocAndSelfie] = useState('');
  const [disabled, setDisabled] =useState(true)
  const formSchema = yup.object({
    selfie: yup.string().required('Upload selfie '),
    front_side: yup.string().required('Upload Front Side Image'),
    back_side: yup.string().email().required('Upload back Side Image' ),
    selfie_with_doc:yup.string().required('Upload Selfie with Document')
  });

  return(
    <View style ={PAStyle.outerContainer}>
      <Formik
            initialValues={{
              selfie:'',
              front_side:'',
              back_side:'',
              selfie_with_doc:''
            }}
           validationSchema={formSchema}
            onSubmit={(values) => {
            console.log('sub', values);
            sendBasicForm(values);
           }}>
            {({ setValues, handleChange, handleBlur, handleSubmit, values, touched, errors }) => (
                <ScrollView style={{ marginTop: 10 }}>
                <View style={{ ...PAStyle.inputWrapper, justifyContent: 'space-between',position:'relative' }}>
                    {
                      selfie !== '' ? (
                          <Image
                          source={{selfie}}
                          style={{
                            borderRadius: 0,
                            width: 40,
                            height: 40,
                            borderWidth: 2,
                            borderColor:'#424040',
                            top:'18%',
                            zIndex:10,
                            position:'absolute'
                            }}
                          />
                        ) : (
                        <Image
                          source={require('../../../assets/user.png')}
                          style={{
                            borderRadius: 0,
                            width: 40,
                            height: 40,
                            borderWidth: 2,
                            borderColor:'#424040',
                            top:'18%',
                            zIndex:10,
                            position:'absolute'
                            }}
                          />
                      )
                    }
                <TextInput
                    mode="flat"
                    underlineColor="#424040"
                    activeUnderlineColor="#424040"
                    style={{ ...PAStyle.input, marginVertical: 5, zIndex:1, paddingLeft:30}}
                    color="#686868"
                    onChangeText={handleChange('selfie')}
                    onBlur={handleBlur('selfie')}
                    showSoftInputOnFocus={false}
                    placeholder={"Upload Selfie"}
                    placeholderTextColor={colors.darkgreytxt}
                    
                />
                { 
                selfie !== '' ? (
                  <View style={{backgroundColor:'green', width:25,height:25,borderRadius:25,position:'absolute',top:'30%', left:'89%',zIndex:11,}}></View>
                ):(
                  <View style={{backgroundColor:'#6E6E6E', width:25,height:25,borderRadius:25,position:'absolute',top:'30%', left:'89%',zIndex:11,}}></View>
                )
                }
                </View>
                <Text style={{ color: 'red' }}>{touched.selfie && errors.selfie}</Text>
                 <Caption style={PAStyle.caption}>Select Document Type to upload</Caption>
                 <View style={PAStyle.rowCon}>
                      <View
                        style={{
                          width: '50%',
                          marginLeft:17,
                          flexDirection: 'row',
                          justifyContent: 'flex-start',
                          alignItems: 'center',
                        }}>
                       <BouncyCheckbox
                                size={16}
                                fillColor={colors.darkOrange}
                                unfillColor="#FFFFFF"
                                iconStyle={{ borderColor: colors.yellowDark,borderRadius:2,marginTop:10,marginLeft:10 }}
                                innerIconStyle={{ borderWidth: 0 }}
                                onPress={() => {
                                    setChecked(!checked);
                                    setChecked2(!checked2);
                                  }}
                                /> 
                        
                        <Text style={{ color: '#6E6E6E', marginLeft: 4 }}>Passport</Text>
                      </View>
                      <View
                        style={{
                          width: '50%',
                          marginLeft:17,
                          flexDirection: 'row',
                          justifyContent: 'flex-start',
                          alignItems: 'center',
                        }}>
                      <BouncyCheckbox
                                size={16}
                                fillColor={colors.darkOrange}
                                unfillColor="#FFFFFF"
                                iconStyle={{ borderColor: colors.yellowDark,borderRadius:2,marginTop:10,marginLeft:10 }}
                                innerIconStyle={{ borderWidth: 0 }}
                                onPress={() => {
                                    setChecked2(!checked2);
                                    setChecked(!checked);
                                  }}
                                />   
                        
                        <Text style={{ color: '#6E6E6E', marginLeft: 4 }}>Aadhar Card</Text>
                      </View>
                  </View>

                <View style={{ ...PAStyle.inputWrapper, justifyContent: 'space-between',position:'relative' }}>
                    {
                      frontSide !== '' ? (
                          <Image
                          source={{frontSide}}
                          style={{
                            borderRadius: 0,
                            width: 40,
                            height: 40,
                            borderWidth: 2,
                            borderColor:'#424040',
                            top:'18%',
                            zIndex:10,
                            position:'absolute'
                            }}
                          />
                        ) : (
                        <Image
                          source={require('../../../assets/driving-license.png')}
                          style={{
                            borderRadius: 0,
                            width: 40,
                            height: 40,
                            borderWidth: 2,
                            borderColor:'#424040',
                            top:'18%',
                            zIndex:10,
                            position:'absolute'
                            }}
                          />
                      )
                    }
                <TextInput
                    mode="flat"
                    underlineColor="#424040"
                    activeUnderlineColor="#424040"
                    style={{ ...PAStyle.input, marginVertical: 5, zIndex:1, paddingLeft:30}}
                    color="#fff"
                    onChangeText={handleChange('front_side')}
                    onBlur={handleBlur('front_side')}
                    showSoftInputOnFocus={false}
                    placeholder={"Upload Document Front"}
                    placeholderTextColor={colors.darkgreytxt}
                    
                />
                { 
                frontSide !== '' ? (
                  <View style={{backgroundColor:'green', width:25,height:25,borderRadius:25,position:'absolute',top:'30%', left:'89%',zIndex:11,}}></View>
                ):(
                  <View style={{backgroundColor:'#6E6E6E', width:25,height:25,borderRadius:25,position:'absolute',top:'30%', left:'89%',zIndex:11,}}></View>
                )
                }
                </View>
                <Text style={{ color: 'red' }}>{touched.frontSide && errors.frontSide}</Text>
                <View style={{ ...PAStyle.inputWrapper, justifyContent: 'space-between',position:'relative',marginTop:25 }}>
                  {
                      backSide !== '' ? (
                          <Image
                          source={{backSide}}
                          style={{
                            borderRadius: 0,
                            width: 40,
                            height: 40,
                            borderWidth: 2,
                            borderColor:'#424040',
                            top:'18%',
                            zIndex:10,
                            position:'absolute'
                            }}
                          />
                        ) : (
                        <Image
                          source={require('../../../assets/driving-license.png')}
                          style={{
                            borderRadius: 0,
                            width: 40,
                            height: 40,
                            borderWidth: 2,
                            borderColor:'#424040',
                            top:'18%',
                            zIndex:10,
                            position:'absolute'
                            }}
                          />
                      )
                    }
                <TextInput
                    mode="flat"
                    underlineColor="#424040"
                    activeUnderlineColor="#424040"
                    style={{ ...PAStyle.input, marginVertical: 5, zIndex:1, paddingLeft:30}}
                    color="#fff"
                    onChangeText={handleChange('backSide')}
                    onBlur={handleBlur('backSide')}
                    showSoftInputOnFocus={false}
                    placeholder={"Upload Document Back"}
                    placeholderTextColor={colors.darkgreytxt}
                    
                />
                { 
                backSide !== '' ? (
                  <View style={{backgroundColor:'green', width:25,height:25,borderRadius:25,position:'absolute',top:'30%', left:'89%',zIndex:11,}}></View>
                ):(
                  <View style={{backgroundColor:'#6E6E6E', width:25,height:25,borderRadius:25,position:'absolute',top:'30%', left:'89%',zIndex:11,}}></View>
                )
                }
                </View>
                <Text style={{ color: 'red' }}>{touched.back_side && errors.back_side}</Text>
                <Subheading style={{...PAStyle.sub,marginTop:15}}>Upload Document</Subheading>
                <Caption style={PAStyle.caption}>Your details as it appears on your documents</Caption>
                <View style={{ ...PAStyle.inputWrapper, justifyContent: 'space-between',position:'relative',marginTop:25 }}>
                  {
                      docAndSelfie !== '' ? (
                          <Image
                          source={{docAndSelfie}}
                          style={{
                            borderRadius: 0,
                            width: 40,
                            height: 40,
                            borderWidth: 2,
                            borderColor:'#424040',
                            top:'18%',
                            zIndex:10,
                            position:'absolute'
                            }}
                          />
                        ) : (
                        <Image
                          source={require('../../../assets/driving-license.png')}
                          style={{
                            borderRadius: 0,
                            width: 40,
                            height: 40,
                            borderWidth: 2,
                            borderColor:'#424040',
                            top:'18%',
                            zIndex:10,
                            position:'absolute'
                            }}
                          />
                      )
                    }
                <TextInput
                    mode="flat"
                    underlineColor="#424040"
                    activeUnderlineColor="#424040"
                    style={{ ...PAStyle.input, marginVertical: 5, zIndex:1, paddingLeft:30}}
                    color="#fff"
                    onChangeText={handleChange('docAndSelfie')}
                    onBlur={handleBlur('docAndSelfie')}
                    showSoftInputOnFocus={false}
                    placeholder={"Upload Document Back"}
                    placeholderTextColor={colors.darkgreytxt}
                    
                />
                { 
                docAndSelfie !== '' ? (
                  <View style={{backgroundColor:'green', width:25,height:25,borderRadius:25,position:'absolute',top:'30%', left:'89%',zIndex:11,}}></View>
                ):(
                  <View style={{backgroundColor:'#6E6E6E', width:25,height:25,borderRadius:25,position:'absolute',top:'30%', left:'89%',zIndex:11,}}></View>
                )
                }
                </View>
                <Text style={{ color: 'red' }}>{touched.docAndSelfie && errors.docAndSelfie}</Text>


                <Button
                        disabled={disabled}
                        dark={false}
                        style={disabled ? PAStyle.FormdisabledButton : PAStyle.Formbutton}
                        // onPress={}
                        compact={false}
                        contentStyle={{
                          justifyContent: 'center',
                          textAlign: 'center',
                          padding: 0,
                          margin: 0,
                        }}
                        mode="contained">
                        <Text
                          style={
                            disabled
                              ? {
                                fontSize: 20,
                                
                                textAlign: 'center',
                                textTransform: 'capitalize',
                              }
                              : {
                                fontSize: 20,
                                textAlign: 'center',
                                textTransform: 'capitalize',
                                color: '#473200',
                              }
                          }>
                          Submit
                        </Text>
              </Button>
                </ScrollView>
                
            )}
      </Formik>
    </View>
  )
}


