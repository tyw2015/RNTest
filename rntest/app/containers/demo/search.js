import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { createForm } from 'rc-form';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';

export default class Search extends Component{
  render(){
    return(
      <SearchBar placeholder="搜索" maxLength={8} ref={(ref)=>this.search=ref}/>
    )
  }
}