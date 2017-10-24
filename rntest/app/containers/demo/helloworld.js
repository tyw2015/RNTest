/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

const list=[
  {name:"表单验证",key:'form'},
  {name:"长列表",key:'flatList'},
  {name:"左划删除",key:'swipe'},
  {name:"Tab页",key:'tab'},
  {name:"搜索",key:'search'},
  {name:"标签栏",key:'tabBar'},
  {name:"rn WebView",key:'webView'},
  {name:"弹出层popup",key:'popup'},
  {name:"相机，二维码/条形码扫描",key:'camera'},
  {name:"获取设备信息",key:'deviceInfo'},
  {name:"pdf阅读",key:'pdf'},
  {name:"地图",key:'map'},
  {name:"国际化",key:'international'},
  {name:"实时聊天",key:'im'},
]

class HelloWorld extends Component {
  render() {
    return (
      <View style={styles.container}>
         {
           list.map((item,index)=>{
            return <TouchableOpacity key={index} style={styles.listItem} onPress={()=>Actions[item.key]()}>
              <Text style={{paddingLeft:8}}>{`${index+1}.${item.name}`}</Text>
            </TouchableOpacity>
           })
         }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  listItem:{
    height:40,
    justifyContent:'center',
    borderBottomWidth:StyleSheet.hairlineWidth,
    borderBottomColor:'#ccc'
  }
});


export default HelloWorld;