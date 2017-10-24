import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { createForm } from 'rc-form';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { SwipeAction, List } from 'antd-mobile';

export default class Swipe extends Component {
  render = () => {
    return <List>
      <SwipeAction
        style={{ backgroundColor: 'gray' }}
        autoClose
        right={[
          {
            text: 'Cancel',
            onPress: () => console.log('cancel'),
            style: { backgroundColor: '#ddd', color: 'white' },
          },
          {
            text: 'Delete',
            onPress: () => console.log('delete'),
            style: { backgroundColor: '#F4333C', color: 'white' },
          },
        ]}
        left={[
          {
            text: 'Reply',
            onPress: () => console.log('reply'),
            style: { backgroundColor: '#108ee9', color: 'white' },
          },
          {
            text: 'Cancel',
            onPress: () => console.log('cancel'),
            style: { backgroundColor: '#ddd', color: 'white' },
          },
        ]}
        onOpen={() => console.log('global open')}
        onClose={() => console.log('global close')}
      >
        <List.Item
          extra="More"
          arrow="horizontal"
        >
          左右可划
      </List.Item>
      </SwipeAction>
      <SwipeAction
        disabled={true}
        style={{ backgroundColor: 'gray' }}
        autoClose
        right={[
          {
            text: 'Cancel',
            onPress: () => console.log('cancel'),
            style: { backgroundColor: '#ddd', color: 'white' },
          },
          {
            text: 'Delete',
            onPress: () => console.log('delete'),
            style: { backgroundColor: '#F4333C', color: 'white' },
          },
        ]}
        left={[
          {
            text: 'Reply',
            onPress: () => console.log('reply'),
            style: { backgroundColor: '#108ee9', color: 'white' },
          },
          {
            text: 'Cancel',
            onPress: () => console.log('cancel'),
            style: { backgroundColor: '#ddd', color: 'white' },
          },
        ]}
        onOpen={() => console.log('global open')}
        onClose={() => console.log('global close')}
      >
        <List.Item
          extra="More"
          arrow="horizontal"
        >
          禁用滑动
      </List.Item>
      </SwipeAction>
    </List>
  }
}