import {requestLogin, request, requestUpload} from '../../utils/wxPromise'

export const getCardList = async (data) => {
  return await request('card', 'GET', data)
}

export const userLogin = async (data) => {
  return await requestLogin('user/login', 'POST', data)
}

export const upload = async (tempFilePaths) => {
  return await requestUpload('upload', tempFilePaths)
}
