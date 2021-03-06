import React from 'react';
import { View, Text, Image, StyleSheet, Button,} from 'react-native';

import POSTS from './POSTS';
import COLLECTIONS from './COLLECTIONS';

export default class ProfileScreen extends React.Component {

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.profileDetail}>
                    <View style={styles.avatar}>
                        <Image source={require('../../assets/images/p1.jpg')} style={styles.profilePic}></Image>
                    </View>
                    <View style={styles.userInfo}>
                        <Text style={{ fontSize: 26, fontWeight: 'bold', marginBottom: 10 }}>Joe Bloggs</Text>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', lineHeight: 25 }}>
                            Edinburgh
                    {'\n'}
                    13 followers
                    {'\n'}
                    10 posts
                </Text>
                    </View>
                </View>

                <View style={styles.bio}>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin scelerisque ante porttitor felis bibendum lacinia. Sed sapien lacus, euismod in tempus auctor, commodo eu tellus</Text>
                </View>
                <View style={styles.followButton}>
                    <Button
                        title="FOLLOW"
                        color="#004a44"
                        onPress={() => Alert.alert('Followed!')}
                    />
                </View>
                <View>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>POSTS</Text>
                </View>
                <View style={styles.photoGridRow1}>
                    <POSTS></POSTS>
                </View>
                <View>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>COLLECTIONS</Text>
                </View>
                <View style={styles.photoGridRow2}>
                    <COLLECTIONS></COLLECTIONS>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fafafa',
        alignItems: 'center',
      },
    profileDetail: {
        flex: 1,
        flexDirection: 'row',
        margin: 10,
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20
    },
    profilePic: {
        width: 130,
        height: 130,
        borderRadius: 360,
    },
    avatar: {
        width: '50%',
    },
    userInfo: {
        width: '50%',
    },
    followButton: {
        flexDirection: 'row',
        margin: 20,
        width: '100%',
        justifyContent: 'center',
    },
    bio: {
        flexDirection: 'row',
        marginTop: 130,
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
    },
    photoGridRow1: {

        flexDirection: 'row',
        margin: 5,
        width: '100%',
        paddingLeft: 5,
        paddingRight: 5,
    },
    photoGridRow2: {

        flexDirection: 'row',
        margin: 5,
        width: '100%',
        paddingLeft: 5,
        paddingRight: 5,
    },
});
