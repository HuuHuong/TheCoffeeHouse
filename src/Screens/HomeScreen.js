import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    SafeAreaView,
    FlatList,
    Dimensions
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;


export default function HomeScreen() {
    return (
        <SafeAreaView style={{ height: windowHeight - 55, backgroundColor: '#FEF7E5' }}>
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.header_Greating}>
                    <Ionicons name='cloudy' style={styles.iconCloudy} />
                    <Text style={styles.header_Heading}>Chào bạn mới</Text>
                </View>
                <View style={styles.header_icon}>
                    <TouchableOpacity style={styles.header_Ticket}>
                        <Ionicons name="journal-outline" style={styles.header_iconTicket} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.header_notification}>
                        <Ionicons name="notifications-outline" style={styles.header_iconNotification} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Header  */}
            <View style={{ width: windowWidth - 30, margin: 15 }}>
                <Image
                    source={require('../assets/Images/backgroundCoffee.jpg')}
                    style={{ height: 280, width: '100%', borderRadius: 10 }}
                />
                <View style={styles.container}>
                    <Text style={styles.container_Heading}>Đăng nhập</Text>
                    <Text style={styles.container_Title}>Sử dụng app để tích điểm và đổi những ưu đãi chỉ dành riêng cho thành viên bạn nhé !</Text>
                    <TouchableOpacity style={styles.container_signIn}>
                        <Text style={styles.container_signInButton}>Đăng nhập</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container_rewardForm}>
                        <View style={styles.container_reward}>
                            <Text>The Coffee House's Reward</Text>
                            <Ionicons name='chevron-forward-outline' />
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Body Delivery */}
                <View style={styles.body_deliveryForm}>
                    <View style={styles.body_delivery}>
                        <Image
                            source={require('../assets/Images/shipper.png')}
                            style={styles.body_deliveryIcon}
                        />
                        <Text>Giao hàng</Text>
                    </View>
                    <View style={{ width: 1, backgroundColor: '#E4E4E4', height: 70 }}></View>
                    <View style={styles.body_delivery}>
                        <Ionicons name='cafe' style={styles.body_carriedAway} />
                        <Text>Mang đi</Text>
                    </View>
                </View>

                {/* Body More */}
                <Text style={styles.body_textHeading}>Khám phá thêm</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        margin: 15,
        marginTop: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    header_Greating: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconCloudy: {
        fontSize: 20,
        marginRight: 10,
        color: '#ffffff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 15.19,
        elevation: 23,
    },
    header_Heading: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    header_icon: {
        flexDirection: 'row'
    },
    header_Ticket: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 8,
        paddingBottom: 8,
        paddingRight: 10,
        paddingLeft: 10,
        borderRadius: 20,
        backgroundColor: '#ffffff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    header_iconTicket: {
        fontSize: 16,
        color: '#8C6337',
        fontWeight: 'bold'
    },
    header_notification: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 7,
        paddingTop: 8,
        paddingBottom: 8,
        paddingRight: 10,
        paddingLeft: 10,
        borderRadius: 20,
        backgroundColor: '#ffffff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    header_iconNotification: {
        fontSize: 16,
        color: '#8C6337',
        fontWeight: 'bold'
    },
    container: {
        margin: 10,
        alignItems: 'center',
        position: 'absolute'
    },
    container_Heading: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    container_Title: {
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
        fontSize: 17,
        color: '#ffffff'
    },
    container_signIn: {
        backgroundColor: '#E47905',
        borderRadius: 10
    },
    container_signInButton: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 35,
        paddingLeft: 35,
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 18
    },
    container_rewardForm: {
        backgroundColor: '#ffffff',
        width: '95%',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 15.19,
        elevation: 10,
        marginTop: 65
    },
    container_reward: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15
    },
    body_deliveryForm: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        borderColor: '#E4E4E4',
        borderWidth: 1,
        height: 100,
        marginTop: 20,
        marginBottom: 20
    },
    body_delivery: {
        alignItems: 'center',
        width: '49%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    body_deliveryIcon: {
        width: 50,
        height: 50
    },
    body_carriedAway: {
        fontSize: 50,
        color: '#E47905'
    },
    body_textHeading: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})
