import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  WebView as RnWebView,
  Button,
  TouchableOpacity
} from 'react-native';

export default class WebView extends Component {
  injectJS = () => {
    const script = 'document.onClick=function(e){e.preventDefault();document.write(e.target)}';
    if (this.webviewer) {
      this.webviewer.injectJavaScript(script);
    }
  }
  render() {
    return <View style={{ flex: 1 }}>
      <RnWebView
        ref={webviewer => { this.webviewer = webviewer; }}
        source={{ uri: 'http://www.baidu.com', method: 'GET' }}
      />
      <TouchableOpacity onPress={()=>this.injectJS()}>
        <Text>Press me</Text>
      </TouchableOpacity>
    </View>
  }
}