import '@tarojs/async-await';
import Taro from '@tarojs/taro';

 const host = 'http://www.baidu.com';

export type MethodType = 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT';


export type RequestData = {
  readonly [key: string]: any
};

/**
 * 模块说明:有api_token的请求
 */

export const request: (api: string, method?: MethodType, data?: RequestData) => Promise<any> = (api: string, method?: MethodType, data?: RequestData) => {
  const url: string = host + 'api/app/' + api;
  const apiToken = '123456';
  return new Promise((resolve, reject) => {
    Taro.request({
      url,
      method: method ? method : 'GET',
      data,
      header: {
        'Content-Type': 'application/json',
        // 'Sushi-Token': `${apiToken}`,
        'Authorization': `Bearer ${apiToken}`,

      }
    })
      .then(resp => {
        if (resp.statusCode >= 300) {
          console.error('网络错误', resp);
          reject(resp);
        }
        resolve(resp as any);
      })
      .catch(error => {
        if (error.statuscode === 403) {
          // userStore.handleWXLogin();
        }
        console.error('请求错误', error);
        reject(error as any);
      });
  });
};

/**
 * 模块说明:无api_token请求
 * @module requestLogin
 * @param {string} api: /api/~/~
 * @param {string} method: 'POST'||'GET'||'PUT'||'DELETE'
 * @param {object} data: {}
 */
export const requestLogin = async (api: string, method?: MethodType, data?: RequestData) => {
  // const apiToken = 'KrX2hkGuZsmAt8PxM0muCI7UrrJD8AFK10od0H4tzCCzGSO01vl2jDB7JkDo';
  try {
    const url: string = host + 'api/app/' + api;
    const resp = await Taro.request({
      url,
      method: method ? method : 'GET',
      data,
      header: {
        // appid,
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
