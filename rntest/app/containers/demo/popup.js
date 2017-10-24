import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { createForm } from 'rc-form';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform
} from 'react-native';
import { Popup as AntdPopup, Button } from 'antd-mobile';

const popupContent=[
  1,2,3,4
]

export default class Popup extends Component {
  render() {
    popup=(t)=>{
     return AntdPopup.show(
        <View>
          {
            popupContent.map(m=><Text style={{height:40}} key={m}>{m}</Text>)
          }
          <TouchableOpacity style={{height:40}} onPress={()=>AntdPopup.hide()}><Text>关闭</Text></TouchableOpacity>
        </View>
        ,{animationType:t,maskClosable:true}
      )
    }
    return (
      <View style={{ flex: 1 }}>
        <Button onPressIn={()=>popup('slide-down')} style={{ margin: 10 }} type="primary" inline>向下弹出</Button>
        <Button onPressIn={()=>popup('slide-up')} style={{ margin: 10, }} type="primary" inline>向上弹出</Button>
      </View>
    )
  }
}