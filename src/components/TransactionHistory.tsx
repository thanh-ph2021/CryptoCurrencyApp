import * as React from 'react'
import { Image, Text, View } from 'react-native';
import { COLORS, FONTS, SIZES, icons } from '../constants';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

const TransactionHistory = ({customContainerStyle, history}: any) => {

    const renderItem = ({item}: any) => {
        return (
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingVertical: SIZES.base
                }}
                onPress={() => console.log(item)}
            >
                <Image
                    source={icons.transaction}
                    style={{
                        width: 40,
                        height: 40,
                        tintColor: COLORS.primary
                    }}
                />
                <View style={{ flex: 1, marginLeft: SIZES.radius}}>
                    <Text style={{...FONTS.h3, fontWeight: 'bold'}}>
                        {item.description}
                    </Text>
                    <Text style={{ color: COLORS.gray, ...FONTS.body4}}>
                        {item.date}
                    </Text>
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        height: '100%',
                        alignItems: 'center'
                    }}
                >
                    <Text style={{color: item.type == 'B' ? COLORS.green : COLORS.black, ...FONTS.h3}}>
                        {item.amount} {item.currency}
                    </Text>
                    <Image 
                        source={icons.right_arrow}
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.gray
                        }}
                    />
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View
            style={{
                marginTop: SIZES.padding,
                marginHorizontal: SIZES.padding,
                padding: 20,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.white,
                ...customContainerStyle
            }}
        >
            <Text style={{ ...FONTS.h3, fontWeight: 'bold'}}>
                Transaction History
            </Text>
            <FlatList 
                contentContainerStyle={{marginTop: SIZES.radius}}
                scrollEnabled={false}
                data={history}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => {
                    return (
                        <View style={{width: '100%', height: 1, backgroundColor: COLORS.lightGray}}>

                        </View>
                    )
                }}
            />
        </View>
    )
}

export default TransactionHistory;