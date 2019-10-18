import '@tarojs/async-await';
import Taro from '@tarojs/taro';

if (!Taro.canIUse('getAccountInfoSync')) {
  Taro.showModal({
    title: '微信版本过低, 请升级微信版本',
    content: '微信版本过低, 无法体验全部功能',
    showCancel: false
  });
  throw SyntaxError('微信版本过低, 无法动态获取appid');
}

let host: string = 'https://www.baidu.com/';

type Method = 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT';

export type RequestData = {
  [key: string]: any
};

/**
 * 模块说明:有api_token的请求
 */

export const request: (api: string, method: string, data?: RequestData) => Promise<any> = (api: string, method: Method, data?: RequestData) => {
  const url: string = host + 'api/app/' + api;
  const apiToken = '123456';
  return new Promise((resolve, reject) => {
    Taro.request({
      url,
      method: method,
      data,
      header: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiToken}`
      }
    })
      .then(resp => {

        if (resp.statusCode >= 300) {
          console.error('网络错误', resp);
          Taro.showToast({
            title: resp.data,
            icon: 'none'
          })
          reject(resp);
        }
        resolve(resp);
      })
      .catch(async (error) => {
        Taro.showToast({
          title: error.data,
          icon: 'none'
        })
        reject(error);
      });
  });
};

// 上传
export const requestUpload: (api: string, tempFilePaths?: any) => Promise<any> = (api: string, tempFilePaths?: any) => {
  const url: string = host + 'api/app/' + api;
  const apiToken = '123456';
  const file = {
    file: tempFilePaths,
  };
  return new Promise((resolve, reject) => {
    Taro.uploadFile({
      url,
      filePath: tempFilePaths,
      name: 'file',
      formData: file,
      header: {
        // 'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${apiToken}`
      }
    })
      .then(resp => {
        if (resp.statusCode >= 300) {
          console.error('网络错误', resp);
          reject(resp);
        }
        resolve(resp);
      })
      .catch(error => {
        if (error.statusCode === 403) {
          // userStore.handleWXLogin();
        }
        console.error('请求错误', error);
        reject(error);
      });
  });
};

/**
 * 模块说明:无api_token请求
 * @module requestLogin
 * @param {string} api: /api/~/~
 * @param method
 * @param {object} data: {}
 */
export const requestLogin = async (api: string, method: Method, data?: RequestData) => {
  const url = host + 'api/app/' + api;
  try {
    const resp = await Taro.request({
      url,
      method: method,
      data,
      header: {
        'Content-Type': 'application/json',
      }
    });
    if (resp.statusCode >= 300) {
      console.error(resp);
      return Promise.reject(resp);
    }
    return resp;
  } catch (e) {
    console.error(e);
    return Promise.reject('请求错误');
  }
};
