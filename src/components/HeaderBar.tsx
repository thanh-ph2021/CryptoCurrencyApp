import * as React from 'react'
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, FONTS, SIZES, icons } from '../constants';
import { useNavigation } from '@react-navigation/native';

const HeaderBar = ({right}: any) => {

    const navigation = useNavigation();
    return (
        <View
            style={{
                padding: SIZES.padding,
                flexDirection: 'row'
            }}
        >
            <View style={{ flex: 1, alignItems: 'flex-start'}}>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Image 
                        source={icons.back_arrow}
                        resizeMode='contain'
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.gray
                        }}
                    />
                    <Text style={{ marginLeft: SIZES.base, ...FONTS.h3, fontWeight: 'bold'}}>
                        Back
                    </Text>
                </TouchableOpacity>
            </View>
            {right && 
                <View style={{flex: 1, alignItems:'flex-end'}}>
                    <TouchableOpacity>
                        <Image 
                            source={icons.star}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25
                            }}
                        />
                    </TouchableOpacity>
                </View>
            }
        </View>
    )
}

export default HeaderBar;