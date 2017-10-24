import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Pagination, LocaleProvider, List, DatePicker, WhiteSpace, Button, InputItem, WingBlank } from 'antd-mobile';
import enUS from 'antd-mobile/lib/locale-provider/en_US';
import moment from 'moment';
import language from './language';

const maxDate = moment('2018-12-03 +0800', 'YYYY-MM-DD Z').utcOffset(8);
const minDate = moment('2015-08-06 +0800', 'YYYY-MM-DD Z').utcOffset(8);

class Page extends Component {
  render() {
    return (
      <View>
        <Pagination total={5} current={1} />
        <WhiteSpace />
        <List
          className="date-picker-list"
          style={{ backgroundColor: 'white' }}
        >
          <DatePicker
            mode='date'
            title="Select date"
            extra={this.props.language.extra}
            minDate={minDate}
            maxDate={maxDate}
          >
            <List.Item arrow="horizontal">{this.props.language.mode}</List.Item>
          </DatePicker>
        </List>
        <WhiteSpace />
        <InputItem type="money" placeholder="money input" />
      </View>
    )
  }
};

export default class Intl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnglish: true,
    };
  }
  handleClick = (e) => {
    this.setState({
      isEnglish: !this.state.isEnglish,
    });
  }
  render() {
    const locale = this.state.isEnglish ? enUS : undefined;
    const type = this.state.isEnglish ? "enus" : "zhcn";
    const { name, unreadCount } = this.state;
    return (
      <WingBlank>
        <Button type="primary" onClick={this.handleClick}>{language[type].text}</Button>
        <WhiteSpace />
        <LocaleProvider locale={locale}>
          <Page language={language[type]} />
        </LocaleProvider>
      </WingBlank>
    );
  }
}
