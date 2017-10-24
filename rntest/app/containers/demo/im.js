import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { } from 'antd-mobile';
import JMessage from 'jmessage-react-plugin';
import { connect } from 'react-redux';
var listener = (message) => {
  alert(JSON.stringify(message))
}

JMessage.addReceiveMessageListener(listener) // 添加监听
JMessage.addSyncOfflineMessageListener(listener)
class IM extends Component {
  componentDidMount() {
    JMessage.init({
      appkey: "99d32607fea1aa0af3338b9b",
      isOpenMessageRoaming: false, // 是否开启消息漫游，默认不开启
      isProduction: true, // 是否为生产模式
    })
  }

  render() {
    login = () => {
      JMessage.login({
        username: "test",
        password: "123456"
      }, () => { alert("登陆成功") }, (error) => {/*登录失败回调*/ })
    }
    return (
      <Text onPress={()=>login()}>
        login
      </Text>
    )
  }
}

export default connect(({ im }) => ({ im }))(IM)