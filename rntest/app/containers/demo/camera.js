import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Alert
} from 'react-native';
import  Camera  from 'react-native-camera';

export default class CameraPage extends Component {
  state = {
    isActive: true
  }

  takePicture() {
    const options = {};
    this.camera.capture({ metadata: options })
      .then((data) => alert(JSON.stringify(data)))
      .catch(err => alert(err));
  }

  parseData = (data) => {
    this.setState({ isActive: false })
    Alert.alert(
      '扫描结果',
      JSON.stringify(data),
      [
        { text: '取消', onPress: () => this.setState({ isActive: true }), style: 'cancel' },
        { text: '确认', onPress: () => this.setState({ isActive: true }) }
      ],
      { cancelable: false }
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          onBarCodeRead={this.state.isActive ? this.parseData : null}>
          <Text style={styles.capture} onPress={this.takePicture.bind(this)}>拍照</Text>
        </Camera>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});