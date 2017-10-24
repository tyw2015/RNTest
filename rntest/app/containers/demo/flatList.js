import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList as ReactFlatList
} from 'react-native';
import { Toast } from 'antd-mobile';

class FlatList extends Component {
  state = {
    refreshing: false
  }
  render = () => {
    const { demo: { listData } } = this.props
    return <ReactFlatList
      data={listData}
      ItemSeparatorComponent={() => <View style={styles.separator}></View>}
      ListEmptyComponent={() => <Text>暂无数据</Text>}
      ListHeaderComponent={() => <Text>头部</Text>}
      ListFooterComponent={() => <Text>尾部</Text>}
      onRefresh={() => this.props.dispatch({ type: "test/demo/refresh" })}
      refreshing={this.state.refreshing}
      onEndReachedThreshold={0.05}
      onEndReached={listData.length ? () => Toast.info('到底了', 1, null, false) : null}
      renderItem={({ item }) => <View style={styles.listItem} key={item.name}><Text>{item.des}</Text></View>}
    />
  }
  componentWillUnmount() {
    this.props.dispatch({ type: 'test/demo/reset' })
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#eee'
  },
  listItem: {
    height: 50,
    justifyContent: 'center'
  }
});

export default connect(({ demo }) => ({ demo }))(FlatList)