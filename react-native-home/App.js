import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TextInput,
  Alert
} from 'react-native';

export default class App extends React.Component {
  state = {
    text: ''
  };

  onPress() {
    Alert.alert(
      'Natvie Alert Component',
      'It calls Native Alert Component',
      [
        {
          text: 'Ask me later',
          onPress: () => console.log('Ask me later pressed')
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') }
      ],
      { cancelable: false }
    );
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center'
        }}
      >
        <View style={styles.container}>
          <Button
            styles={styles.height}
            onPress={this.onPress.bind(this)}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
          <FlatList
            styles={styles.height}
            styles={styles.list}
            data={[{ key: 'a' }, { key: 'b' }]}
            renderItem={({ item }) => <Text>{item.key}</Text>}
          />
          <Text>{this.state.text}</Text>
          <TextInput
            style={{
              height: 40,
              borderColor: 'black',
              borderWidth: 1,
              width: 100
            }}
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  height: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1
  }
});
