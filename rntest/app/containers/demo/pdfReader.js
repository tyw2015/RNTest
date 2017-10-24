import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import RNFS from 'react-native-fs';
import PDFView from 'react-native-pdf-view';

const options = {
  fromUrl: "http://www.u-paris2.fr/sites/default/files/pdf.pdf",
  toFile: RNFS.DocumentDirectoryPath + '/test.pdf',
  background: true
}

class PDF extends Component {
  state = {
    downloaded: false
  }
  componentDidMount() {
    try {
      const ret = RNFS.downloadFile(options).promise.then(()=>this.setState({ downloaded: true }))
    }
    catch (e) {
      console.log(e)
    }
  }
  render() {
    const { demo: { pdfpath } } = this.props
    return (
      <View style={{ flex: 1 }}>
        {
          this.state.downloaded ?
            <PDFView
              ref={(pdf) => { this.pdfView = pdf }}
              src={RNFS.DocumentDirectoryPath + '/test.pdf'}
              onLoadComplete={(pageCount) => {
                this.pdfView.setNativeProps({
                  zoom: 1
                });
              }}
              style={{ flex: 1 }}
            /> :
            <Text>下载中</Text>
        }
      </View>
    )
  }
}

export default connect(({ demo }) => ({ demo }))(PDF);