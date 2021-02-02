import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SearchBar, Icon } from 'react-native-elements';


const searchWidth = '70%';
const iconWidth = '15%';
const iconHeight = '10%';

export default class Search extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {

    return (
      <View style={styles.searchHeader}>
        <View style={styles.search}>
          <SearchBar
            platform="ios"
            containerStyle={{}}
            inputContainerStyle={{}}
            inputStyle={{}}
            leftIconContainerStyle={{}}
            rightIconContainerStyle={{}}
            lightTheme
            loadingProps={{}}
            onClearText={() => console.log(onClearText())}
            placeholder="search..."
            placeholderTextColor="#888"
            cancelButtonTitle="Cancel"
            cancelButtonProps={{}}
            onCancel={() => console.log(onCancel())}
          />
        </View>
        <View style={styles.headerIcon}>
          <Icon type='font-awesome-5' name='bell' color='black' />
        </View>
        <View style={styles.headerIcon}>
          <Icon type='font-awesome-5' name='user-circle' color='black' />
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  searchHeader: {
    flex: 1, 
    flexDirection: 'row',
  },
  search: {
    width: searchWidth,
  },
  headerIcon: {
    width: iconWidth,
    height: iconHeight,
    backgroundColor:'transparent',
    marginTop: 24
  }
});