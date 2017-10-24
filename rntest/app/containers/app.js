import React, { Component } from 'react';
import { StyleSheet, BackHandler, DeviceEventEmitter, Platform } from 'react-native';
import { Router, Scene, ActionConst, Reducer, Actions } from 'react-native-router-flux';
import { Toast } from 'antd-mobile';
import { connect } from 'react-redux';
import codePush from "react-native-code-push";
import { IntlProvider } from 'react-intl';
import { CrashReporter, Configuration } from 'rn-crash-reporter';

import HelloWorld from './demo/helloworld';
import Form from './demo/form';
import FlatList from './demo/flatList';
import Swipe from './demo/swipe';
import Tab from './demo/tab';
import Search from './demo/search';
import TabBarPage from './demo/tabBar';
import WebView from './demo/webView';
import Popup from './demo/popup';
import CameraPage from './demo/camera';
import DeviceInfo from './demo/deviceInfo';
import PDF from './demo/pdfReader';
import MAP from './demo/map';
import Intl from './demo/international';
import IM from './demo/im';

const RouterWithRedux = connect()(Router);

const getSceneStyle = (props, computedProps) => {
  const style = {
    flex: 1,
    backgroundColor: '#fff',
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null,
  };
  if (computedProps && computedProps.isActive) {
    style.marginTop = computedProps.hideNavBar ?
      0 : Platform.OS === 'ios' ? 64 : 54
    style.marginBottom = computedProps.hideTabBar ? 0 : 50;
  }

  return style;
};
class App extends Component {
  constructor(props) {
    super(props)
  }
  backHandler = () => {
    if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
      Toast.hide();
      return false;
    }
    this.lastBackPressed = Date.now();
    Toast.info('再按一次退出应用', 2);
    return true;
  }
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backHandler);
    Configuration.setHostURL('http://192.168.11.69:8000');
    Configuration.setIsReportCrash(true)
    // new CrashReporter()
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backHandler);
  }

  render() {
    return (
        <RouterWithRedux
          getSceneStyle={getSceneStyle}
          navigationBarStyle={styles.navBar}
          titleStyle={styles.navBarTitle}
        >
          <Scene key="root">
            <Scene key="helloworld" component={HelloWorld} hideNavBar={true} hideTabBar initial />
            <Scene key="form" component={Form} hideNavBar={false} title={"表单验证"} />
            <Scene key="flatList" component={FlatList} hideNavBar={false} title={"长列表"} />
            <Scene key="swipe" component={Swipe} hideNavBar={false} title={"滑动操作"} />
            <Scene key="tab" component={Tab} hideNavBar={false} title={"Tab页面"} />
            <Scene key="search" component={Search} hideNavBar={false} title={"搜索"} />
            <Scene key="tabBar" component={TabBarPage} hideNavBar={false} title={"标签栏"} />
            <Scene key="webView" component={WebView} hideNavBar={false} title={"webview"} />
            <Scene key="popup" component={Popup} hideNavBar={false} title={"弹出层"} />
            <Scene key="camera" component={CameraPage} hideNavBar={false} title={"相机"} />
            <Scene key="deviceInfo" component={DeviceInfo} hideNavBar={false} title={"设备信息"} />
            <Scene key="pdf" component={PDF} hideNavBar={false} title={"PDF"} />
            <Scene key="map" component={MAP} hideNavBar={false} title={"地图"} />
            <Scene key="international" component={Intl} hideNavBar={false} title={"国际化"} />
            <Scene key="im" component={IM} hideNavBar={false} title={"聊天"} />
          </Scene>
        </RouterWithRedux>
    );
  }
}

App = codePush(App);

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#fff',
    borderBottomColor: 'transparent'
  },
  navBarTitle: {
    color: '#3C5EBE',
    fontSize: 20,
  },
});

export default App;