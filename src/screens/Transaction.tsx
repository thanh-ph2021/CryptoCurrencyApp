import * as React from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { CurrencyLabel, HeaderBar, TextButton, TransactionHistory } from '../components';
import { COLORS, FONTS, SIZES } from '../constants';

const Transaction = ({route}: any) => {

    const {currency} = route.params;
    const [selectedCurrency, setSelectedCurrency] = React.useState<any>(currency)

    React.useEffect(() => {
        // const {currency} = route.params;
        // setSelectedCurrency(currency);
    }, [])

    function renderTrade() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding,
                    marginHorizontal: SIZES.padding,
                    padding: SIZES.padding,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.white,
                    elevation: 8
                }}
            >
                <CurrencyLabel 
                    icon={selectedCurrency?.image}
                    currency={selectedCurrency?.currency}
                    code={selectedCurrency?.code}
                />
                <View
                    style={{
                        marginTop: SIZES.padding,
                        marginBottom: SIZES.padding *1.5,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Text style={{ ...FONTS.h2, fontWeight: 'bold' }}>{selectedCurrency?.wallet.crypto} {selectedCurrency?.code}</Text>
                    <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>${selectedCurrency?.wallet.value}</Text>
                </View>

                <TextButton 
                    label="Trade"
                    onPress={() => console.log('Trade')}
                />
            </View>
        )
    }

    function renderTransaction() {
        return (
            <TransactionHistory
                customContainerStyle={{
                    elevation: 8
                }}
                history={selectedCurrency?.transactionHistory}
            />
        )
    }

    return (
        <SafeAreaView style={{ flex: 1}}>
            <HeaderBar />

            <ScrollView>
                <View style={{ flex: 1, paddingBottom: SIZES.padding}}>
                    {renderTrade()}
                    {renderTransaction()}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Transaction;