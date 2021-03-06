import React from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Post from './Post'

const images = [
    {
        image: 'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
        desc: 'Silent Waters in the mountains in midst of Himilayas',
    },
    {
        image: 'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
        desc:
            'Red fort in India New Delhi is a magnificient masterpeiece of humans',
    },
]

export default class FeedScreen extends React.Component {


    state = {
        popularSelected: true
    }
    onTabPressed = () => {
        this.setState({ popularSelected: !this.state.popularSelected })
    }
    render() {
        return (
            <View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{
                        height: "100%",
                        backgroundColor: "#fff"
                    }}
                >
                    <View style={{
                        backgroundColor: "#fafafa",
                        height: 1000,
                        paddingHorizontal: 35
                    }}>

                        <View style={{
                            flexDirection: "row"
                        }}>
                            <Post
                                onPress={() => this.props.navigation.navigate('Profile')}
                                name="Joe Bloggs"
                                profile={require('../../assets/images/p1.jpg')}

                            />

                        </View>



                        <View style={{
                            flexDirection: "row"
                        }}>

                            <Post
                                onPress={() => this.props.navigation.navigate('Profile')}
                                name="Erika B"
                                profile={require('../../assets/images/p2.jpg')}
                                photo={require('../../assets/images/6.jpg')}
                            />

                        </View>

                        <View style={{
                            flexDirection: "row"
                        }}>
                            <Post
                                onPress={() => this.props.navigation.navigate('Profile')}
                                name="Max Bator"
                                profile={require('../../assets/images/p1.jpg')}
                                photo={require('../../assets/images/3.jpg')}
                            />

                        </View>
                    </View>

                </ScrollView>
            </View>
        )
    }
}
