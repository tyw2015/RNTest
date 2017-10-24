import React, { Component } from 'react';
import {View,Text,TouchableHighlight,Platform,StyleSheet} from 'react-native';
import { DatePicker, List ,Tag,NavBar,Popover,Button,WhiteSpace,WingBlank } from 'antd-mobile';
const Item = Popover.Item;

class AntMobile extends Component{
    state = {
        visible: false
    }

    render(){
        const handleClick = ()=>{
            this.setState({visible: !this.state.visible});
        }

        const PlaceHolder = props => (
            <Text
            >Item</Text>
            );
    let overlay = [1, 2, 3].map((i, index) => (
      <Item key={index} value={`option ${i}`}><Text>option {i}</Text></Item>
    ));
    overlay = overlay.concat([
      <Item key="4" value="disabled" disabled><Text style={{ color: '#ddd' }}>disabled opt</Text></Item>,
      <Item key="6" value="button ct" style={{ backgroundColor: '#efeff4' }}><Text>关闭</Text></Item>,
    ]);
        return <View>
                    <WingBlank size="sm">
                    <TouchableHighlight onPress={handleClick}>
                        <Text>Ant Mobile Demo</Text>
                    </TouchableHighlight>
                    <Button className="btn" type="primary" onClick={handleClick}>primary 按钮</Button>
                    <View style={styles.menuContainer}>
                    <Popover  
                        style={{ backgroundColor: '#eee' }}
                        contextStyle={styles.contextStyle}
                        overlayStyle={[styles.overlayStyle, Platform.OS === 'android' && styles.androidOverlayStyle]}
                        triggerStyle={styles.triggerStyle}
                        overlay={[(<Popover.Item key="1" value="scan" ><Text>扫一扫</Text></Popover.Item>)]} >

                        <Text>666</Text>
                    </Popover >
                    </View>
                    <DatePicker
                        mode="date"
                        title="选择日期"
                        extra="可选,小于结束日期"
                    >
                    <List.Item arrow="horizontal">日期(CST)</List.Item>
                    </DatePicker>
                    <PlaceHolder />
                    </WingBlank >
                    <View style={styles.menuContainer}>
                        <Popover
                        ref="mc"
                        name="m"
                        style={{ backgroundColor: '#eee' }}
                        overlay={[(<Popover.Item key="1" value="scan" ><Text>扫一扫</Text></Popover.Item>)]}
                        contextStyle={styles.contextStyle}
                        overlayStyle={[styles.overlayStyle, Platform.OS === 'android' && styles.androidOverlayStyle]}
                        triggerStyle={styles.triggerStyle}
                        onSelect={()=>{}}
                        >
                        <Text>菜单</Text>
                        </Popover>
                    </View>
               </View>
    }
}

const styles = StyleSheet.create({
  contextStyle: {
    margin: 50,
    flex: 1,
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 400,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  triggerStyle: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  overlayStyle: {
    left: 90,
    marginTop: 20,
  },
  // 在 iOS 上弹出层有阴影，Android 上没有，
  // 详细：http://facebook.github.io/react-native/releases/0.39/docs/shadow-props.html#shadowcolor
  androidOverlayStyle: {
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default AntMobile;