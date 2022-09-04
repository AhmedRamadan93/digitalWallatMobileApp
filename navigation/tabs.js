import React from "react";
import {
    View,
    Image,
    TouchableOpacity,
    Text,
    StyleSheet
} from "react-native";
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"
import { LinearGradiant } from 'expo-linear-gradient';

import { History, Home, Transaction } from "../screens"
import { COLORS, FONTS, icons } from "../constants"
import { Colors } from "react-native/Libraries/NewAppScreen";

const Tab = createBottomTabNavigator()
// const TabBarCustomButton = ({ children, onPress }) => {
//     return (
//         <View
//             style={{
//                 top: -30,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 ...styles.shadow
//             }}
//             onPress={onPress}
//         >
//             <View

//                 style={{
//                     width: 70,
//                     height: 70,
//                     borderRadius: 35,

//                     backgroundColor: COLORS.lightGray,

//                 }}
//             >
//                 {children}
//             </View>

//         </View>

//     );
// }

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    elevation: 0,
                    backgroundColor: COLORS.white,
                    borderTopCOLOR: "transparent",
                    height: 100,

                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 70,
                            height: 50,
                            borderRadius: 5,
                            ...styles.shadow,
                            backgroundColor: focused ? COLORS.white : COLORS.lightGray,
                        }}>
                            <Image
                                source={icons.home}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? COLORS.primary : COLORS.black

                                }}
                            />
                            <Text style={{
                                color: focused ? COLORS.primary : COLORS.black,
                                ...FONTS.body5
                            }}
                            >HOME</Text>
                        </View>
                    )

                }}
            />

            <Tab.Screen
                name="Transactions"
                component={Transaction}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 120,
                            height: 70,
                            borderRadius: 35,
                            top: -10,
                            ...styles.shadow,
                            backgroundColor: focused ? COLORS.primary : COLORS.lightGray,
                        }}>
                            <Image
                                source={icons.transaction}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? COLORS.white : COLORS.black

                                }}
                            />
                            <Text style={{
                                color: focused ? COLORS.white : COLORS.black,
                                ...FONTS.body5
                            }}
                            >TRANSACTIONS</Text>
                        </View>

                    ),
                    

                }}
            />
            <Tab.Screen
                name="HISTORY"
                component={History}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 70,
                            height: 50,
                            borderRadius: 5,
                            ...styles.shadow,
                            backgroundColor: focused ? COLORS.white : COLORS.lightGray,
                        }}>
                            <Image
                                source={icons.line_graph}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? COLORS.primary : COLORS.black

                                }}
                            />
                            <Text style={{
                                color: focused ? COLORS.primary : COLORS.black,
                                ...FONTS.body5
                            }}
                            >HISTORY</Text>
                        </View>
                    )

                }}
            />

        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: COLORS.primary,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5
    }
})

export default Tabs;