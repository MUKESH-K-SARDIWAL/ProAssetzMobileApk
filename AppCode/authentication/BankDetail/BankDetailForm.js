import { ScrollView, PAStyleheet, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import { colors } from '../../constants/colors';
import { Formik } from 'formik';
import * as yup from 'yup';
import _ from 'lodash';
import { Snackbar,TextInput,Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import StyledText from '../../shared/StyleText';
import { PAStyle } from '../../shared/ProAssetzCSS/ProAssetzcss';

const formSchema = yup.object({
    bank_name: yup.string().required('Bank name is required'),
    bank_account_number: yup.string('bank account number is required').required(),
    confirm_bank: yup.string().oneOf([yup.ref('bank_account_number'), null], 'account no must match'),
    account_type: yup.string('account type').required(),
    mobile_number: yup.string().min(10, '10 Digits Required').max(10, '10 Digits Required').required('mobile no is required'),
    branch_name: yup.string().required('branch name is required'),
    upi_address: yup.string().required('upi is required'),
    ifsc_code: yup.string().required('IFSC is required'),
  });

  
const BankDetailsConfirm=(props)=>{
    const prevFormvalues = _.cloneDeep(props?.route?.params?.values);
    const navigation =useNavigation()
    return(
    <View style={[PAStyle.outerContainer,PAStyle.width]}>
      <Snackbar
        wrapperStyle={{ elevation: 3, zIndex: 3 }}
        style={{ elevation: 3, zIndex: 3 }}
        action={{
          label: 'Close',
        }}>
      </Snackbar>
      <Formik
        enableReinitialize={true}
        initialValues={prevFormvalues}
        validationSchema={formSchema}
        onSubmit={(values) => {
         // navigation.navigate('BankDocumentUploadScreen',{ prevFormvalues })
        }}>
        {({ handleChange, handleBlur, handleSubmit, values, touched, errors,isValid }) => (
                <View style={PAStyle.outerContainer}>
                        <ScrollView style={{ marginTop: 10 }}>
                        <View style={PAStyle.inputWrapper}>
                            <View style={PAStyle.rowCon}>
                            <View
                                style={{
                                width: '48%',
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                //   marginLeft:10
                                }}>
                                <View style={PAStyle.inputWrapper}>
                                <TextInput
                                    mode="flat"
                                    underlineColor="#424040"
                                    activeUnderlineColor="#424040"
                                    style={PAStyle.input}
                                    color="#fff"
                                    placeholder='mmmmm'
                                    onChangeText={handleChange('ifsc_code')}
                                    value={values.ifsc_code}
                                    onBlur={handleBlur('ifsc_code')}
                                    label={<StyledText labelText="IFSC Code" />}
                                    
                                />
                                <Text style={{ color: 'crimson' }}>
                                    {touched.ifsc_code && errors.ifsc_code}
                                </Text>
                                </View>
                            </View>
                            <View
                                style={{
                                    width: '48%',
                                    // margin:10,
                                flexDirection: 'row',
                                justifyContent: 'flex-end',
                                }}>
                                <View style={PAStyle.inputWrapper}>
                                <TextInput
                                    mode="flat"
                                    underlineColor="#424040"
                                    activeUnderlineColor="#424040"
                                    style={PAStyle.input}
                                    color="#fff"
                                    onChangeText={handleChange('bank_name')}
                                    onBlur={handleBlur('bank_name')}
                                    value={values.bank_name}
                                    label={<StyledText labelText="Bank Name" />}
                                    
                                />
                                <Text style={{ color: 'crimson' }}>
                                    {touched.bank_name && errors.bank_name}
                                </Text>
                                </View>
                            </View>
                            </View>
                            <View style={PAStyle.inputWrapper}>
                            <TextInput
                                mode="flat"
                                underlineColor="#424040"
                                activeUnderlineColor="#424040"
                                style={PAStyle.input}
                                color="#fff"
                                onChangeText={handleChange('bank_account_number')}
                                value={values.bank_account_number}
                                onBlur={handleBlur('bank_account_number')}
                                label={<StyledText labelText="Bank Account No" />}
                                
                            />
                            </View>
                        </View>
                        <Text style={{ color: 'crimson' }}>
                            {touched.bank_account_number && errors.bank_account_number}
                        </Text>
                        <View style={PAStyle.inputWrapper}>
                            <TextInput
                            mode="flat"
                            underlineColor="#424040"
                            activeUnderlineColor="#424040"
                            style={PAStyle.input}
                            color="#fff"
                            value={values.confirm_bank}
                            onChangeText={handleChange('confirm_bank')}
                            onBlur={handleBlur('confirm_bank')}
                            label={<StyledText labelText="Confirm Bank Account" />}
                            
                            />
                        </View>
                        <Text style={{ color: 'crimson' }}>
                            {touched.confirm_bank && errors.confirm_bank}
                        </Text>
                        <View style={PAStyle.rowCon}>
                            <View
                            style={{
                                width: '45%',
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                marginLeft:10
                            }}>
                            <View style={PAStyle.inputWrapper}>
                                <TextInput
                                mode="flat"
                                underlineColor="#424040"
                                activeUnderlineColor="#424040"
                                style={PAStyle.input}
                                color="#fff"
                                onChangeText={handleChange('branch_name')}
                                value={values.branch_name}
                                onBlur={handleBlur('branch_name')}
                                label={<StyledText labelText="Branch Name" />}
                                />
                                <Text style={{ color: 'crimson' }}>
                                {touched.branch_name && errors.branch_name}
                                </Text>
                            </View>
                            </View>
                            <View
                            style={{
                                width: '48%',
                                marginRight:10,
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                            }}>
                            <View style={PAStyle.inputWrapper}>
                                <TextInput
                                mode="flat"
                                underlineColor="#424040"
                                activeUnderlineColor="#424040"
                                style={PAStyle.input}
                                color="#fff"
                                onChangeText={handleChange('account_type')}
                                onBlur={handleBlur('account_type')}
                                label={<StyledText labelText="Account Type" />}
                                value={values.account_type}
                                />
                                <Text style={{ color: 'crimson' }}>
                                {touched.account_type && errors.account_type}
                                </Text>
                            </View>
                            </View>
                        </View>
                        <View style={PAStyle.inputWrapper}>
                            <TextInput
                            mode="flat"
                            underlineColor="#424040"
                            activeUnderlineColor="#424040"
                            style={PAStyle.input}
                            keyboardType='phone-pad'
                            color="#fff"
                            onChangeText={handleChange('mobile_number')}
                            onBlur={handleBlur('mobile_number')}
                            value={values.mobile_number}
                            label={<StyledText labelText="Mobile No" />}
                            />
                        </View>
                        <Text style={{ color: 'crimson' }}>
                            {touched.mobile_number && errors.mobile_number}
                        </Text>
                        <View style={PAStyle.inputWrapper}>
                            <TextInput
                            mode="flat"
                            underlineColor="#424040"
                            activeUnderlineColor="#424040"
                            style={PAStyle.input}
                            color="#fff"
                            onChangeText={handleChange('bank_name')}
                            onBlur={handleBlur('bank_name')}
                            value={values.bank_name}
                            label={<StyledText labelText="Name as on Bank Account" />}
                            
                            />
                        </View>
                        <Text style={{ color: 'crimson' }}>{touched.bank_name && errors.bank_name}</Text>
                        <View style={PAStyle.inputWrapper}>
                            <TextInput
                            mode="flat"
                            underlineColor="#424040"
                            activeUnderlineColor="#424040"
                            style={PAStyle.input}
                            color="#fff"
                            onChangeText={handleChange('upi_address')}
                            value={values.upi_address}
                            onBlur={handleBlur('upi_address')}
                            label={<StyledText labelText="UPI Address with Bank" />}
                            
                            />
                        </View>
                        <Text style={{ color: 'crimson' }}>{touched.upi_address && errors.upi_address}</Text>
                        </ScrollView>
                        <Button
                                                disabled={!isValid}
                                                style={{
                                                    backgroundColor:colors.yellowLg,
                                                    width:'50%',
                                                    color:colors.white,
                                                    borderRadius:10,
                                                    // paddingHorizontal:10,
                                                    // marginTop:60,
                                                    marginLeft:'auto',
                                                    marginRight:'auto',
                                                    textColor:colors.white
                                                }}
                                                contentStyle={{ paddingVertical: 4,textColor:colors.white}}
                                                textColor={colors.white}
                                                onPress={handleSubmit}
                                                mode="contained"
                                                title='Next'
                        >Next</Button>
                </View>
        )}
      </Formik>
    </View>
    )
}

export default BankDetailsConfirm;

