import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';

import rootReducer from '../reducers/index';


 const middlewares = [];
//  const createLogger = require('redux-logger');

// configuring saga middleware
 const sagaMiddleware = createSagaMiddleware();

 middlewares.push(sagaMiddleware);
/* global __DEV__  */
 if (__DEV__) {
  //  const logger = createLogger();
  //  middlewares.push(logger);
 }
 const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

 //本地存储
 var storage = new Storage({
  // 最大容量，默认值1000条数据循环存储
  size: 1000,

  // 存储引擎：对于RN使用AsyncStorage，对于web使用window.localStorage
  // 如果不指定则数据只会保存在内存中，重启后即丢失
  storageBackend: AsyncStorage,
    
  // 数据过期时间，默认一整天（1000 * 3600 * 24 毫秒），设为null则永不过期
  defaultExpires: null,
    
  // 读写时在内存中缓存数据。默认启用。
  enableCache: true,

});
global.storage = storage;


export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);
  // install saga run
  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);

  return store;
}
