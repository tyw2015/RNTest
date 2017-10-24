/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { createForm } from 'rc-form';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Picker
} from 'react-native';
import { List, InputItem, WhiteSpace, Toast, Button, Switch, Picker as AntdPicker ,Radio} from 'antd-mobile';
import { district, provinceLite as province } from 'antd-mobile-demo-data';

const Item = List.Item;
const RadioItem = Radio.RadioItem;

class Form extends Component {
  state = {
    disable: false,
    language: 'ch-zn',
    value: 0
  }
  validateAccount = (rule, value, callback) => {
    if (value && value.length > 4) {
      callback();
    } else {
      callback(new Error('账户名最少四位'));
    }
  }

  onSubmit = () => {
    this.props.form.validateFields({ force: true }, (error) => {
      if (!error) {
        console.log(this.props.form.getFieldsValue());
      } else {
        Toast.fail('验证失败', 2, null, false);
      }
    });
  }

  onReset = () => {
    this.props.form.resetFields();
  }

  onChange = (value) => {
    this.setState({
      value,
    });
  };

  render = () => {
    const { getFieldProps, getFieldError } = this.props.form;
    const data = [
      { value: 0, label: '选项1' },
      { value: 1, label: '选项2' },
    ];
    return (
      <View style={styles.container}>
        <List>
          <InputItem
            {...getFieldProps('account', {
              rules: [
                { required: true, message: '请输入账户名' },
                { validator: this.validateAccount },
              ]
            }) }
            clear
            error={!!getFieldError('account')}
            onErrorClick={() => {
              Toast.info(getFieldError('account').join('、'), 2, null, false);
            }}
            placeholder="请输入账户名"
          >账户名</InputItem>
          <InputItem {...getFieldProps('password') } placeholder="请输入密码" type="password">
            密码
          </InputItem>
          <InputItem {...getFieldProps('phone') } placeholder="请输入手机号" type="phone">
            手机号码
          </InputItem>
          <Picker
            selectedValue={this.state.language}
            onValueChange={(lang) => this.setState({ language: lang })}>
            <Picker.Item label="男" value="java" />
            <Picker.Item label="女" value="js" />
          </Picker>
          <List renderHeader={() => '单选框'}>
            {data.map(i => (
              <RadioItem key={i.value} checked={this.state.value === i.value} onChange={() => this.onChange(i.value)}>
                {i.label}
              </RadioItem>
            ))}
          </List>
          <AntdPicker extra="请选择(可选)"
            data={district}
            title="选择地区"
            {...getFieldProps('district', {
              initialValue: ['340000', '341500', '341502'],
            }) }
            onOk={e => console.log('ok', e)}
            onDismiss={e => console.log('dismiss', e)}
          >
            <List.Item arrow="horizontal">选择地区（多列，联动）</List.Item>
          </AntdPicker>
          <Item
            extra={<Switch {...getFieldProps('1', { initialValue: true, valuePropName: 'checked' }) } />}
          >确认信息</Item>
          <Item>
            <Button type="primary" onClick={this.onSubmit} inline>提交</Button>
            <Button onClick={this.onReset} inline style={{ marginTop: 8 }}>重置</Button>
          </Item>
        </List>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    flex: 1,
  },
  listItem: {
    height: 40,
    justifyContent: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ccc'
  }
});

export default createForm()(Form)
