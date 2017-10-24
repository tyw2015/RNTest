import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { createForm } from 'rc-form';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Dimensions,
  NetInfo,
  PixelRatio
} from 'react-native';
import { Button } from 'antd-mobile';

export default class Popup extends Component {
  render() {
    return <View style={{ flex: 1 }}>
      <Button onPressIn={() => alert(JSON.stringify(Platform))} style={{ margin: 10, }} type="primary" inline>获取设备类型，版本</Button>
      <Button onPressIn={() => alert(JSON.stringify(Dimensions.get('window')))} style={{ margin: 10, }} type="primary" inline>获取屏幕</Button>
      <Button onPressIn={() => NetInfo.fetch().done((reach) => { alert(reach) })} style={{ margin: 10, }} type="primary" inline>获取网络情况</Button>
      <Button onPressIn={() => alert(JSON.stringify(PixelRatio.get()))} style={{ margin: 10, }} type="primary" inline>获取设备PixelRatio</Button>
      <View style={{ alignItems: 'center' }}>
        <Text>PixelRatio:返回设备的像素密度，例如：</Text>
        <Text>mdpi Android 设备 (160 dpi)</Text>
        <Text>PixelRatio.get() === 1.5</Text>
        <Text>hdpi Android 设备 (240 dpi)</Text>
        <Text>PixelRatio.get() === 2</Text>
        <Text>iPhone 4, 4S
          iPhone 5, 5c, 5s
          iPhone 6</Text>
        <Text>xhdpi Android 设备 (320 dpi)</Text>
        <Text>PixelRatio.get() === 3</Text>
        <Text>iPhone 6 plus</Text>
        <Text>xxhdpi Android 设备 (480 dpi)</Text>
        <Text>PixelRatio.get() === 3.5</Text>
        <Text>Nexus 6</Text>
      </View>
    </View>
  }
}  