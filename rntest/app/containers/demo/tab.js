import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { createForm } from 'rc-form';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';

const TabPane = Tabs.TabPane;

export default class Tab extends Component {
  render() {
    return <View style={{ flex: 1 }}>
      <Tabs defaultActiveKey="1">
        <TabPane tab={"第一页"} key="1">
          <View style={{ alignItems: 'center', justifyContent: 'center', height: 200, backgroundColor: '#fff' }}>
            <Text>Content of First Tab</Text>
          </View>
        </TabPane>
        <TabPane tab={"第二页"} key="2">
          <View style={{ alignItems: 'center', justifyContent: 'center', height: 200, backgroundColor: '#fff' }}>
            <Text>Content of Second Tab</Text>
          </View>
        </TabPane>
        <TabPane tab={"第三页"} key="3">
          <View style={{ alignItems: 'center', justifyContent: 'center', height: 200, backgroundColor: '#fff' }}>
            <Text>Content of Third Tab</Text>
          </View>
        </TabPane>
      </Tabs>
    </View>
  }
}
