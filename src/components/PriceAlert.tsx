import * as React from "react"
import { TouchableOpacity } from "react-native-gesture-handler"
import { COLORS, FONTS, SIZES, icons  } from "../constants";
import { Image, Text, View } from "react-native";

const PriceAlert = ({customContainerStyle} : any) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                // marginTop: SIZES.padding * 6.5,
                marginHorizontal: SIZES.padding,
                paddingVertical: SIZES.padding,
                paddingHorizontal: SIZES.radius,
                backgroundColor: COLORS.white,
                borderRadius: SIZES.radius,
                ...customContainerStyle,
                elevation: 8,
            }}
        >
            <Image
                source={icons.notification_color}
                style={{
                    width: 30,
                    height: 30
                }}
            />
            <View style={{ flex: 1, marginLeft: SIZES.radius}}>
                <Text style={{ ...FONTS.h3, fontWeight: 'bold' }}>Set Price Alert</Text>
                <Text style={{ ...FONTS.body4 }}>Get notifed when your coin are moving</Text>
            </View>

            <Image 
                source={icons.right_arrow}
                style={{
                    width: 20,
                    height: 20,
                    tintColor: COLORS.gray
                }}
            />
        </TouchableOpacity>
    )
}

export default PriceAlert;