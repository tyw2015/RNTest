import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { createForm } from 'rc-form';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import { TabBar, Icon } from 'antd-mobile';

const TabBarItem = TabBar.Item

export default class TabBarPage extends Component {

  state = {
    selectedTab: 'firstTab',
  };
  renderContent(pageText) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{`当前展示的是${pageText}`}</Text>
      </View>
    );
  }

  render() {
    return (
      <TabBar>
        <TabBarItem
          title="第一页"
          key="第一页"
          icon={require('../../imgs/demo/alipay_web.png')}
          selectedIcon={require('../../imgs/demo/alipay_web_sel.png')}
          badge={1}
          onPress={()=>{this.setState({selectedTab: 'firstTab'})}}
          selected={this.state.selectedTab === 'firstTab'}
          >
          {this.renderContent('第一页')}
        </TabBarItem>
        <TabBarItem
          title="第二页"
          key="第二页"
          icon={require('../../imgs/demo/alipay_web.png')}
          selectedIcon={require('../../imgs/demo/alipay_web_sel.png')}
          onPress={()=>{this.setState({selectedTab: 'secondTab'})}}          
          selected={this.state.selectedTab === 'secondTab'}
          >
          {this.renderContent('第二页')}
        </TabBarItem>
      </TabBar>
    )
  }
}