import * as React from 'react'
import { FlatList, Image, ImageBackground, LogBox, ScrollView, StatusBar, Text, View } from 'react-native';
import { COLORS, FONTS, SIZES, dummyData, images, icons } from '../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { PriceAlert, TransactionHistory } from '../components';

const Home = ({navigation}: any) => {

    const [trending, setTrending] = React.useState(dummyData.trendingCurrencies)
    const [transactionHistory, setTransactionHistory] = React.useState(dummyData.transactionHistory)

    React.useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested'])
    }, [])

    function renderHeader() {

        const renderItem = ({item, index}: any) => {
            return (
                <TouchableOpacity
                    style={{
                        width: 200,
                        padding: SIZES.padding,
                        marginLeft: index == 0 ? SIZES.padding : 0,
                        marginRight: SIZES.radius,
                        borderRadius: 10,
                        backgroundColor: COLORS.white,
                        elevation: 8,
                        marginBottom: 5
                    }}
                    onPress={() => navigation.navigate('CryptoDetail', {currency: item})}
                >
                    {/* Currency */}
                    <View style={{ flexDirection: 'row'}}>
                        <View>
                            <Image
                                source={item.image}
                                resizeMode='cover'
                                style={{
                                    marginTop: 5,
                                    width: 35,
                                    height: 35
                                }}
                            />
                        </View>
                        <View style={{ marginLeft: SIZES.base}}>
                            <Text style={{...FONTS.h3, fontWeight: 'bold'}}>{item.currency}</Text>
                            <Text style={{color: COLORS.gray, ...FONTS.body3}}>{item.code}</Text>
                        </View>
                    </View>

                    {/* Value */}
                    <View style={{marginTop: SIZES.radius}}>
                        <Text style={{ ...FONTS.h3, fontWeight: 'bold'}}>
                            $ {item.amount}
                        </Text>
                        <Text style={{color: item.type == "I" ? COLORS.green : COLORS.red, ...FONTS.h3}}>
                            {item.changes}
                        </Text>
                    </View>
                </TouchableOpacity>
            )
        }

        return (
            <View
                style={{
                    width: "100%",
                    height: 240,
                    elevation: 8
                }}
            >
                <ImageBackground
                    source={images.banner}
                    resizeMode='cover'
                    style={{
                        flex: 1,
                        alignItems: 'center'
                    }}
                >
                    {/* Header Bar */}
                    <View style={{
                        marginTop: SIZES.padding,
                        width: '100%',
                        alignItems: "flex-end",
                        paddingHorizontal: SIZES.padding
                    }}>
                        <TouchableOpacity
                            style={{
                                width: 35,
                                height: 35,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            onPress={() => console.log('Notification')}
                        >
                             <Image
                                source={icons.notification_white}
                                resizeMode='contain'
                                style={{flex: 1}}
                             />       
                        </TouchableOpacity>
                    </View>

                    {/* Balance */}
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Text style={{color: COLORS.white, ...FONTS.h3}}>
                            Your Portfolio Balance
                        </Text>
                        <Text style={{marginTop: SIZES.base, color: COLORS.white, ...FONTS.h1}}>
                            ${dummyData.portfolio.balance}
                        </Text>
                        <Text style={{color: COLORS.white, ...FONTS.body5}}>
                            {dummyData.portfolio.changes} Last 24 hours
                        </Text>
                    </View>

                    {/* Trending */}
                    <View style={{
                        position: 'absolute', bottom: '-30%'
                    }}>
                        <Text style={{marginLeft: SIZES.padding, color: COLORS.white, ...FONTS.h2}}>
                            Trending
                        </Text>
                        <FlatList
                            contentContainerStyle={{marginTop: SIZES.base}}
                            data={trending}
                            renderItem={renderItem}
                            keyExtractor={item => `${item.id}`}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>

                </ImageBackground>
            </View>
        )
    }

    function renderAlert() {
        return (
            <View style={{marginTop: SIZES.padding * 6.5}}>
                <PriceAlert />
            </View>
            
        )
    }

    function renderNotice() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding,
                    marginHorizontal: SIZES.padding,
                    padding: 20,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.secondary,
                    elevation: 8
                }}
            >
                <Text style={{ color: COLORS.white, ...FONTS.h3}}>
                    Investing Safety
                </Text>
                <Text style={{ marginTop: SIZES.base, color: COLORS.white, ...FONTS.body4, lineHeight: 18}}>
                    It's very difficult to time an investment, especially when the market is volatile. Learn how to use dollar cost averaging to your advantage.
                </Text>

                <TouchableOpacity
                    style={{
                        marginTop: SIZES.base
                    }}
                    onPress={() => console.log("Learn more")}
                >
                    <Text style={{ textDecorationLine: 'underline', color: COLORS.green, ...FONTS.h3}}>
                        Learn More
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    function renderTransactionHistory() {
        return (
            <TransactionHistory 
                customContainerStyle={{elevation: 8}}
                history={transactionHistory}
            />
        )
    }

    return (
        <ScrollView>
            <StatusBar backgroundColor={COLORS.secondary}/>
            <View style={{flex: 1, paddingBottom: 60}}>
                {renderHeader()}
                {renderAlert()}
                {renderNotice()}
                {renderTransactionHistory()}
            </View>
        </ScrollView>
    )
}

export default Home;