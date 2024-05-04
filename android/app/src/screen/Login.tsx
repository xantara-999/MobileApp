import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons/faEyeSlash'
import Google from '../main/assets/custom/Google.svg'
import { useNavigation } from '@react-navigation/native'


const Login = () => {
    const navigation = useNavigation();
    const [showPassword, setShowPassword] = useState(false); // Password initially hidden
    const toggleShowPassword = () => setShowPassword(!showPassword);
  return (
    <View className=' bg-white h-full'>
        <View className='m-6 '>
            <View className='flex justify-center items-center'>
                <Image source={require('../images/Logo.png')} className=' mb-6'/>
                <Text className=' text-black text-2xl font-BHB'>loginakun</Text>
            </View>
            <View className=' my-4 flex'>
                <Text className='text-sm text-black mb-2 font-OM'> Email </Text>
                <TextInput className=' border rounded-xl border-oa-border mb-4 ' placeholder=' Masukan email kamu' placeholderTextColor={'#6B7280'} />
                <Text className=' font-Outfit text-sm text-black mb-2'> Password</Text>
                <View className=' flex '>
                    <TextInput className=' border rounded-xl border-oa-border font-Outfit' placeholder=' Masukan password kamu' placeholderTextColor={'#6B7280'} secureTextEntry={!showPassword}/>
                    <TouchableOpacity onPress={toggleShowPassword} className='absolute right-2.5 top-3'>
                        <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} size={24} color="black"/>
                    </TouchableOpacity>
                </View>
            </View>
            <View className=' flex items-end mb-8'>
                <TouchableOpacity>
                    <Text className=' font-Outfit font-normal text-sm text-oa-red '>Lupa Kata Sandi?</Text>
                </TouchableOpacity>
            </View>
            <View> 
                <TouchableOpacity className=' bg-oa-blue rounded-md' onPress={() => navigation.navigate('Registrasi')}> 
                    <Text className=' font-Bold text-center text-white mx-6  mb-3 mt-1.5 '>
                        Masuk Akun 
                    </Text>
                </TouchableOpacity>
            </View>


            
        </View>     
    </View>
)
}

export default Login