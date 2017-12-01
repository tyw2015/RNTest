import { PixelRatio, Platform, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window');
const DevicePixelRatio = PixelRatio.get()

const dp = num => (num * width) / (750 * devicePixelRatio)

const autoAdaption = (obj) => {
  let _tempStyle = {};
  for (let o in obj) {
    let _tempClass = {};
    for (let key in obj[o]) {
      _tempClass[key] = dp(parseFloat(obj[o][key]))
    }
    _tempStyle[o] = _tempClass
  }
  return _tempStyle
}

export default autoAdaption
